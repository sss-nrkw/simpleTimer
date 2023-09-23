import React, { Component } from 'react';
import TimerInt from './TimerInt';
import './App.css';


class Timer extends Component {
    constructor(props) {
    super(props);
    this.state = {
        seconds: 0,
        isRunning: false,
    };
    }

    startTimer() {
    this.timerID = setInterval(() => {
        this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
        }));
    }, 1000); // 1秒ごとに更新
    this.setState({ isRunning: true });
    }



    TimerInterbal(){
        <TimerInt />
    }

    
    stopTimer() {
    clearInterval(this.timerID);
    this.setState({ isRunning: false });
    }

    resetTimer() {
    this.setState({ seconds: 0});

    }

    
    render() {
    return (
        <div className='Timer'>
        <h3>タイマー</h3>
        <p>経過時間: {this.state.seconds} 秒</p>
        <button onClick={() => this.startTimer()} disabled={this.state.isRunning}>
            開始
        </button>

        <button onClick={() => this.TimerInterbal()}>
            インターバルを測る
        </button>


        <button onClick={() => this.stopTimer()} disabled={!this.state.isRunning}>
            停止
        </button>
        <button onClick={() => this.resetTimer()} disabled={this.state.isRunning}>リセット</button> 
        </div>

    );
    }
}


export default Timer;
