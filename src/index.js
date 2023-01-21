import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd'
import MainLayout from './layouts/Main/MainLayout';
import AuthLayout from './layouts/Auth/AuthLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthLayout> <App/> </AuthLayout>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

