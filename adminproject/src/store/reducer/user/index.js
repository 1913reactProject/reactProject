import {handleActions} from "redux-actions"



const defaultState = {
    username:"未登录",
    userPic:""
}

export default handleActions({},defaultState)


