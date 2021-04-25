const Joi = require('joi');


const usuarioValidator = Joi.object({
    nif_cif: Joi.string()
        .min(9)
        .max(9)
        .required()
        .error(
            new Error('nif_cif should be a string of 9 characters')
        ),

    email: Joi.string()
        .min(10)
        .max(100)
        .required()
        .error(
            new Error('email should be a string between 10 and 100 characters')
        ),

    telefono: Joi.string()
        .min(9)
        .max(13)
        .required()
        .error(
            new Error('telefono should be a string between 9 and 13 characters')
        ),

    bio: Joi.string()
        .min(5)
        .max(500)
        .error(
            new Error('bio should be a string between 5 and 500 characters')
        ),

    foto: Joi.string()
        .error(
            new Error('foto should be a png file')
        ),

    nombre: Joi.string()
        .min(3)
        .max(100)
        .required()
        .error(
            new Error('nombre should be a string between 3 and 100 characters')
        ),

    rol: Joi.string()
        .valid('cliente', 'propietario', 'administrador')
        .required()
        .error(
            new Error('rol should be a string between 1 and 13 characters')
        ),

    contrasena: Joi.string()
        .required()
        .error(
            new Error('contraseña should be a string between 9 and 100 characters')
        )
})

const passValidator = Joi.object({



    contrasena: Joi.string()
        .required(),

    newContrasena: Joi.string()
        .required(),

    newContrasenaRepeat: Joi.ref('newContrasena')


})

const newPassValidator = Joi.object({

    newContrasena: Joi.string()
        .required(),

    newContrasenaRepeat: Joi.ref('newContrasena')

})

const emailValidator = Joi.object({

    email: Joi.string()
        .required(),

})

module.exports = {
    usuarioValidator,
    passValidator,
    newPassValidator,
    emailValidator
}
