require('colors');
const inquirer = require('inquirer');

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name:`${'1.'.green} Ver Ligas por ciudad`
            },
            {
                value: 2,
                name:`${'2.'.green} Historial`
            },
            {
                value: 0,
                name:`${'0.'.green} Salir\n`
            }
            
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();

        console.log('==========================='.green);
        console.log('  Seleccione una opcion   '.green);
        console.log('===========================\n'.green);

        const {opcion} = await inquirer.prompt(menuOpt)
        return opcion;
}


const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'Enter'.green} para continuar`
        }
    ]

    await inquirer.prompt(question);

}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0 ){
                    return `Ingrese un valor`;
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const mostrarData = async (data) => {
    
    const choices = data.map((info, i) => {
        const idx = `${i + 1}`.green;
        return{
            value: info.id,
            name: `${idx}. ${info.name}`
        }
    })

    const preguntas = [
        {
            type: 'list',
            name: 'Ligas: ',
            choices
    
        }
    ]
    return await inquirer.prompt(preguntas);

}

const listarData = async (data) => {
    
    const choices = data.map((info, i) => {
        const idx = `${i + 1}`.green;
        return{
            value: info.name,
            name: `${idx}. ${info.name}`
        }
    })

    choices.unshift(
        {
            value: 0,
            name:`${'0.'.green} Cancelar`
        }
    )

    const preguntas = [
        {
            type: 'list',
            name: 'name',
            message: 'Seleccione Ciudad',
            choices
    
        }
    ]
    const {name} = await inquirer.prompt(preguntas);
    return name;
}

const confimar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const{ ok } = await inquirer.prompt(question);
    return ok;

}

const mostrarListadoChekList = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;
        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn)? true: false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
    
        }
    ]
    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}

module.exports= {
    inquirerMenu,
    pausa,
    leerInput,
    listarData,
    confimar,
    mostrarListadoChekList,
    mostrarData
}