import '../../App.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import styles from "./qa.module.css";
import DayNightSwitcher from '../DayNightSwitcher';
import { theme } from 'antd';

export default function QA() {

    const onChange = (key) => {
        console.log(key);
    };

    const {
        token: { colorQaHeaderBig, colorQaHeaderSmall },
    } = theme.useToken();

    return (
        <div>
            <div className={styles.switcher}>
                <DayNightSwitcher />
            </div>
            <h1 > 常見問題</h1>
            <Collapse onChange={onChange} style={{ borderRadius: '0px' }} bordered={false} 
            >
                <Panel header="關於訂單" key="1" style={{ backgroundColor: colorQaHeaderBig }} className={styles.header}>
                    <Collapse style={{ borderRadius: '0px' }} bordered={false}>
                        <Panel header="如何下單？" key="1" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 點選欲購買的商品進入商品介紹頁面，輸入欲購買的數量，再點選加入購物車，隨後點選購物車的圖案，在購物車頁面找到該商品並點擊下單購買，依指示選擇付款方式，配送地點等動作，出現下單完成頁面則代表已完成訂單。</p>
                        </Panel>
                        <Panel header="如何查詢訂單狀態？" key="2" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 完成下單動作後，點選會員圖示進入會員帳戶頁面，尋找欲查詢訂單狀態的商品並點選該商品，點選商品下排的狀態查詢，便能看到目前該商品。
                            </p>
                        </Panel>
                        <Panel header="訂單如何取消或更改？" key="3" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 若是欲取消已下單的商品，請點選會員圖示進入會員帳戶頁面，尋找欲撤銷訂單的商品，該商品的下排會出現取消訂單，點選該項目，依指示完成動作，出現已取消訂單的頁面則表示已成功撤銷該商品的訂單。<br />
                                若是欲更改已下單的商品，請點選會員圖示進入會員帳戶頁面，尋找欲更改訂單的商品，該商品的下排會出現更改內容，點選該項目，選擇欲更改的內容，依指示完成動作，出現已完成更改的頁面後，確認該商品的訂單內容，確認完畢則表示已成功更改該商品的訂單。<br />
                                若是要取消尚未下單但在購物車裡的商品，點選購物車的圖示，找到欲刪除的商品並點選右邊的叉叉即可將該商品從購物車裡刪除。
                            </p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於付款" key="2" style={{ backgroundColor: colorQaHeaderBig }} className={styles.header}>
                    <Collapse style={{ borderRadius: '0px' }} bordered={false}>
                        <Panel header="接受哪些付款方式？" key="1" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>預先付款則接受信用卡，金融卡或銀行轉帳的方式付款。
                            </p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於商品" key="3" style={{ backgroundColor: colorQaHeaderBig }} className={styles.header}>
                    <Collapse style={{ borderRadius: '0px' }} bordered={false}>
                        <Panel header="商品有無保固？" key="1" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 公仔項目商品有提供三個月的保固期。</p>
                        </Panel>
                        <Panel header="商品的鑑賞期限？" key="2" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 有，各項商品在買家收到商品後有十天的鑑賞期，如欲退換貨請在這十天內辦理手續。</p>
                        </Panel>
                        <Panel header="如何選擇適合自己的商品？" key="3" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 先想好欲購買何種主題的書籍或哪部作品周邊，選擇自己欲買的商品種類，可考慮自家放空間，或個人風格等因素挑選欲購買的作品相關周邊商品大小和樣式。
                            </p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於配送" key="4" style={{ backgroundColor: colorQaHeaderBig }} className={styles.header}>
                    <Collapse style={{ borderRadius: '0px' }} bordered={false}>
                        <Panel header="有哪些配送方式？" key="1" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A:國際快遞、一般宅配。</p>
                        </Panel>
                        <Panel header="配送需要多久？" key="2" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 依該商品的配送距離及下單時期而有所差異。<br />
                                海內的配送，一般在接受訂單後在七到十四日內會完成配送，若是在特殊時期，則有可能需十四日到一個月的時間。<br />
                                海外的配送，則可能需要三個月至一年的時間。
                            </p>
                        </Panel>
                        <Panel header="可否提供國際配送？" key="3" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 會，但國際配送耗時較久，如商品有需要退貨或是更改的狀況也會需要較多時間處裡。
                            </p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於售後服務" key="5" style={{ backgroundColor: colorQaHeaderBig }} className={styles.header}>
                    <Collapse style={{ borderRadius: '0px' }} bordered={false}>
                        <Panel header="如何聯繫客服？" key="1" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 透過電話，信箱，或是粉專都能聯繫客服。<br />
                                在網頁底部會找到聯絡我們的區域，可以利用那些媒體關注粉專及聯絡我們。<br />
                                或是在上方導覽列點擊網頁介紹，到介紹頁面的聯絡我們區域可以找到我們的客服專線和信箱。
                            </p>
                        </Panel>
                        <Panel header="如何辦理退換貨？" key="2" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 請注意幾項原則：<br />
                                若已將商品拆封即無法申請退貨！申請退貨商品須保持完整無誤、且無人為損傷的情形下才能申請。<br />
                                有標示不接受退貨的特殊商品(例叫貨商品、客製化、署名及商品頁面有特別告知)之商品，不接受退換。<br />
                                若是已付完款項並已取得商品欲退貨，請於收到商品十天內，保留發票並拍攝，或是截圖該商品已付款頁面，聯繫客服，我們會給予退換貨申請表單，附上已付照片並填寫退換貨原因，經由審核後將授予退換貨，即可將欲退換商品寄回我們任何據點。<br />
                                若是換貨則可選擇相同或以上的金額進行換貨，收到欲換貨商品會給予商品券可購買官網上等價的商品。
                                請注意，任何退換貨將會留有紀錄，請勿惡意退換貨物。
                            </p>
                        </Panel>
                        <Panel header="售後服務有哪些保障？" key="3" style={{ backgroundColor: colorQaHeaderSmall }} className={styles.header}>
                            <p className={styles.p}>A : 會提供十天鑑賞和退換貨處理，公仔的商品則提供三個月保固，售後三個月內皆可送回任何據點接收維修。</p>
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        </div>
    );
}