/* eslint-disable */
const helper = require('./helper.js');
const React = require('react');
const { createRoot } = require('react-dom/client');

const handleLogin = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#user').value;
    const pass = e.target.querySelector('#pass').value;
};

const handleSignup = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#user').value;
    const pass = e.target.querySelector('#pass').value;
};

const LoginWindow = (props) => {

};

const SignupWindow = (props) => {

};

const init = () => {

};

window.onload = init;
