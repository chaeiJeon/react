import axios from 'axios';
import { delay, put, takeLatest, all, fork } from "redux-saga/effects";
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
        ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/post';
function addPostAPI(data){
    return axios.post('/api/post',data)
}
function* addPost(action){
    console.log('saga addPost');
    try{
        yield delay(1000);
        //result = yield call(addPostAPI, action.data)
        // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것
        yield put({
            type : ADD_POST_SUCCESS,
            data : action.data,
        });
    } catch(err){ //서버 요청 실패시
        yield put({ //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type : ADD_POST_FAILURE,
            data:err.response.data,
        })
    }
}
function addCommentAPI(data){
    return axios.post('/api/comment',data)
}
function* addComment(action){
    try{
        yield delay(1000);
        yield put({
            type : ADD_COMMENT_SUCCESS,
            data : result.data,
        })
    }catch(err){
        yield put ({
            type : ADD_COMMENT_FAILURE,
            data : err.response.data,
        })
    }
}


function* watchAddPost(){
    console.log('watchAddPost');
    yield takeLatest(ADD_POST_REQUEST, addPost); 
}
function* watchAddCommentPost(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddCommentPost),
    ]);
}