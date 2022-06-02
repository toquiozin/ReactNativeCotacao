import { StyleSheet, Text } from 'react-native';

export default function Dolar(props) {
  console.log(props.data);
	return (
	  <>
	  <Text style={styles.cabecalho}>Dados da Cotação Atual do Dolar!</Text>
      
	    <Text style={styles.texto}> Compra: {props.data.USDBRL.bid}</Text>
	    <Text style={styles.texto}> Venda: {props.data.USDBRL.ask}</Text>
	    <Text style={styles.texto}> Variação: {props.data.USDBRL.varBid}</Text>
	    <Text style={styles.texto}> Maximo: {props.data.USDBRL.high}</Text>
	    <Text style={styles.texto}> Minimo: {props.data.USDBRL.low}</Text>
	  </>
	  
  );
}

const styles = StyleSheet.create({
    cabecalho:{
    color:'#fff',
    fontSize:20,
    marginTop:10,
    },
	texto:{
		color:'#fff',
		fontSize:20,
	  	textAlign:'center',
		marginTop:10
	}
});