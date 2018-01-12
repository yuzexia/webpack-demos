const React = require('react');
const ReactDom = require('react-dom');
const style = require('./app.css');

ReactDom.render(
    <div>
        <h1 className={style.h1}>Hello world!</h1>
        <h2 className="h2">Hello world!</h2>
    </div>,
    document.getElementById('example')
);
