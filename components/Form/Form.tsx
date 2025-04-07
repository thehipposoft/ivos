"use client";
import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
    name: '',
    telefono: 0,
    message: '',
};

type FieldsType = {
    name: 'name' | 'telefono' | 'message';
    type: 'text' | 'textArea' | 'tel' | 'email';
    label: string;
    placeholder: string;
    required?: boolean;
}

type MyCustomFormProps = {
    fields: FieldsType[];
    onSuccessMessage: string;
    onErrorMessage: string;
    emailServiceURL: string;
    submitButtonLabel: string;
};

type FormValues = {
    name: string;
    telefono: number;
    message: string;
};

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    emailServiceURL,
    submitButtonLabel
}:MyCustomFormProps) => {
    const [messageSent, setMessageSent] = useState<string>('');
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState<string>('');
    const [values, setValues] = useState<FormValues>({
        name: '',
        telefono: 0,
        message: '',
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-2 text-2xl text-black'}>Gracias!</h2>
                <p className='text-black'>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Algo salió mal</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = e;
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event:any) => {
        if (event) event.preventDefault();

        setIsAPILoading(true);
        axios.post(
            emailServiceURL,
            {
                name: values.name,
                telefono: values.telefono,
                message: values.message,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json, text/plain, */*',
                },
            }
        )
            .then(function (response) {
                setValues(initialValues);
                setMessageSent('succeed');
                setIsAPILoading(false);
            })
            .catch(function (error) {
                setMessageDescription(error.toString());
                setMessageSent('error');
                setIsAPILoading(false);
            });
    };

    return (
        <form
            className={`form w-full flex flex-col`}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field)=> {
                    const { name, type, label, placeholder } = field;

                    switch (type) {
                        case 'textArea':
                            return (
                                <section className={'mb-4'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={2}
                                        cols={40}
                                        className='resize-none py-5 px-6 border-[3px] border-[#30505B] w-full rounded-[42px] focus:outline-none focus:placeholder:text-gray-400 placeholder:text-black'
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                        required={field.required}
                                    />
                                </section>
                            );
                        case 'tel':
                            return (
                                <section className='mb-4 md:w-[49%]' key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-4 px-6 border-[3px] border-[#30505B] rounded-[42px] w-full focus:outline-none focus:placeholder:text-gray-400 placeholder:text-black'}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            );
                        default:
                            return (
                                <section className='mb-4 md:w-[49%]' key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-4 px-6 border-[3px] border-[#30505B] rounded-[42px] w-full focus:outline-none focus:placeholder:text-gray-400 placeholder:text-black'}
                                        onChange={handleChange}
                                        value={values[name]}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            )
                    }
                })
            }
            {renderSentMessage()}
            <div className='flex'>
                <button
                    disabled={isAPILoading}
                    value={submitButtonLabel ? submitButtonLabel : 'Send'}
                    type="submit"
                    className={` ${isAPILoading ? 'opacity-50' : ''} cursor-pointer md:w-[180px] bold flex items-center justify-center w-1/2 h-[70px] bg-[#F94E19] border-[#F94E19] border-[3px] border duration-500 hover:bg-transparent rounded-tl-[30px] rounded-br-[30px]`}
                >
                    {submitButtonLabel}
                </button>
            </div>
        </form>
    )
};

export default MyCustomForm
