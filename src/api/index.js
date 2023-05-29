import { getApps, getApp, initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    getDocs,
    deleteDoc,
    query,
    where,
    addDoc,
    initializeFirestore,
} from "firebase/firestore";
import {
    getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    initializeAuth,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { getStorage, ref, getDownloadURL, uploadBytes, uploadBytesResumable } from "firebase/storage";
import products from "../json/products.json";
import _ from "lodash";



const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
};
5
const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "products");

export const feedProducts = async () => {
    //刪掉現在資料庫所有資料
    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach(async (product) => {
        await deleteDoc(doc(db, "products", product.id));
    });
    // 餵新資料
    products.forEach(async (product) => {
        const docRef = await doc(productsCollection);
        await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
    });
};

export const getProducts = async () => {
    let querySnapshot = await getDocs(productsCollection);

    // Convert the query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
        await result.push(product.data());
    });
    return result;
};


export const getProductById = async ({ queryKey }) => {
    const [_, id] = queryKey;
    const docRef = await doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};


export const getProductsByCategory = async ({ queryKey }) => {
    const [category] = queryKey;
    const q = await query(
        productsCollection,
        where("category", "==", category.toUpperCase())
    );
    let querySnapshot = await getDocs(q);
    // Convert the query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
        await result.push(product.data());
    });
    return result;
};

export const getProductsBySubCategory = async ({ queryKey }) => {
    const [subCategory] = queryKey;
    const a = await query(
        productsCollection,
        where("subCategory", "==", subCategory.toUpperCase())
    );
    let querySnapshot = await getDocs(a);
    let result = [];
    querySnapshot.forEach(async (product) => {
        await result.push(product.data());
    });
    return result;

}


// Initialize Auth
const auth = app_length ? getAuth(app) : initializeAuth(app);

export const login = async ({ email, password }) => {
    await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
    const user = auth.currentUser;
    localStorage.setItem("user", JSON.stringify(user));
};



export const register = async ({ name, email, password }) => {
    //建立
    const userCredential = await createUserWithEmailAndPassword(
        auth, email, password
    );

    const defaultAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
    const user = userCredential?.user;
    localStorage.setItem("user", JSON.stringify(user));
    const docRef = doc(db, "users", user.uid);
    //在建立帳號時，也⼀併使⽤帳號的uid儲存⽤⼾的詳細資料(⽬前僅儲存⽤⼾姓名)
    await setDoc(docRef, {
        name,
        photoUrl: defaultAvatar,
    });
}

export const logout = async () => {
    auth.signOut();
    localStorage.removeItem("user");
}

export const getUserInfo = async () => {
    const storedUser = localStorage.getItem("user");
    const user = auth?.currentUser || JSON.parse(storedUser) || null;

    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const userDoc = docSnap.data();
        return {
            uid: user.uid,
            email: user.email,
            ...userDoc,
        };
    } else {
        return {}
    }
}

export const updateUserInfo = async ({ name, adrs, tel, gender, birth, photo, uid }) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
        name,
        adrs,
        tel,
        gender,
        birth,
        photo,

    });
    const user = auth.currentUser;
    localStorage.setItem("user", JSON.stringify(user));
}


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

//按下儲存個人資料的按鈕之後，圖片上傳->取得圖片連結->更新user profile裡的photoURL

export const UploadPhoto = async (file) => {
    let user = auth.currentUser;
    localStorage.setItem("user", JSON.stringify(user));

    if (!user) {
        console.log("User not logged in.");
        return;
    } else {
        console.log("User logged in.");
    }

    let id = user.uid;


    const storageRef = ref(storage);
    const imagesRef = ref(storageRef, 'images');
    const spaceRef = ref(imagesRef, id);
    const userRef = doc(db, "users", id);
    const uploadTask = uploadBytesResumable(spaceRef, file);

    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
            console.error("Error updating document: ", error);
            return null;
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                updateDoc(userRef, {
                    photoUrl: downloadURL,
                });
                console.log("Document successfully updated!");
                return downloadURL; // 返回图片的 URL
            });
        }
    );

    /*try {
        await uploadBytes(spaceRef, file);
        const imageUrl = await getDownloadURL(spaceRef);
        await updateDoc(userRef, {
            photoUrl: imageUrl,
        });
        console.log("Document successfully updated!");
        return imageUrl; // 返回图片的 URL
    } catch (error) {
        console.error("Error updating document: ", error);
        return null;
    }*/

}

