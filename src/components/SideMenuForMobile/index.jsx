import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function SideMenuForMobile({ onClose }) {
    const { SubMenu } = Menu;
    const items = [
        {
            title: '小說',
            key: 'Novel',
            items : [
                { title: '驚悚恐怖', key: 'Horror' },
                { title: '懸疑推理', key: 'Suspense' },
                { title: '奇幻科幻', key: 'SF' },
                { title: '愛情', key: 'Romance' },
            ],
        },
        {
            title: '漫畫',
            key: 'Manga',
            items : [
                { title: '男性向', key: 'NL' },
                { title: '女性向', key: 'TL' },
                { title: '耽美', key: 'BL' },
                { title: '百合', key: 'GL' },
            ],
        },
        {
            title: '公仔',
            key: 'PVC',
            items : [
                { title: 'Vtuber', key: 'Vtuber' },
                { title: '動畫', key: 'Animate' },
            ],
        },
        {
            title: '各式周邊',
            key: 'Merch',
            items : [
                { title: '生活小物', key: 'item' },
            ],
        },
    ]




    return (
        <div>
            <Menu mode="inline" breakpoint="lg" selectable={false} style={{ width: '100%', borderInlineEnd: '0px' }}>
                <Menu.Item key="1"><Link to="/">首頁</Link></Menu.Item>
                {items.map((item) =>
                
                <SubMenu key={item.key}  title={item.title} >
                    {item.items.map((child) => (
                        <Menu.Item style={{borderRadius:'0px'}} key={child.key}>
                             <Link to={`/AllProducts/category/${item.key}/${child.key}/1`}>{child.title}</Link>
                        </Menu.Item> 
                    ))}
                </SubMenu>
  
        )}
                <Menu.Item key="2"><Link to="/About">關於我們</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/Qa">常見問答</Link></Menu.Item>
                <Menu.Item key="4"><Link to="">會員中心</Link></Menu.Item>
            </Menu>

        </div>
    );
}