import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Nav from "./Nav";
import Antd from "./Antd";
import Mocks from "./Mocks";

ReactDOM.render(
    <Mocks/>,
    document.getElementById('mocks')
);


ReactDOM.render(
    <Antd/>,
    document.getElementById('antd')
);

ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);

ReactDOM.render(
    <Nav/>,
    document.getElementById('nav')
);
