import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../App.css';
import { theme } from 'antd';

export default function SideMenu({onClose,CategoryClick}) {
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
        <Menu mode="inline" breakpoint="lg" selectable={false} style={{width:'100%',borderInlineEnd:'0px',borderRadius:'0px'}}> 

            {items.map((item) =>
                item.items ? (
                    <SubMenu key={item.key}  title={item.title} >
                        {item.items.map((child) => (
                            <Menu.Item style={{borderRadius:'0px'}} key={child.key} onClick={() => {onClose(); CategoryClick(item.key, child.key,item.title,child.title);}}>
                                <Link to={`/AllProducts/category/${item.key}/${child.key}`}>{child.title}</Link>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Menu.Item key={item.key} onClick={() =>{ onClose();CategoryClick(item.key, child.key,item.title,child.title);}}>
                        <Link to={`/AllProducts/category/${item.key}`}>{item.title}</Link>
                    </Menu.Item>
                )
            )}
        </Menu>
    );
}