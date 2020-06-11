import React from 'react';
import './css/Facturation.css'

function Facturation (props) {

    return( 
     <>  
    <h4>Facturation</h4>
    <div className='containerFacturation'>
        <div style={{width:'100%'}}>
            <h6>Article</h6>    
            <input type='text' onChange={(e) => props.handlearticle(e.target.value)} placeholder=' Baby Boumer' className='facturationInput' />
      
            <h6>Quantité</h6>    
            <input type='number' onChange={(e) => props.handlequantité(e.target.value)} placeholder=' 1' className='facturationInput' />
            
            <h6>prix</h6>    
            <input type='number' onChange={(e) => props.handleprix(e.target.value)} placeholder=' 70₪' className='facturationInput'/>
        </div>
     </div>
     </>
      
    )}
export default Facturation    