import React, { Component } from 'react';
import Input from 'share/Input';
import Validator from '../../logic/Validator/Validator';

const ValidateEmailInput = Validator(Input);
const ValidatePasswordlInput = Validator(Input);

export default class Login extends Component {
    render() {
        return (
            <div className='shadow-sm p-4 mb-5 bg-white rounded'>
                <h3 className='text-center text-uppercase font-weight-bold mb-3'>Login</h3>
                <div className='mb-4'>
                    <div className='form-group'>
                        <label>Email</label>
                        <ValidateEmailInput type='text' options={{id: 'email'}} />
                    </div>

                    <div>
                        <label>Password</label>
                        <ValidatePasswordlInput type='password' options={{id: 'password'}}/>
                    </div>
                </div>

                <div className='text-center'>
                    <button className='btn btn-lg btn-success mb-2'>Login</button>
                    <div>
                        <a>Recover your account</a>
                    </div>
                </div>
            </div>
        )
    }
}