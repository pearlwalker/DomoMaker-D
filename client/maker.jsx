const helper = require('./helper.js');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const handleDomo = (e, onDomoAdded) => {
    e.preventDefault();
    helper.hideError();

    const name = e.target.querySelector('#domoName').value;
    const age = e.target.querySelector('#domoAge').value;
};

const DomoForm = (props) => {

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
