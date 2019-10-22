import React,{Component} from "react"

// import {connect} from "react-redux"
import {Switch, Redirect} from "react-router-dom"
import renderRoutes from "@utils/renderRoutes"
import {baseConfigRoute} from "@router"

export default class App extends Component{
    render(){
        return(
            // 注意，根路径/ 重定向到 home页面 时，要放在后面写
            <Switch>
                {renderRoutes(baseConfigRoute)}
                <Redirect to="/home"/>   
            </Switch>
        )
    }
}


// const mapStateToProps = (state) => ({  
// })

// const mapDispatchToProps = (dispatch) => ({
    
// })

// export default connect(mapStateToProps,mapDispatchToProps)(App)