import '../../App.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function QA() {

    const onChange = (key) => {
        console.log(key);
    };

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    return (
        <div>
            <Collapse onChange={onChange}>
                <Panel header="關於訂單" key="1">
                    <Collapse  >
                        <Panel header="如何下單？" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="如何查詢訂單狀態？" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="訂單如何取消或更改？" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於付款" key="2">
                    <Collapse  >
                        <Panel header="接受哪些付款方式？" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="付款後多久能收到商品？" key="2">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於商品" key="3">
                    <Collapse >
                        <Panel header="商品有無保固？" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="如何選擇適合自己的商品？" key="2">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於配送" key="4">
                    <Collapse>
                        <Panel header="有哪些配送方式？" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="配送需要多久？" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="可否提供國際配送？" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="關於售後服務" key="5">
                    <Collapse>
                        <Panel header="如何聯繫客服？" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="如何辦理退換貨？" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="售後服務有哪些保障？" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        </div>
    );
}