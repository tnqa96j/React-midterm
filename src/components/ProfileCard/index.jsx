import styles from './profilecard.module.css'
import UploadAvatar from '../UploadAvatar';
import { useState, useEffect } from 'react';
import { useUploadPhoto, useUpdateProfile, useLogout, useUserInfo,useGetFavoriteProducts } from '../../react-query';
import { Button, Col, Form, Input, Row, Select, DatePicker, Upload, Avatar, Tabs, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import ProductList from '../ProductList';




const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
};

const config = {
    rules: [
        {
            type: 'object',
            message: 'Please select time!',
        },
    ],
};

//轉碼
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
    console.log("有經過getBase64")
};



export default function ProfileCard({ redirect }) {



    const uploadPhoto = useUploadPhoto();

    const { data: userInfo } = useUserInfo() || {};
    const { data:favoriteProduct,isLoading } = useGetFavoriteProducts(userInfo.uid) || {};
    favoriteProduct?console.log("有喔") :console.log("沒喔")

    const update = useUpdateProfile();
    const logout = useLogout();
    const navigate = useNavigate();

    const [form] = Form.useForm();

    //form交出去執行的
    const onUpdate = async (values) => {
        const date = dayjs(values['date-picker']).format('YYYY-MM-DD');
        console.log(values['avatar']);
        values['avatar'] = userInfo.photoUrl || '';
        console.log('Received values of form: ', date);
        console.log('Received values of form: ', values['avatar']);
        console.log("Received update info: ", values);
        update.mutate({ ...values, birth: date, photo: userInfo.photoUrl, uid: userInfo.uid });
    };


    //登出
    const onLogout = () => {
        logout.mutate();
        navigate("/");
    }

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [file, setFile] = useState();

    //上傳到firebase(?)
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    //定義上傳按紐
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );


    //得到該圖片的base64編碼
    const handleChange = (info) => {
        // Get this url from response in real world.
        console.log(info.file.originFileObj);
        getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
            console.log("縮圖顯示成功!")
            setFile(info.file.originFileObj);
            uploadPhoto.mutate(info.file.originFileObj);

        });

    };

    //上傳前檢查
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        return isJpgOrPng;
    };


    //上傳時和後台的接口
    const customRequest = (info) => {
        console.log(info.file.originFileObj);
        uploadPhoto.mutate(info.file.originFileObj);
    }




    useEffect(() => {
        form.setFieldsValue(userInfo)
    }, [userInfo])

    const [isAreaVisible, setAreaVisible] = useState(false);

    const toggleArea = () => {
        setAreaVisible(!isAreaVisible);
    };

    const key = 'updatable';

//更新資料成功出現
    const openNotification = () => {
        setTimeout(() => {
            notification.open({
                key,
                message: '已成功更新個人資料！',
                placement: 'bottom',
                duration: 1,
                maxCount:1
            })
          }, 500);
        };

