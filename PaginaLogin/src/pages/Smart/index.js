//import api from '../../services/api';
import React from 'react';
import './styles.css';

export default function Smart(){
return(
   <table border="0">
       <tr>
          <th><button className='smt' type='submit'>Luz Da Sala</button></th> 
          <th><button className='smt' type='submit'>Luz do Quarto</button></th> 
       </tr>
       <tr>
         <th><button className='smt' type='submit'>Televisao(Quarto)</button></th> 
         <th><button className='smt' type='submit'>Ar-Condicionado</button></th> 
       </tr>
   </table>
)

} 