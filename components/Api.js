import axios from 'axios';

const Api = axios.create ({
	baseURL:'https://economia.awesomeapi.com.br/json'
	
});

export default Api;