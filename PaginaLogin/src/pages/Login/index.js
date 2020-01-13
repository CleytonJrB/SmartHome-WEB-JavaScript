import React, { useState } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

export default function Login({history}){
    const [senha, setSenha]= useState('');
    
    async function handleSubmit(event){
        event.prenventDefault();
        const response = await api.post('/smarts', {senha});
        const { _id } = response.data;
        localStorage.setItem('smarts', _id);
        history.push('/smart');
    }
        return(
        <>
             <p>
             Entrar na Smart Home
             </p>
             <form onSubmit={handleSubmit} >
              <input
             id="senha" 
             type="password" 
            placeholder=" Entre com sua Senha"
            value={senha}
            onChange={event=> setSenha(event.target.value)}
             />
             <Link to="/smart">
            <button className="btn" type="submit">Entrar</button>
            </Link>
        </form>
     </>
     )
}