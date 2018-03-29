import React from 'react'
import {Button,List} from 'antd-mobile'
//import 'antd-mobile/dist/antd-mobile.css'
class App extends React.Component {
  render() {
    const boss = '李云long';
    return (
        <div>
          <h2>独立团，团长{boss}</h2>
            <一营 老大="张大苗"></一营>
            <骑兵连 老大="孙德胜"></骑兵连>
        </div>
      )
  }
}

function 骑兵连(props) {
    return <h2>骑兵连连长{props.老大}，冲啊！</h2>
}

class 一营 extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
           soliders:['虎子','柱子','王根生']
       }

       //this.addSolder = this.addSolder.bind(this);
   }

    componentWillMount() {
        console.log('组件马上就要加载了')
    }

    componentDidMount() {
        console.log('组件加载完毕')
    }

    addSolder() {
        console.log('hello add solder')
        this.setState({
            soliders: [...this.state.soliders,'新兵蛋子'+Math.random()]
        })
    }

  render() {

      console.log('组件正在加载了')

    //const boss = '张大苗';
    return (
        <div>
            <h2>一营营长，{this.props.老大}</h2>
            <Button type="primary" onClick={()=>this.addSolder()}>新兵入伍</Button>
            <List
                renderHeader={() => '士兵列表'}
            >
                {this.state.soliders.map(v => {
                    return (
                        <List.Item key={v}>
                            {v}
                        </List.Item>
                    )
                })}
            </List>
        </div>
    )
  }
}

export default App;