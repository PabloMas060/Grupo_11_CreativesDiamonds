'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Merchs', [
      {
        name: 'Mochila AC/DC 1',
        price: 30,
        discount: null,
        image: 'acdc-backpack1.png',
        bandId: 1,
        typeId: 5,
        description: 'Esta mochila con el logo de AC/DC es perfecta para los fanáticos. Está confeccionada con material resistente y cómodo, ideal para llevar tus pertenencias con estilo.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mochila AC/DC 2',
        price: 30,
        discount: null,
        image: 'acdc-backpack2.png',
        bandId: 1,
        typeId: 5,
        description: 'Si buscas una alternativa a la mochila principal de AC/DC, esta es una excelente opción. Fabricada con material duradero y diseño exclusivo.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cartas AC/DC',
        price: 10,
        discount: null,
        image: 'acdc-cards.png',
        bandId: 1,
        typeId: 10,
        description: 'Esta baraja de cartas con diseño de AC/DC es ideal para los amantes del juego. Las cartas están impresas en material de alta calidad y son perfectas para pasar el tiempo con amigos.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taza AC/DC 1',
        price: 15,
        discount: null,
        image: 'acdc-cup1.png',
        bandId: 1,
        typeId: 4,
        description: 'Disfruta de tus bebidas favoritas en esta taza con el logo de AC/DC. Hecha de cerámica de calidad, esta taza es resistente y elegante al mismo tiempo.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emblema AC/DC 1',
        price: 5,
        discount: null,
        image: 'acdc-emblem1.png',
        bandId: 1,
        typeId: 8,
        description: 'Este emblema con el logo de AC/DC es perfecto para personalizar tu ropa o accesorios. Está hecho de metal de alta calidad y es resistente al desgaste.',
        exclusive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sudadera AC/DC 1',
        price: 40,
        discount: null,
        image: 'acdc-hoodie1.png',
        bandId: 1,
        typeId: 7,
        description: 'Esta sudadera con diseño de AC/DC es una prenda de calidad superior. Está confeccionada con algodón suave y resistente para brindarte comodidad y estilo.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sudadera AC/DC 2',
        price: 40,
        discount: null,
        image: 'acdc-hoodie2.png',
        bandId: 1,
        typeId: 7,
        description: 'Si buscas otra opción de sudadera, esta es perfecta. Fabricada con materiales de alta calidad y diseño exclusivo de AC/DC para los amantes de la música.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Púa AC/DC',
        price: 2,
        discount: null,
        image: 'acdc-pick.png',
        bandId: 1,
        typeId: 9,
        description: 'Esta púa de guitarra con el logo de AC/DC está hecha de material resistente. Ideal para músicos y fans de la banda que buscan un sonido auténtico.',
        exclusive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Póster AC/DC 1',
        price: 12,
        discount: null,
        image: 'acdc-poster1.png',
        bandId: 1,
        typeId: 3,
        description: 'Decora tus paredes con este póster decorativo de AC/DC. Impreso en papel de alta calidad, es una adición imprescindible para cualquier espacio de fans.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camiseta AC/DC 1',
        price: 20,
        discount: null,
        image: 'acdc-shirt1.png',
        bandId: 1,
        typeId: 1,
        description: 'Esta camiseta con diseño de AC/DC es una prenda esencial para cualquier fan. Hecha de algodón suave y duradero para brindarte comodidad y estilo.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Medias Guns N\' Roses',
        price: 15,
        discount: null,
        image: 'guns-indumentary1-1.png',
        bandId: 2,
        typeId: 11,
        description: 'Medias de alta calidad con el logo de Guns N\' Roses. Hechas de algodón suave y duradero.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Campera de Cuero Guns N\' Roses',
        price: 120,
        discount: null,
        image: 'guns-indumentary1-2.png',
        bandId: 2,
        typeId: 2,
        description: 'Campera de cuero genuino con diseño exclusivo de Guns N\' Roses. Excelente calidad y durabilidad.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chaqueta sin Mangas Guns N\' Roses',
        price: 45,
        discount: null,
        image: 'guns-indumentary1-3.png',
        bandId: 2,
        typeId: 11,
        description: 'Chaqueta sin mangas de alta calidad con el emblema de Guns N\' Roses. Comodidad y estilo en uno.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gorra Guns N\' Roses',
        price: 20,
        discount: null,
        image: 'guns-indumentary1-4.png',
        bandId: 2,
        typeId: 11,
        description: 'Gorra de primera calidad con el logo icónico de Guns N\' Roses. Protege del sol con estilo.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Figuritas Funko Pop de Guns N\' Roses',
        price: 25,
        discount: null,
        image: 'guns-merch1.png',
        bandId: 2,
        typeId: 10,
        description: 'Colecciona estas figuritas Funko Pop de Guns N\' Roses. Detalles precisos y material duradero.',
        exclusive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rompecabezas Guns N\' Roses',
        price: 30,
        discount: null,
        image: 'guns-merch2.png',
        bandId: 2,
        typeId: 10,
        description: 'Arma este rompecabezas de alta calidad con una imagen emblemática de Guns N\' Roses. Divertido y desafiante.',
        exclusive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camiseta Led Zeppelin 1',
        price: 25,
        discount: null,
        image: 'zeppelin-shirt1.png',
        bandId: 3,
        typeId: 1,
        description: 'Esta camiseta de Led Zeppelin es una pieza esencial para los fanáticos de la banda. Hecha de algodón suave y con un diseño emblemático, es cómoda y elegante.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camiseta Led Zeppelin 2',
        price: 25,
        discount: null,
        image: 'zeppelin-shirt2.png',
        bandId: 3,
        typeId: 1,
        description: 'Otra opción de camiseta de Led Zeppelin para los amantes de la música. Fabricada con algodón de alta calidad y diseño único de la banda.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sudadera Led Zeppelin 1',
        price: 45,
        discount: null,
        image: 'zeppelin-hoodie1.png',
        bandId: 3,
        typeId: 7,
        description: 'Esta sudadera de Led Zeppelin es ideal para mantenerte abrigado y mostrar tu amor por la banda. Fabricada con material suave y resistente.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sticker Led Zeppelin',
        price: 3,
        discount: null,
        image: 'zeppelin-sticker1.png',
        bandId: 3,
        typeId: 6,
        description: 'Este sticker de Led Zeppelin presenta el famoso "blimp" de la banda. Es resistente al agua y perfecto para decorar tus pertenencias.',
        exclusive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Póster de Conciertos de Led Zeppelin',
        price: 15,
        discount: null,
        image: 'zeppelin-poster1.png',
        bandId: 3,
        typeId: 3,
        description: 'Decora tus paredes con este póster que muestra imágenes de icónicos conciertos de Led Zeppelin. Impreso en papel de alta calidad para un aspecto impresionante.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Póster de Mothership de Led Zeppelin',
        price: 15,
        discount: null,
        image: 'zeppelin-poster2.png',
        bandId: 3,
        typeId: 3,
        description: 'Este póster presenta la portada del álbum "Mothership" de Led Zeppelin. Impreso en papel de alta calidad, es un imprescindible para los fans.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sudadera Muse 1 (Negra)',
        price: 50,
        discount: null,
        image: 'muse-hoodie1.jpg',
        bandId: 4,
        typeId: 7,
        description: 'Esta sudadera negra de Muse es perfecta para mantenerte abrigado con estilo. Fabricada con material de alta calidad, es cómoda y duradera.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taza Muse 1 (Holes and Revelations)',
        price: 12,
        discount: null,
        image: 'muse-cup1.jpg',
        bandId: 4,
        typeId: 4,
        description: 'Disfruta de tus bebidas favoritas en esta taza de Muse con el arte del álbum "Holes and Revelations". Hecha de cerámica de calidad.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camiseta Muse 1 (Negra, Simple)',
        price: 20,
        discount: null,
        image: 'muse-shirt1.jpg',
        bandId: 4,
        typeId: 1,
        description: 'Esta camiseta negra simple de Muse es esencial para los fanáticos de la banda. Hecha de algodón suave y de calidad para brindarte comodidad.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gorra Muse (Indumentaria)',
        price: 15,
        discount: null,
        image: 'muse-indumentary1.jpg',
        bandId: 4,
        typeId: 11,
        description: 'Completa tu look con esta gorra de Muse. Fabricada con material resistente, es un accesorio de calidad que muestra tu amor por la banda.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emblema Muse (Logo)',
        price: 5,
        discount: null,
        image: 'muse-emblem1.jpg',
        bandId: 4,
        typeId: 8,
        description: 'Decora tus pertenencias con este emblema con el logo de Muse. Hecho de material duradero y resistente al desgaste.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camiseta Muse 2 (Negra, Diseño Complejo)',
        price: 25,
        discount: null,
        image: 'muse-shirt2.jpg',
        bandId: 4,
        typeId: 1,
        description: 'Esta camiseta negra de Muse presenta un diseño más complejo para los amantes de la moda. Fabricada con algodón suave y de calidad.',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Merchs', null, {});
  }
};