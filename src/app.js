import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

console.log(validator.isEmail('test'));

// const template = <p>testing 123</p>;
const template = React.createElement('p', {}, 'testing 123');

ReactDOM.render(template, document.getElementById('app'));