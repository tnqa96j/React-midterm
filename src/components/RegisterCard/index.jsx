import styles from './registercard.module.css'
import '../../App.css';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRegisterWithEmailPassword } from '../../react-query';
import { WarningOutlined } from '@ant-design/icons';
import { theme } from 'antd';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
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

export default function RegisterCard({ redirect }) {
    const { mutate, error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword();

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
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
                className={styles.form}
                style={{backgroundColor:colorBgBase,borderColor:colorBgBase}}
            >
                <h1 style={{textAlign:'center',marginBottom:'2rem'}}>登錄</h1>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="name"
                        label="使用者名稱"
                        labelAlign='left'
                        rules={[
                            {
                                required: true,
                                message: '請輸入您的使用者名稱',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
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
                                required: true,
                                message: '請輸入您的電子信箱',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密碼"
                        labelAlign='left'
                        rules={[
                            {
                                required: true,
                                message: '請輸入您的密碼',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="再次輸入密碼"
                        labelAlign='left'
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '請再次輸入您的密碼',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('輸入密碼不符'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>





                    <Form.Item
                        name="phone"
                        label="電話號碼"
                        labelAlign='left'
                        rules={[
                            {
                                message: '請輸入您的電話號碼',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>



                    <Form.Item
                        name="gender"
                        label="性別"
                        labelAlign='left'
                        rules={[
                            {
                                message: '請選擇您的性別',
                            },
                        ]}
                    >
                        <Select placeholder="請選擇您的性別">
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                            <Option value="other">其他</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('選項未勾選')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            我同意所有使用者條款
                        </Checkbox>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        {isLoading
                            ? (<Button type="primary" htmlType="submit" block loading>
                                建立帳號
                            </Button>)
                            : (<Button type="primary" htmlType="submit" block>
                                建立帳號
                            </Button>)}
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>已經有帳號？ <Link to={`/auth/login?redirect=${redirect}`}>登錄</Link></div>
                        {!isError ? (
                            <div></div>
                        ) : (
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