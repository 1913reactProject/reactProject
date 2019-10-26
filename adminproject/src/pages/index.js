import Loadable from "react-loadable"
import Loading from "@common/loading"

//路由懒加载
const WeiboMsg = Loadable({
    loader:()=>import("./books/weiboMsg"),
    loading:Loading
})

const BooksList = Loadable({
    loader:()=>import("./books/booksList"),
    loading:Loading
})

const WeiboRank = Loadable({
    loader:()=>import("./books/weiboRank"),
    loading:Loading
})

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const UserInfo = Loadable({
    loader:()=>import("./user/userInfo"),
    loading:Loading
})

const UserAccount = Loadable({
    loader:()=>import("./user/userAccount"),
    loading:Loading
})

const Message = Loadable({
    loader:()=>import("./user/message"),
    loading:Loading
})

const TodoList = Loadable({
    loader:()=>import("./user/todoList"),
    loading:Loading
})


export {
    WeiboMsg,
    BooksList,
    Home,
    Login,
    UserInfo,
    UserAccount,
    TodoList,
    WeiboRank,
    Message
}
