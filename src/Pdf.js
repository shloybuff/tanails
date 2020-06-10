import React from 'react';
import { Page, Text, View, Document,Font, StyleSheet, Link } from '@react-pdf/renderer';

Font.register( { fontFamily: 'Roboto-Bold' });

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: '15',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
  },
  view: {
    height: '100%',
    width: '100%',
    border: '1px solid blue',
  },
  sectionFacture: {
    padding: 10,
    fontSize: 11,
    width:'80%',
    margin:'15px',
    marginLeft:'43px',
    marginTop:'50px',
    display:'flex',
    justifyContent:'center',
  },
  coordoone:{
    display:'flex',
    flexDirection:"row",
    justifyContent:'center',
    fontSize:11,
    fontFamily: 'Times-Italic'


  },
  margin:{
    margin:30
  },
  section2: {
    padding: 10,
    float: 'right',
    width: 100,
    height: 100
  },
  textTable: {
    padding: 10,
    margin: '2px',
    borderBottom: '1px solid black',
    boxShadow: "2px 2px 2px 2px"
  },
  textText: {
    padding: 10,
    margin: '2px',
    width: '100%',
    border: '1px solid grey',
    boxShadow:'2px 2px 2px 2px',
    textAlign: 'center',
    justifyContent:'center'
  },
  bold:{
    fontFamily:'Times-Bold'
  },
  textPrice:{
    padding: 10,
    margin: '2px',
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 16,
    fontFamily:'Times-Bold'
  }
});

// Create Document Component
const Docs = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.view}>
      <View >
        <Text style={{textAlign:'center', fontFamily: 'Times-Italic', fontSize:20, margin: 25, color:'blue'}}>Tanail's</Text>
        <View style={styles.coordoone}>
          <View style={styles.margin}>
          <Text style={{margin:3,fontSize:16,backgroundColor:'#DADADA',padding:7, fontFamily:'Times-Roman'}}>De</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Name: </Text> Tania Buff</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Tel: </Text> 0504384376</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Address: </Text> 5 Avraham Sharon Jerusalem</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Email: </Text>tania.e98@hotmail.fr</Text>
        </View>

        <View style={styles.margin}>
          <Text style={{margin:3,fontSize:16,backgroundColor:'#DADADA',padding:7, fontFamily:'Times-Roman'}}>Facturé à</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Name: </Text> {props.Facture.name}</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Address: </Text> {props.Facture.address}</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Ville: </Text>{props.Facture.ville}</Text>
          <Text style={{margin:3}}><Text style={styles.bold}>Date: </Text> {props.Facture.date}</Text>
        </View>
        </View>
     
      <View style={styles.sectionFacture}> 
         <Text style={styles.textText}><Text style={{fontFamily: 'Times-Bold', fontSize:12}}>Product: </Text>{props.Facture.article}</Text>  
         <Text style={styles.textText}><Text style={{fontFamily: 'Times-Bold', fontSize:12}}>Quantity: </Text>{props.Facture.quantité}</Text>  
         <Text style={styles.textText}><Text style={{fontFamily: 'Times-Bold', fontSize:12}}>Price: </Text> {props.Facture.prix} NIS</Text>     
      </View> 
      </View>
      <Text style={{fontSize:14, color:'black',fontFamily:'Times-Italic',marginLeft:15,marginTop:20, textDecoration:'none'}}>Follow Tanail's on<Link src='facebook.com'> Facebook</Link></Text>
      <Text style={{fontSize:14, color:'black',fontFamily:'Times-Italic',marginLeft:15,marginTop:20, textDecoration:'none'}}>Follow Tanail's on<Link src='facebook.com'> Instagram</Link></Text>

      <View style={{margin:30,textAlign:"center",width:'50%',padding:5,marginTop:100, border: '1px solid grey'}}>
          <Text style={{margin:3,fontSize:14,padding:7, fontFamily:'Times-Italic'}}>coordoone</Text>
          <Text style={{margin:3,fontSize:11}}>Bank hapoalim</Text>
          <Text style={{margin:3,fontSize:11}}><Text style={styles.bold}>IBAN: </Text>SE35 5000 0000 0549 1000 0003</Text>
          <Text style={{margin:3,fontSize:11}}><Text style={styles.bold}>SNIF: </Text>123867</Text>
      </View>
      </View>
    </Page>
    
  </Document>

);

export default Docs



