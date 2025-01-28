"use client";

import React from 'react';
import {Button, Checkbox, Form, Input, Radio} from 'antd';
import Link from "next/link";
import Image from "next/image";


const Login = () => {

    const onFinish = (values) => {
        console.log("success", values);
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="card w-400">
                <div className="card-header py-4">
                    <Image
                        src="/woxs-logo.png"
                        alt="woxs logo"
                        height="30"
                        width="120"
                        style={{objectFit: "contain", paddingBottom: "10px"}}
                        priority={true}
                    />
                    <p className="text-sm py-1">Welcome back.Please enter your details below to login</p>
                </div>
                <div className="card-content">
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item name="userType" label="Login as" >
                            <Radio.Group>
                                <Radio value="employer">Employer</Radio>
                                <Radio value="employee">Employee</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            label="Username"
                            name="Name"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" label={null}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" block>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className="card-footer">
                    <p className="text-sm">Don't have an account? <span><Link href="/register" className="card-footer-span">Register</Link></span></p>
                </div>

            </div>
        </div>
    )
}
export default Login
