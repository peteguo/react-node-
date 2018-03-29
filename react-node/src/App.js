import React from 'react'
import { connect } from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'

//const mapStatetoProps = (state) => {
//    return {num:state}
//}
//const actionCreators = {addGun,removeGun,addGunAsync};
//App = connect(mapStatetoProps, actionCreators)(App)
//换成装饰器 babel-plugin-transform-decorators-legacy    并且在package.json plugins里配置
@connect(
    //要把state什么属性放到props里
    state => ({num:state}),
    //要把什么方法,放到props里，自动dispatch
    {addGun,removeGun,addGunAsync}
)

class App extends React.Component {
    render() {
        //const store = this.props.store;
        //const num = this.props.num;
        //const addGun = this.props.addGun;
        //const removeGun = this.props.removeGun;
        //const addGunAsync = this.props.addGunAsync;
        //const num = store.getState()
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给</button>
            </div>
        )

    }
}

export default App