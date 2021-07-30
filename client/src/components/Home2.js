import React, {Component} from 'react';
import Registration from './auth/Registration';

export default class Home2 extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Registration/>
            </div>
        );
    }
}