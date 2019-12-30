/*
   React是 React 的核心库，
   ReactDOM 是提供与 DOM 相关的功能，

*/
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';      css可以删掉

//引入App.js这个组件
import App from './App';
import LoginForm from './components/LoginForm.js';
import ReactForm from './components/ReactForm.js';
import Zaixianxiadan from './components/Zaixianxiadan.js';
import Pcontent from './components/Pcontent.js';
import F from './components/F.js';

//加快react运行速度的一个js文件
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<LoginForm />, document.getElementById('root'));

// ReactDOM.render(<ReactForm />, document.getElementById('root'));

// ReactDOM.render(<Zaixianxiadan />, document.getElementById('root'));

// ReactDOM.render(<Pcontent />, document.getElementById('root'));

// ReactDOM.render(<F />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
