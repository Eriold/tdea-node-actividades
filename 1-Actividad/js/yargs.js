const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
};

const argv = require('yargs')
    .command('inscribir', 'Inscribirme a un curso', opciones)
    .argv;

module.exports = { argv }