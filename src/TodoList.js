import React, {Fragment} from "react";
import {Component} from "react";
import Item from "./Item";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this)

        this.state = {
            input: '',
            list: ['item1', 'item2']
        }
    }

    render(props) {
        return (
            <Fragment>
                <header>
                    <p>
                        TodoList
                    </p>
                </header>
                <div>
                    <label htmlFor="insert">请输入: </label>
                    <input onChange={this.onInputChange} value={this.state.input} id="insert"/>
                    <button onClick={this.onButtonClick.bind(this)}>提交</button>

                    <ul>
                        {this.state.list.map(
                            (item, index) => {
                                return <Item content={item} key={index} index={index} deleteItem={this.onItemClick.bind(this)}/>
                            }
                        )}
                    </ul>
                </div>
            </Fragment>
        )
    }

    onButtonClick() {
        this.setState(
            (state) => {

                return {
                    list: [...this.state.list, state.input]
                }
            }
        )
    }

    onInputChange(e) {
        const value = e.target.value

        this.setState({
            input: value,
        });
    }

    onItemClick(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

}

export default TodoList;
