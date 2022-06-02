import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {
  const [dolar, setDolar] = useState(0);
  async function GetDolar(){
    const response = await Api.get('/last/USD-BRL');
    setDolar(response.data);
  }
  return (
    <View style={styles.container}>
       <View style={styles.bloco}>
      <Text style={styles.textheader}>Cotação de moedas!</Text>
      <TouchableOpacity style={styles.btn} onPress={GetDolar}>
       <Text style={styles.btnText}>Buscar</Text>
   </TouchableOpacity>
   </View>
   {dolar ? <Dolar data={dolar}/> : null} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color:'#fff',
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textheader:{
    color:'#fff',
    fontSize:38,
    marginBottom: '1%'
  },
  btn:{
    alignItems: 'center',
    backgroundColor: '#45FFBB',
    width:'100%',
    borderRadius: 8,
  },
  btnText:{
    fontSize: 30,
    color: '#000',
  }
});
