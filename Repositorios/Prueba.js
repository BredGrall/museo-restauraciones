var con = require('../BD_Conexion');
const mysql = require('mysql');

class PruebaRepositorio{
    guardar(Datos) {
        var query = con.query('INSERT INTO RespuestaPrestamo SET ?', 
        Datos, function (error, results, fields) {
        if (error) throw error;
        });
        console.log(query.sql);
    }

    async enviar(numCuenta) {
        const callback = new Promise((resolve, reject) => (
            con.query(
                'SELECT * FROM SolicitudPrestamo WHERE numCuenta = ?',
                [numCuenta],
                function (error, results, fields) {
                    if (error) reject(error);
                    resolve(results);
                }
            ))
        )
        return callback.then(res => res).catch(err => {throw err})
    }
}
module.exports = PruebaRepositorio;