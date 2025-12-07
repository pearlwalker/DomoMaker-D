const helper = require('./helper.js');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const handleDomo = (e, onDomoAdded) => {
    e.preventDefault();
    helper.hideError();

    const name = e.target.querySelector('#domoName').value;
    const age = e.target.querySelector('#domoAge').value;

    if (!name || !age) {
        helper.handleError('All fields are required!');
        return false;
    }

    helper.sendPost(e.target.action, { name, age }, onDomoAdded);
    return false;
};

const DomoForm = (props) => {
    return (
        <form
            name="domoForm"
            onSubmit={(e) => handleDomo(e, props.triggerReload)}
            method="POST"
            className="domoForm"
            action="/maker"
            id="domoForm"
        >
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="domoName" placeholder="Domo Name" />
        </form>
    );
};

const DomoList = (props) => {
    const domoNodes = domos.map(domo => {

    });
};

const App = () => {

};

const init = () => {

};

window.onload = init;
