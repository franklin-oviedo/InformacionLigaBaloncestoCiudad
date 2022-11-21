const axios = require('axios');
const urlBase = process.env.URL_BASE;

class Busquedas {
    historial = ['RD', 'PR', 'USA']

    constructor() { }

    async cityBasketball(){
        try {
            const options = {
                method: 'GET',
                url: `${urlBase}countries`,
                headers: {
                    'x-apisports-key ': process.env.API_KEY
                }
            };
            const resp = await axios.request(options).then((response) => {
                return response.data.response.map(data => ({
                    id: data.id,
                    name: data.name,
                }));
            }).catch((error) => {
                console.error(error);
            });
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async ligaCiudad(country) {
        try {
            const options = {
                method: 'GET',
                url: `${urlBase}leagues`,
                params: {
                    country
                },
                headers: {
                    'x-apisports-key ': process.env.API_KEY
                }
            };
            const resp = await axios.request(options).then((response) => {
                return response.data.response.map(data => ({
                    id: data.id,
                    name: data.name,
                    type: data.type,
                    logo: data.logo
                }));
            }).catch((error) => {
                console.error(error);
            });
            return resp;
        } catch (error) {
            throw error;
        }
    }

    agregarHistorial(busqueda){
        this.historial.push(busqueda);
    }
}

module.exports = Busquedas;