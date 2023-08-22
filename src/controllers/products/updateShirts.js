const {existSync, unlinkSync} = require('fs')
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res) => {
    const shirts = readJSON("shirts.json")
    const id = req.params.id
    const {title, artist,price,discount, format,discographic,genre,year,description,}= req.body
    
    const shirtsModify = shirts.map(vinyl =>{
        if(shirt.id === req.params.id){

            req.file &&
            existSync(`./public/images/${shirt.images}`) &&
            unlinkSync(`./public/images/${shirt.images}`)


            shirt.title = title.trim()
            shirt.artist = artist.trim()
            shirt.price = +price
            shirt.discount = +discount
            shirt.format = format
            shirt.discographic = discographic.trim()
            shirt.genre = genre
            shirt.year = +year
            shirt.description = description.trim()
            shirt.mainImage = req.files.mainImage ? req.files.mainImage[0].filename : null
            shirt.images = req.files.images ? req.files.images.map(image => image.filename) : []
            
            


        }
        return vinyl;
    }) 
    writeJSON(shirtsModify,'shirts.json');

    return res.redirect('/users/admin')
}