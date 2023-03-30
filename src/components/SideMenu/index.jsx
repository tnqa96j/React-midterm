import { Menu } from 'antd';
import '../../App.css';

export default function SideMenu() {
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
        <Menu mode="inline" breakpoint="lg"> 
            {items.map((item) =>
                item.items ? (
                    <SubMenu key={item.key}  title={item.title}>
                        {item.items.map((child) => (
                            <Menu.Item key={child.key}>{child.title}</Menu.Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Menu.Item key={item.key}>
                        {item.title}
                    </Menu.Item>
                )
            )}
        </Menu>
    );
}