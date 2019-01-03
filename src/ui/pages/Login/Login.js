import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return(
            <div className='shadow-sm p-4 mb-5 bg-white rounded'>
                <h3 className='text-center text-uppercase font-weight-bold mb-3'>Login</h3>
                <div className='mb-4'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email' className='form-control'/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input type='password' className='form-control'/>
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