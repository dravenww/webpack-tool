/**
 * @file     desc
 * @author   author
 * @dateTime date
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'widget/header';
import './index.less';

function App () {
    return (
        <div className="box">
            <Header/>
            hello {this.state.title}
        </div>
    )
}
let data = {
    title: ' pwt'
}
ReactDOM.render(<App data={data}/>, document.getElementById('wrapContainer'));