/**
 * @file     desc
 * @author   author
 * @dateTime date
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from 'widget/header';
import './index.less';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="box">
                <Header/>
                hello {this.state.title}
            </div>
        )
    }
};
let data = {
    title: ' BWT'
}
ReactDOM.render(<App data={data}/>, document.getElementById('wrapContainer'));