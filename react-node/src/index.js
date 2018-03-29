//import {createStore} from 'redux'
//
////1 新建store
//// 通过reducer简历
////通过老的state和action 生成新的state
//
//function counter(state=0, action) {
//    switch (action.type) {
//        case '加机关枪':
//            return state+1
//        case '减机关枪':
//            return state-1
//        default:
//            return 10
//    }
//}
//
////1. 新建store
//const store = createStore(counter)
//
//const init = store.getState()
//console.log(init)
//
////订阅
//function listener() {
//    const current = store.getState()
//    console.log(`现在有机枪${current}把`)
//}
//
//store.subscribe(listener)
//
//// 派发事件 传递action
//store.dispatch({type:'加机关枪'})
////console.log(store.getState())
//store.dispatch({type:'加机关枪'})
//store.dispatch({type:'减机关枪'})


import React from 'react'
import ReactDom from 'react-dom'
                        //中间件       组合
import {createStore, applyMiddleware,compose} from 'redux'
    //异步中间件
import thunk from 'redux-thunk'
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

//连接
import { Provider } from 'react-redux'

import App from './App'
import {counter} from './index.redux'

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

/*function render() {
    ReactDom.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />,document.getElementById('root'))
}
render()
store.subscribe(render)*/

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}

class Test extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        console.log(this.props)
        return <h2>测试组件{this.props.match.params.location}</h2>
    }
}

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    {/*只渲染命中的第一个Route,没完全命中已有的就显示test*/}
                    <Route path="/" exact component={App}></Route>
                    <Route path="/erying" component={Erying}></Route>
                    <Route path="/qibinglian" component={Qibinglian}></Route>
                    <Route path="/:location" component={Test}></Route>
                </Switch>

            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)