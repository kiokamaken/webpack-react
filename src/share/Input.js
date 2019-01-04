import React from 'react';

export default function Input(props) {
    const { type, options, handleChange, value, validate } = props;

    return (
        <>
            <input className='form-control' type={type} value={value} onChange={handleChange} {...options} />
            {
                (validate && validate.error) &&
                <div class="invalid-feedback">{validate.message}</div>
            }
        </>
    )
}