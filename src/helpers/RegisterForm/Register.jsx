import React from 'react';
import './Register.scss'
import {Field, Form, withFormik} from "formik";
import * as Yup from 'yup'

const Register = ({
                   errors,
                   touched
               }) => {
    return (


        <div className='login-form'>
            <h2>Register</h2>

            <Form>
                <div className='login-form__fields'>
                    <Field type="text" placeholder='Login' name='login'/>
                    {touched.login && errors.login && <span> {errors.login}</span>}
                </div>
                <div className='login-form__fields'>
                    <Field type="email" placeholder='Email' name='email'/>
                    {touched.email && errors.email && <span> {errors.email}</span>}
                </div>
                <div className='login-form__fields'>
                    <Field type="password" placeholder='Password' name='password'/>
                    {touched.password && errors.password && <span> {errors.password}</span>}
                </div>

                <button type='submit'>login</button>

            </Form>


        </div>
    );
};
export default withFormik({
    mapPropsToValues({email, password, login}) {
        return {
            login: login || '',
            email: email || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        login: Yup.string().min(6,'Login is must be longer then 6 characters').required('Login is required'),
        email: Yup.string().email('Email is not valid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be min 6 characters').required('Password is required'),
    }),


    handleSubmit(values, {props}) {
        const { email,password, login } = values;
        console.log(email,password, login)
        props.getRegister(login, email, password)

    }
})(Register);

