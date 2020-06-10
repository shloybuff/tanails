import React, {useState} from 'react';
import './css/Input.css'
import Facturation from './Facturation'
import Docs from './Pdf'
import {AiFillFilePdf} from 'react-icons/ai'
import { Form } from 'react-bootstrap'
import { PDFDownloadLink } from '@react-pdf/renderer';


function AdressFacturation (props) { 
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [ville, setVille] = useState('')
  const [date, setDate] = useState('')
  const [article, setArticle] = useState('')
  const [quantité, setQuantité] = useState('')
  const [prix, setPrix] = useState('')
  
const Facture = {
    name,
    address,
    ville,
    date,
    article,
    quantité,
    prix
  }


  const handlearticle = (article) =>{
    setArticle(article)
  } 

  const handlequantité = (quantité) =>{
    setQuantité(quantité)
  } 
  const handleprix = (prix) =>{
  setPrix(prix)
}  


   
    return( 
    <div className='containerInput'>
     <PDFDownloadLink document={<Docs Facture={Facture}/>} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <AiFillFilePdf style={{float:"right"}} fontSize='40' color='red'/>)}
    </PDFDownloadLink>
      <div className='containerFac'>
    <h4>Adress de facturation</h4>
      <Form.Control
          value={name} 
          type='text' 
          onChange={(e) => setName(e.target.value)} 
          placeholder=' Enter a name' 
          className='input' 
      /><br/>

      <Form.Control 
          value={address} 
          type='text' 
          onChange={(e) => setAddress(e.target.value)} 
          placeholder=' Enter a address' 
          className='input' 
      /><br/>

      <Form.Control 
           value={ville} 
           type='text' 
           onChange={(e) => setVille(e.target.value)} 
           placeholder=' Enter a contry' 
           className='input' 
      /><br/>
      <Form.Control 
          value={date} 
          type='date'  
          onChange={(e) => setDate(e.target.value)} 
          placeholder=' Enter a date' 
          className='input' 
      /><br/>
      </div>
       <Facturation 
          handleprix={handleprix} 
          handlequantité={handlequantité} 
          handlearticle={handlearticle}
        /> 
     </div>
      
    )}
export default AdressFacturation  
  