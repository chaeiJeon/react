import React, { useState, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const FollowButton = ({post}) => {    
    const dispatch = useDispatch();
    const [isFollow,setIsFollow] = useState(false);
    const {me} = useSelector((state)=>state.user);
    const onFollow = useCallback(()=>{
        setIsFollow((prev)=>!prev);
        dispatch(Follow());
    },[]);
    const onUnFollow = useCallback(()=>{
        setIsFollow((prev)=>!prev);
        dispatch(unFollow());
    },[]);
    return (
        <>
        {isFollow ? 
            <Button onClick={onUnFollow}>언팔로우</Button>
            : <Button onClick={onFollow}>팔로우</Button>
        }   
        </>
    );
}
FollowButton.propTypes={
    post:PropTypes.object.isRequired,
};
export default FollowButton