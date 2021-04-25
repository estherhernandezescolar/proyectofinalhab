const Joi = require('joi');

const salaValidator = Joi.object({

    //  id_coworking: Joi.string()
    //      .min(1)
    //     .max(5)
    //     .required()
    //      .error(
    //         new Error('id_coworking should be a string between 1 and 5 characters')
    //     ),

    tipo: Joi.string()
        .valid('despacho', 'compartida', 'sala de reuniones', 'salón de eventos')
        .error(
            new Error('tipo should be a string valid:despacho/compartida/sala de reuniones/salón de eventos')
        ),

    descripcion: Joi.string()
        .min(5)
        .max(500)
        .error(
            new Error('descripcion should be a string between 100 and 800 characters')
        ),

    capacidad: Joi.number()
        .integer()
        .error(
            new Error('capacidad should be a number between 1 and 2 characters')
        ),

    tarifa: Joi.number()
        .precision(2)
        .error(
            new Error('tarifa should be a number type 0,00')
        ),

    tarifa_tipo: Joi.string()
        .min(1)
        .max(30)
        .error(
            new Error('tarifa tipo should be a string between 1 and 30 characteres')
        ),

    disponibilidad: Joi.string()
        .valid('limpio', 'pendiente de limpieza')
        .error(
            new Error('disponibilidad should be a string valid: limpio/pendiente de limpieza')
        ),

    proyector: Joi.string()
        .valid('si', 'no')
        .error(
             new Error('proyector should be a string valid: si/no')
        ),

    impresora: Joi.string()
        .valid('si', 'no')
         .error(
            new Error('impresora should be a string valid: si/no')
        ),
    })

    module.exports = {
        salaValidator,
    }