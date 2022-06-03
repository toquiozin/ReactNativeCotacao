import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';
import {
  useFonts,
  AlegreyaSansSC_300Light,
  AlegreyaSansSC_100Thin,
  AlegreyaSansSC_400Regular,
} from '@expo-google-fonts/alegreya-sans-sc';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    AlegreyaSansSC_300Light,
    AlegreyaSansSC_100Thin,
    AlegreyaSansSC_400Regular,
  });
  if(!fontsLoaded){ 
    <AppLoading />
  }

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
    fontFamily: 'AlegreyaSansSC_100Thin',
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
    fontFamily: 'AlegreyaSansSC_300Light',
    fontSize: 30,
    color: '#000',
  }
});