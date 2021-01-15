import React, {useCallback} from 'react';
import { Card, Avatar, Button } from 'antd';
import {useDispatch} from 'react-redux';

import { logoutAction } from '../reducers';

const UserProfile=()=>{
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{ 
        dispatch(logoutAction());
    },[]);
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followers">팔로워<br />0</div>,
            ]}
        >
            {/*리액트에서 배열 사용할 때, key붙이기*/}
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="Chaei"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}
export default UserProfile;