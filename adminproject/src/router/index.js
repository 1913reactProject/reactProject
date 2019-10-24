import {
    AddBooks,
    BooksList,
    Home,
    Login,
    UserInfo,
    UserList,
    TodoList
} from "@pages"

//layout 布局 是否有tabbar  
// login不需要layout布局


export const layoutRoute = [
    {
        path:"/home",
        key:"/home",
        component:Home,
        icon:"tag",
        name:"首页",
        // meta:{
        //     requireAuth:true    //是否需要登录
        // }
    },
    {
        path:"/books",
        key:"/books",
        // component:Home,    //注意这里不需要组件，，
        icon:"read",
        name:"书籍管理",
        children:[
            {
                path:"/books/booksList",
                key:"/books/booksList",
                component:BooksList,
                icon:"profile",
                name:"书籍列表",
                // meta:{
                //     requireAuth:true    //是否需要登录
                // }
            },
            {
                path:"/books/addBooks",
                key:"/books/addBooks",
                component:AddBooks,
                icon:"file-done",
                name:"添加书籍",
                // meta:{
                //     requireAuth:true    //是否需要登录
                // }
            }
        ]
    },
    {
        path:"/user",
        key:"/user",
        // component:Home,
        icon:"usergroup-delete",
        name:"用户管理",
        children:[
            {
                path:"/user/userList",
                key:"/user/userList",
                component:UserList,
                icon:"menu",
                name:"用户列表",
                // meta:{
                //     requireAuth:true    //是否需要登录
                // }
            },
            {
                path:"/user/userInfo",
                key:"/user/userInfo",
                component:UserInfo,
                icon:"message",
                name:"个人信息",
                // meta:{
                //     requireAuth:true    //是否需要登录
                // }
            },
            {
                path:"/user/todoList",
                key:"/user/todoList",
                component:TodoList,
                icon:"form",
                name:"待办事项",
                // meta:{
                //     requireAuth:true    //是否需要登录
                // }
            }
        ]
    },

]

export const noLayoutRoute = [
    {
        path:"/login",
        key:"/login",
        component:Login,
        icon:"",
        name:"登录",
        // meta:{
        //     requireAuth:true    //是否需要登录
        // }
    }
]


export const baseConfigRoute = layoutRoute.concat(noLayoutRoute)
