import React, { useState } from 'react';
import useForm from 'react-hook-form';
import './styles.css'
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export default function Form() {
    const routeParams = useParams()
    const [id] = useState(routeParams.id);
    const [status, setStatus] = useState({});
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => submitForm(data);
    const nameError = errors.name ? `error ${errors.name.type}`: '';
    const emailError = errors.email ? `error ${errors.email.type}`: '';
    
    let labelEmailError
    if(errors.email){
        if(errors.email.type === 'required'){
            labelEmailError = 'The e-mail is required.'
        }else{
            labelEmailError = 'Please provide a valid e-mail.'
        }
    }
    let FormContent = '';
    if(status.statusText === "OK"){
        FormContent = (
            <div className="inputs">
                <h1>Thank you!</h1>
                <div className="description">You will hear from us soon. Please check your e-mail.</div>
                <img src="./assets/illustrations/envelop.png" alt="envelop" />
            </div>
        )
    }else{
        FormContent = (
            <div className="inputs" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Nice pick!</h1>
                    <div className="description">Tell us your name and e-mail and we will get in touch about your order :)</div>
                    <label className={nameError}>Name</label>
                    <input 
                        type="text" 
                        placeholder="Crazy Plant Person" 
                        name="name" 
                        className={nameError}
                        ref={
                            register({
                                required: true, 
                                pattern: /^[a-zA-Z]{2,}(?: [a-zA-Z]+){1,}$/gm
                            })
                        } 
                    />
                    <span className={nameError}>The name is required.</span>
                    <br />
                    <label className={emailError}>E-mail</label>
                    <input 
                        type="text" 
                        placeholder="plantperson@email.com" 
                        name="email" 
                        className={emailError}
                        ref={
                            register({
                                required: true, 
                                pattern: /^\S+@\S+$/i
                            })
                        } 
                    />
                    <span className={emailError}>{labelEmailError}</span>
                    <div  className="submit">
                        <input type="submit" value="send" />
                    </div>
                </form>
            </div>
        )
    }

    async function submitForm(formData){
        const params = {...formData, id}
        await api.post('', params)
            .then(response => {
                setStatus(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return FormContent;
}

