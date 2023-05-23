import styles from './comments.module.css'
import { List, Input, Avatar, Row, Col, Rate, Form, Button,Spin } from 'antd'
const { TextArea } = Input;
import { useUserInfo, useWriteComment, useGetComments } from "../../react-query";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';


export default function Comments() {

    const { productId } = useParams();

    const { data: userInfo } = useUserInfo();
    const writeComment = useWriteComment();
    const { data: commentInfo, isLoading } = useGetComments(productId);

    console.log(commentInfo)

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('評論內容:', values.comment);
        console.log('星數:', values.rating);
        // 在這裡處理提交評論的邏輯，例如將評論保存到後台
        writeComment.mutate({
            productId,
            comment: values.comment,
            rate: values.rating,
        });
        // 清空表單
        form.resetFields();
    };

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 100,
            }}
            spin
        />
    );



    return (
        <div>
            {userInfo?.name
                ? (isLoading
                    ? (<div className='spinner-wrap'>
                        <Spin indicator={antIcon} className='spinner' />
                    </div>)
                    : (<Row>
                        <Col
                            xs={{ span: 3 }}
                            sm={{ span: 2 }}
                            lg={{ span: 1 }}>
                            <Avatar src={userInfo.photoUrl} />
                        </Col>
                        <Col
                            xs={{ span: 21 }}
                            sm={{ span: 22 }}
                            lg={{ span: 23 }}
                        >

                            <Form
                                form={form}
                                onFinish={onFinish}>

                                <Form.Item name="rating"
                                    rules={[{ required: true, message: '請為購買商品評分' }]}>
                                    <Rate allowHalf />
                                </Form.Item>

                                <Form.Item name="comment"
                                    rules={[{ required: true, message: '請輸入您的評論' }]}>
                                    <TextArea placeholder="請寫下您對於商品的評價"
                                        autoSize={{
                                            minRows: 2,
                                            maxRows: 6,
                                        }} />
                                </Form.Item>



                                <Form.Item>
                                    <Button type="primary" htmlType="submit">提交評論</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>)


                )
                : (<TextArea
                    placeholder="加入宅小物會員，留下您寶貴的評價吧！"
                    autoSize={{
                        minRows: 2,
                        maxRows: 6,
                    }}
                    disabled
                />

                )

            }
            <List
                itemLayout="horizontal"
                dataSource={commentInfo}
                pagination
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.commentUserInfo.photoUrl} />}
                            title={
                                <>
                                    {item.commentUserInfo.name}
                                    <Rate style={{ marginLeft: '10px' }} defaultValue={item.rate} disabled allowHalf />
                                </>
                            }
                            description={<>
                                {item.content}
                                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                    {(() => {
                                        const date = new Date(item.time);
                                        const localDateTime = date.toLocaleString();
                                        return localDateTime;
                                    })()}
                                </div>
                            </>}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}