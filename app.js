require('dotenv').config()
const { leerInput, inquirerMenu, pausa, listarData, mostrarData } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

console.log(process.env)


const main = async () => {
    let opt;
    

    const busqueda = new Busquedas();
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Seleccionar Ciudad
                const city = await busqueda.cityBasketball()
                const listaDataCity = await listarData(city);
                
                //Seleccionar Liga
                const dataLeagueCity = await busqueda.ligaCiudad(listaDataCity);
                const listaDataCityLeague = await mostrarData(dataLeagueCity);
                break;
        
            case 2:
                break;
        }

        if(opt !== 0) await pausa();
    } while (opt !== 0);
}

main();