export const toggleFavoriteProduct = async ({ productId, uid }) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    const favorites = userDoc?.favorites || [];
    if (favorites.length === _.pull(favorites, productId).length) {
        favorites.push(productId);
    }
    await updateDoc(docRef, { favorites });
    return favorites;
}

//寫評論進firebase
export const writeComment = async ({ productId, comment, rate }) => {
    const storedUser = localStorage.getItem("user");
    const user = auth?.currentUser || JSON.parse(storedUser) || null;

    console.log(user)

    if (!user) {
        console.log("User not logged in.");
        return;
    } else {
        console.log("User logged in.");
    }

    let id = user.uid;



    //comments collection
    console.log(productId);
    const productRef = doc(productsCollection, productId);
    const commentsRef = collection(productRef, "comments");
    let timeStamp = Date.now();

    //comments collection裡的document
    const docCommentsRef = await addDoc(commentsRef, {
        uid: id,
        content: comment,
        rate: rate,
        time: timeStamp,
    });
}



//從firebase撈評論
/*export const getComments = async ({ queryKey }) => {
    const [_, productId] = queryKey;
    console.log("productId is" + productId);

    const productRef = doc(productsCollection, productId);
    const commentsRef = collection(productRef, "comments");

    const querySnapshot = await getDocs(commentsRef);
    const comments = [];

    // 取得所有使用者資料
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = usersSnapshot.docs.reduce((map, doc) => {
        const userData = doc.data();
        map[userData.uid] = {
            name: userData.name,
            photoUrl: userData.photoUrl,
        };
        return map;
    }, {});


    querySnapshot.forEach((doc) => {
        const comment = doc.data();
        const commentUserInfo = users[comment.uid];
    
        comments.push({
          ...comment,
          commentUserInfo: commentUserInfo ? { name: commentUserInfo.name, photoUrl: commentUserInfo.photoUrl } : null,
        });
       /* comments.push(doc.data());
        console.log(doc.id, " => ", doc.data());*/
   /* });
    return comments;
};*/

export const getComments = async ({ queryKey }) => {
    let user = auth.currentUser;
    localStorage.setItem("user", JSON.stringify(user));

    const [_, productId] = queryKey;
  
    const productRef = doc(productsCollection, productId);
    const commentsRef = collection(productRef, "comments");
  
    const querySnapshot = await getDocs(commentsRef);
    const comments = [];
  
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = usersSnapshot.docs.reduce((map, doc) => {
      const userData = doc.data();
      map[doc.id] = {
        name: userData.name,
        photoUrl: userData.photoUrl,
      };
      return map;
    }, {});
  
    querySnapshot.forEach((doc) => {
      const comment = doc.data();
      const commentUserInfo = users[comment.uid];
  
      comments.push({
        ...comment,
        commentUserInfo: commentUserInfo ? { name: commentUserInfo.name, photoUrl: commentUserInfo.photoUrl } : null,
      });
    });

    comments.sort((a, b) => b.time - a.time);


  
    return comments;
  };

  export const getFavoriteProducts = async ({ queryKey }) => {
    try {
      const [id] = queryKey;
      console.log("有傳到喔" + id);
      const docRef = await doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      const userInfo = docSnap.data();
      console.log(userInfo);
      const favorites = userInfo?.favorites || [];
      console.log(favorites);
  
      const products = [];
  
      const q = query(collection(db, "products"), where("id", "in", favorites));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        products.push(productData);
      });
  
      console.log("撈出的特定產品：", products);
      return products;
    } catch (error) {
      console.error("撈出特定產品時發生錯誤：", error);
      throw error;
    }
  };

  
  
  
  
 
  
  
  
  
  
  
  


