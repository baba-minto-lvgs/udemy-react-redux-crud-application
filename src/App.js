import React, { Component } from 'react';

// state はコンポーネント内で使う
const App = () => {return (<Counter></Counter>)};

class Counter extends Component {

    // Component の初期化 コンストラクタはpropsを引数で受け取る
    constructor(props){
        super(props)
        console.log(this.state);
        this.state = {count: 0}
    }

    // プラスボタン押下時
    hondlePlusButton = () => {
        // setStateはデフォの機能 setStateが実行されるとrenderも実行される
        this.setState({count: this.state.count + 1})
    }

    // マイナスボタン押下時
    hondleMinusButton = () => {
        this.setState({count: this.state.count - 1})
    }


    render() {
        return(
            <React.Fragment>
            <div>count: {this.state.count}</div>
            <button onClick={this.hondlePlusButton}>+1</button>
            <button onClick={this.hondleMinusButton}>-1</button>
            </React.Fragment>
        )
    }
}


export default App;
