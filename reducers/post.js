
export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id:1,
            nickname :'halo',
        },
        content : '첫번째 게시글 #해시태그 #익스프레스',
        Images : [{
            src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDJfMTQ3%2FMDAxNjA5NTI1NTQyMTM4.7KZAtCG05g_xAqB-O5Aly51dg3t-yeD3XDkOV56W5E4g.kFQxL-ab0KWEAolEYkeBlv4os-cwTfVpKGTonhR5XGIg.JPEG.1993suji%2FA1B6FB71-11E4-4C9A-B743-E7543DE2F83A.jpg&type=a340",
        },{
            src : "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAyMDhfMjAz%2FMDAxNTgxMTY0MDUyNTEx.2IU1wTla8ax8l3tR6J-VW3D_42FH4PLvNci97mrtFl8g.zckwx6NxjVA4w9EcSbcD4cvv7dyJk9dO2H9tak6Udjog.JPEG%2FexternalFile.jpg&type=a340",
        },{
            src : "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAyMDhfMjAz%2FMDAxNTgxMTY0MDUyNTEx.2IU1wTla8ax8l3tR6J-VW3D_42FH4PLvNci97mrtFl8g.zckwx6NxjVA4w9EcSbcD4cvv7dyJk9dO2H9tak6Udjog.JPEG%2FexternalFile.jpg&type=a340",
        }],
        Comments : [
            {  
            User : {
                nickname : 'nek'
            },
            content : '개정판',
            },
            {
            User : {
                nickname : 'hh',
            },
            content : '언제 나와용',
            },
        ]
    }],
    imagePaths : [],
    postAdded: false,
    addPostLoading : false,
    addPostDone : false,
    addPostError : null,
    addCommentLoading : false,
    addCommentDone : false,
    addCommentError : null,
}


export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// ACTION이름을 상수로 빼준 이유 : 중간에 오타를 막기 위해(변수로 지정하면 오타나면 오류가 난다)
export const addPost= (data) => ({
    type : ADD_POST_REQUEST,
    data,
});
export const addComment= (data) => ({
    type : ADD_COMMENT_REQUEST,
    data,
});
const dummyPost = (data) => ({
    id:2,
    content : data,
    User : {
        id:1,
        nickname : 'codl',
    },
    Images : [],
    Comments : [],

});

export default (state=initialState, action)=>{
    switch (action.type){
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading : true,
                addPostDone : false,
                addPostError : null,
            };
        case ADD_POST_SUCCESS:{
            console.log('add success')
            return{
                ...state,
                mainPosts : [dummyPost(action.data), ...state,mainPosts],
                addPostLoading : false,
                addPostDone : true,
            };}
        case ADD_POST_FAILURE:
            return{
                ...state,
                addPostLoading : false,
                addPostError : action.error,
            };
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading : true,
                addPostDone : false,
                addPostError : null,
            };
        case ADD_POST_SUCCESS:
            return{
                ...state,
                mainPosts : [dummyPost, ...state,mainPosts],
                addPostLoading : false,
                addPostDone : true,
            };
        case ADD_POST_FAILURE:
            return{
                ...state,
                addPostLoading : false,
                addPostError : action.error,
            };
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading : true,
                addPostDone : false,
                addPostError : null,
            };
        case ADD_POST_SUCCESS:
            return{
                ...state,
                mainPosts : [dummyPost, ...state,mainPosts],
                addPostLoading : false,
                addPostDone : true,
            };
        case ADD_POST_FAILURE:
            return{
                ...state,
                addPostLoading : false,
                addPostError : action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading : true,
                addCommentDone : false,
                addCommentError : null,
            };
        case ADD_COMMENT_SUCCESS:
            return{
                ...state,
                mainComments : [dummyComment, ...state,mainComments],
                addCommentLoading : false,
                addCommentDone : true,
            };
        case ADD_COMMENT_FAILURE:
            return{
                ...state,
                addCommentLoading : false,
                addCommentError : action.error,
            }
        default : {
            return {
                ...state,
            };
        }
    }
};
