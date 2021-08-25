import React, {Fragment} from "react";
import {Component} from "react";
import PropTypes from "prop-types"

class Item extends Component {

    render() {
        return (
            <div onClick={this.deleteMe.bind(this)}>
                {this.props.test} - {this.props.content}
            </div>
        );
    }

    deleteMe() {
        this.props.deleteItem(this.props.index)
    }

}

Item.propTypes = {
    test: PropTypes.string
}

Item.defaultProps = {
    test: "hello"
}

export default Item;