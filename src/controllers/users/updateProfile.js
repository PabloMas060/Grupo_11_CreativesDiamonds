const { existSync, unlinkSync } = require('fs');
const { readJSON, writeJSON } = require('../../data');
const { validationResult } = require('express-validator');



module.exports = (req, res) => {

    const users = readJSON('users.json');
    const user = users.find(user => user.id === req.session.user.id)
    let errors = validationResult(req);

    if (!req.session.user) {
        return res.redirect('/users/login');
    } else {

    
        const users = readJSON("users.json");

        // Obtén el ID del usuario de la sesión
        const userId = req.session.user.id;


        // Busca al usuario en la lista de usuarios por su ID
        const userFind = users.find(user => user.id === userId);
        // Actualiza los campos relevantes del usuario
        const { firstName, lastName, email, phone, shipping} = req.body;
        userFind.firstName = firstName;
        userFind.lastName = lastName;
        userFind.email = email;
        userFind.phone = phone;
        userFind.shipping = shipping;

        req.file &&
        existSync(`./public/images/${ userFind.images}`) &&
        unlinkSync(`./public/images/${ userFind.images}`)
    
    
        userFind.mainImage = req.files.mainImage ? req.files.mainImage[0].filename : userFind.mainImage
        
        if (!errors.isEmpty()) {
            return res.render('users/profile', {
                old: req.body,
                errors: errors.mapped(),
                ...user
            }) 
        }

        // Guarda los cambios en el archivo JSON

        writeJSON(users, 'users.json');

        // Redirige al perfil del usuario después de la actualización
        res.redirect('users/profile');

    }


};