//撈ㄍ興趣清單



    


    return (
        <Tabs className={styles.member}
            items={[
                {
                    label: "個人專區",
                    key: "1",
                    children: (

                        <div className={styles.m1}>

                            <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{userInfo.name}的個人檔案</h1>
                            <Row>
                                <Col
                                    xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 6 }}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                                    <Avatar shape='circle' size={{
                                        xs: 54,
                                        sm: 54,
                                        md: 54,
                                        lg: 72,
                                        xl: 128,
                                    }} src={userInfo.photoUrl} />
                                </Col>

                                <Col
                                    xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 18 }}>

                                    <Row className={styles.row}>
                                        <Col
                                            sm={{ span: 12 }}
                                        >使用者名稱</Col>
                                        <Col
                                            sm={{ span: 12 }}>
                                            {userInfo.name}
                                        </Col>
                                    </Row>
                                    <Row className={styles.row}>
                                        <Col
                                            sm={{ span: 12 }}>電子信箱</Col>
                                        <Col
                                            sm={{ span: 12 }}>{userInfo.email}</Col>
                                    </Row>
                                    <Row className={styles.row}>
                                        <Col
                                            sm={{ span: 12 }}>地區</Col>
                                        <Col
                                            sm={{ span: 12 }}>{userInfo.adrs}</Col>
                                    </Row>
                                    <Row className={styles.row}>
                                        <Col
                                            sm={{ span: 12 }}>性別</Col>
                                        <Col
                                            sm={{ span: 12 }}>{userInfo.gender}</Col>
                                    </Row>
                                    <Row className={styles.row}>
                                        <Col
                                            sm={{ span: 12 }}>生日</Col>
                                        <Col
                                            sm={{ span: 12 }}>{userInfo.birth}</Col>
                                    </Row>
                                </Col>

                            </Row>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Button onClick={toggleArea} style={{ width: '40%', margin: '2rem auto' }}>編輯個人資料</Button>
                            </div>


                            {isAreaVisible && <div className={styles.m2}>

                                <Form
                                    {...formItemLayout}
                                    onFinish={onUpdate}
                                    form={form}
                                    name="profile"
                                    scrollToFirstError
                                    className={styles.form}
                                    initialValues={userInfo}
                                >
                                    <Form.Item
                                        name="avatar"
                                        label="選擇圖片"
                                        labelAlign='left'
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}>

                                        <Upload
                                            name="avatar"
                                            listType="picture-circle"
                                            showUploadList={false}
                                            customRequest={customRequest}
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}>
                                            {imageUrl ? (
                                                <Avatar
                                                    src={imageUrl}
                                                    alt="avatar"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%'
                                                    }}
                                                />
                                            ) : (
                                                <Avatar
                                                    src={userInfo.photoUrl}
                                                    alt="avatar"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%'
                                                    }}
                                                />
                                            )}
                                        </Upload>

                                    </Form.Item>

                                    <Form.Item
                                        name="name"
                                        label="姓名"
                                        labelAlign='left'
                                        rules={[
                                            {
                                                type: "string",
                                                message: "並非有效的姓名!",
                                            },
                                            {
                                                message: "請輸入你的姓名!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder={userInfo.name} />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="電子信箱"
                                        labelAlign='left'
                                        rules={[
                                            {
                                                type: 'email',
                                                message: '格式不符',
                                            },
                                            {
                                                message: '請輸入您的電子信箱',
                                            },
                                        ]}
                                    >
                                        <Input placeholder={userInfo?.email || ""} />
                                    </Form.Item>

                                    <Form.Item
                                        label="地址: "
                                        name="adrs"
                                        labelAlign='left'
                                        rules={[
                                            {
                                                type: "string",
                                                message: "並非有效的地址!",
                                            },
                                            {
                                                message: "請輸入你的地址!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder={userInfo?.adrs || ""} />
                                    </Form.Item>


                                    <Form.Item
                                        label="電話: "
                                        name="tel"
                                        labelAlign='left'
                                        rules={[
                                            {
                                                type: "string",
                                                message: "並非有效的電話號碼!",
                                            },
                                            {
                                                message: "請輸入你的電話號碼!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder={userInfo?.tel || 'xxxx-xxxxxx'} />
                                    </Form.Item>



                                    <Form.Item
                                        name="gender"
                                        label="性別"
                                        labelAlign='left'
                                        rules={[
                                            {
                                                type: "string",
                                            },
                                            {
                                                message: "請輸入性別",
                                            },
                                        ]}
                                    >
                                        <Select
                                            options={[
                                                {
                                                    value: '女',
                                                    label: '女',
                                                },
                                                {
                                                    value: '男',
                                                    label: '男',
                                                },
                                                {
                                                    value: '其他',
                                                    label: '其他',
                                                }
                                            ]}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="date-picker"
                                        label="生日"
                                        {...config}
                                        labelAlign='left'>
                                        <DatePicker placeholder={userInfo?.birth || "請選擇生日"} />
                                    </Form.Item>

                                    <Form.Item>

                                        {update.isLoading
                                            ? (<Button type="primary" htmlType="submit" block loading >
                                                儲存資料
                                            </Button>)
                                            : (<Button type="primary" htmlType="submit" block style={{ color: '#6C5574' }}>
                                                儲存資料
                                            </Button>)
                                        }
                                        {
                                            update.isSuccess ? openNotification() : null
                                        }

                                    </Form.Item>
                                </Form>

                            </div>}
                        </div>

                    ),
                },
                {
                    label: "我的興趣清單",
                    key: "2",
                    children: (
                        <div className={styles.m1}>
                             <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{userInfo.name}的興趣清單</h1>
                        <ProductList products={favoriteProduct} isLoading={isLoading}/>
                        </div>
                    ),
                },
                {
                    label: "我的購買清單",
                    key: "3",
                    children: (
                        <>

                        </>
                    ),
                },

            ]}>

        </Tabs>
    );
}