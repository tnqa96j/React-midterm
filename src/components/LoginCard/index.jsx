import styles from './logincard.module.css'
import { LockOutlined, UserOutlined, MailOutlined,WarningOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailPassword } from '../../react-query';
import { useState, useEffect } from 'react';
import { theme } from 'antd';


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
        lg: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
        lg: {
            span: 18,
        },
    },
};



const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
    },
};

export default function LoginCard({ redirect }) {
    const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
    const [isRemember, setIsRemember] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        mutate(values);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate(redirect);
        }
    }, [isSuccess, redirect]);

    const {
        token: { colorBgBase, colorPrimary },
    } = theme.useToken();


    return (
        <Row gutter={[10, 20]}> 
            <Col
                xs={{ span: 18 }}
                sm={{ span: 18 }}
                lg={{ span: 10 }}
                xl={{ span: 8 }}
                className={styles.form}
                style={{backgroundColor:colorBgBase,borderColor:colorBgBase}}
            >
                <h1 style={{textAlign:'center',marginBottom:'2rem'}}>登錄</h1>
                <Form
                    name="normal_login"
                    {...formItemLayout}
                    form={form}
                    initialValues={{
                        isRemember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        label="電子信箱"
                        labelAlign='left'
                        rules={[
                            {
                                type: "email",
                                message: "格式不符",
                            },
                            {
                                required: true,
                                message: "尚未輸入電子信箱",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="電子信箱"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密碼"
                        labelAlign='left'
                        rules={[
                            {
                                required: true,
                                message: '尚未輸入密碼',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密碼"
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>記住我</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            忘記密碼
                        </a>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        {isLoading
                            ? (<Button type="primary" htmlType="submit" block loading>
                                登錄
                            </Button>)
                            : (<Button type="primary" htmlType="submit" block>
                                登錄
                            </Button>)}
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>還沒有帳號？ <Link to={`/auth/register?redirect=${redirect}`}>註冊</Link></div>
                        {!isError
                            ? (<div></div>)
                            : (
                                <div className={styles.loginForm__errorWrap}>
                                    <h3 className={styles.loginForm__errorTitle}>
                                        <WarningOutlined />
                                        {"  "}錯誤訊息
                                    </h3>
                                    <p className={styles.loginForm__errorMessage}>{error.message}</p>
                                </div>
                            )}
                    </Form.Item>
                </Form>
            </Col>
        </Row>


    );
}