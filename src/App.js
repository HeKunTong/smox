import React, { Component } from 'react';
import { map } from 'smox';

@map({
    state: ['count'],
    mutations: ['add', 'cut'],
    actions: ['asyncAdd']
})

class App extends Component {

    render() {
        return (
            <div>
                <h1>现在是{this.props.count}</h1>
                <button onClick={this.props.add}>加一</button>
                <button onClick={this.props.cut}>减一</button>
                <button onClick={this.props.asyncAdd}>异步加一</button>
            </div>
        );
    }
}

export default App;
