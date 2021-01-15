
export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id:1,
            nickname :'halo',
        },
        content : '첫번째 게시글',
        Images : [{
            src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDJfMTQ3%2FMDAxNjA5NTI1NTQyMTM4.7KZAtCG05g_xAqB-O5Aly51dg3t-yeD3XDkOV56W5E4g.kFQxL-ab0KWEAolEYkeBlv4os-cwTfVpKGTonhR5XGIg.JPEG.1993suji%2FA1B6FB71-11E4-4C9A-B743-E7543DE2F83A.jpg&type=a340",
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
    imagePath : [],
    postAdded: false,

}


const ADD_POST = 'ADD_POST';
// ACTION이름을 상수로 빼준 이유 : 중간에 오타를 막기 위해(변수로 지정하면 오타나면 오류가 난다)
export const addPost={
    type : ADD_POST,

}
const dummyPost = {
    id:2,
    content : '더미데이터',
    User : {
        id:1,
        nickname : 'codl',
    },
    Image : [],
    Comments : [],

};

export default (state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                // 원래 state.mainPosts들의 앞에 dummyPost를 추가하겠다는 의미
                postAdded : true,
            };

        default : {
            return {
                ...state,
            };
        }
    }
};
