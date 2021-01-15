import React, {useState, useCallback} from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import {useDispatch} from 'react-redux';
import {loginAction} from '../reducers/user';
const ButtonWrapper = styled.div`
marginTop : 10px;
`;
const LoginForm = () => {
    const dispatch = useDispatch();

    const [id, onChangeId]=useInput('');
    const [password, onChangePassword]=useInput('');

    const onSubmitForm = useCallback(()=>{
        console.log(id,password);
        dispatch(loginAction({id, password}));
    },[id, password]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="uer-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="uer-password">비밀번호</label>
                <br/>
                <Input 
                name="user-password" 
                type="password" value={password} 
                onChange={onChangePassword} 
                required/>
            </div>
            <ButtonWrapper>
                {/*style={{marginTop : 10}}처럼 style 안에 객체 들어가면 안됨
                리액트의 virtual dom은 이전 컴포넌트와 지금 컴포넌트가 달라지면 리렌더링하는데 객체는 만들때마다 새로운 객체로 인식됨
                리렌더링하면 성능떨어짐*/}
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a>회원가입</a></Link>
            </ButtonWrapper>
        </Form>
    );
}
export default LoginForm;