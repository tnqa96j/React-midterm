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
        },
        {
            title: '各式周邊',
            key: 'Merch',
        },
    ]



    return (
        <div>
            <Menu mode="inline" breakpoint="lg" style={{ width: '100%', borderInlineEnd: '0px' }}>
                <Menu.Item key="1"><Link to="/">首頁</Link></Menu.Item>
                {items.map((item) =>
                    item.items ? (
                        <SubMenu key={item.key} title={item.title} >
                            {item.items.map((child) => (
                                <Menu.Item key={child.key} onClick={() => { onClose() }}>
                                    <Link to={`/AllProducts/category/${child.key}`}>{child.title}</Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item key={item.key} onClick={() => { onClose() }}>
                            <Link to={`/AllProducts/category/${item.key}`}>{item.title}</Link>
                        </Menu.Item>
                    )
                )}
                <Menu.Item key="2"><Link to="/About">關於我們</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/Qa">常見問答</Link></Menu.Item>
            </Menu>

        </div>
    );
}