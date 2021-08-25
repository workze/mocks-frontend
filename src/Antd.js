import React, {Fragment} from "react";
import {Component} from "react";
import {DatePicker} from "antd";
import 'antd/dist/antd.css';

class Antd extends Component {

    render() {
        return (
           <Fragment>
                <DatePicker>选择日期</DatePicker>
           </Fragment>
        );
    }

}


export default Antd;