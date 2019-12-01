import React from 'react';
import './Login.scss'
import {Field, Form, withFormik} from "formik";
import * as Yup from 'yup'

const Login = ({
                   values,
                   errors,
                   touched
               }) => {
    return (


        <div className='login-form'>
            <h2>Login</h2>

            <Form>
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
    mapPropsToValues({email, password, check}) {

        return {
            email: email || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be min 6 characters').required('Password is required'),
    }),


    handleSubmit(values, {props}) {
        const { email,password, check } = values;
        props.getLogIn(email,password, check )
    }
})(Login);

