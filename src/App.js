import React from 'react';
import './App.css';
import * as axios from 'axios'
import {Field, Form, withFormik} from "formik";


function App() {
  return (
    <div className="App">

      <Form>
        <Field name='email' component='input'  type='text'  placeholder="Type message"/>
        <Field name='password' component='input'  type='text'  placeholder="Type message"/>
        <button type='submit'>log</button>

      </Form>

    </div>
  );
}


const AppForm = withFormik({
    mapPropsToValues: ({email, password}) => {
        return {
            email: email || '',
            password: password || '',
        }
    } ,
    handleSubmit({email, password}, {props, setValues  } ) {
        const instance = axios.create({
            baseURL: 'http://localhost:3001/',
            withCredentials:true,
        });
        // instance.post('/register',{ email, password });
        // instance.post('/login',{ email, password });
        instance.get('/me');
        // instance.get('/logout');
    },
})(App);

export default AppForm;
