'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('images', [
      {
        image: '1.1.RemeraRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//1
      },
      {
        image: '1.2.RemeraRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//2
      },
      {
        image: '1.3.RemeraRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//3
      },
      {
        image: '1.4.RemeraBlanca.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//4
      },
      {
        image: '1.5.RemeraBlanca.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//5
      },
      {
        image: '1.6.RemeraBlanca.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//6
      },
      {
        image: '1.7.RemeraCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//7
      },
      {
        image: '1.8.RemeraCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//8
      },
      {
        image: '1.9.RemeraCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//9
      },
      {
        image: '1.10.RemeraNegra.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//10
      },
      {
        image: '1.11.RemeraNegra.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//11
      },
      {
        image: '1.12.RemeraNegra.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//12
      },
      {
        image: '1.13.RemeraGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//13
      },
      {
        image: '1.14.RemeraGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//14
      },
      {
        image: '1.15.RemeraGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//15
      },
      {
        image: '2.1.BuzoDeportivoRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//16
      },
      {
        image: '2.2.BuzoDeportivoRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//17
      },
      {
        image: '2.3.BuzoDeportivoRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//18
      },
      {
        image: '2.4.BuzoDeportivoCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//19
      },
      {
        image: '2.5.BuzoDeportivoCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//20
      },
      {
        image: '2.6.BuzoDeportivoCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//21
      },
      {
        image: '2.10.BuzoDeportivoGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//22
      },
      {
        image: '2.11.BuzoDeportivoGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//23
      },
      {
        image: '2.12.BuzoDeportivoGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//24
      },
      {
        image: '2.13.BuzoDeportivoCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//25
      },
      {
        image: '2.14.BuzoDeportivoCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//26
      },
      {
        image: '2.15.BuzoDeportivoCeleste.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//27
      },
      {
        image: '2.16.BuzoDeportivoNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//28
      },
      {
        image: '2.17.BuzoDeportivoNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//29
      },
      {
        image: '2.18.BuzoDeportivoNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//30
      },
      {
        image: '2.19.BuzoDeportivoNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//31
      },
      {
        image: '2.20.BuzoDeportivoBlanco.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//32
      },
      {
        image: '2.21.BuzoDeportivoBlanco.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//33
      },
      {
        image: '2.22.BuzoDeportivoBlanco.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//34
      },
      {
        image: '2.23.BuzoDeportivoNaranja.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//35
      },
      {
        image: '2.24.BuzoDeportivoNaranja.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//36
      },
      {
        image: '2.25.BuzoDeportivoNaranja.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//37
      },
      {
        image: '2.26.BuzoDeportivoNaranja.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//38
      },

      {
        image: '3.1.PantDeportivoLila.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//39
      },
      {
        image: '3.2.PantDeportivoLila.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//40
      },
      {
        image: '3.3.PantDeportivoLila.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//41
      },
      {
        image: '3.4.PantDeportivoRosa.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//42
      },
      {
        image: '3.5.PantDeportivoRosa.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//43
      },
      {
        image: '3.6.PantDeportivoRosa.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//44
      },
      {
        image: '3.8.PantDeportivoNaranja.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//45
      },
      {
        image: '3.9.PantDeportivoNaranja.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//46
      },
      {
        image: '3.10.PantDeportivoNaranja.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//47
      },
      {
        image: '3.11.PantDeportivoMarron.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//48
      },
      {
        image: '3.12.PantDeportivoMarron.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//49
      },
      {
        image: '3.13.PantDeportivoMarron.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//50
      },
      {
        image: '3.14.PantDeportivoGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//51
      },
      {
        image: '3.15.PantDeportivoGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//52
      },
      {
        image: '3.16.PantDeportivoGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//53
      },
      {
        image: '3.20.PantDeportivoNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//54
      },
      {
        image: '3.21.PantDeportivoNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//55
      },
      {
        image: '3.22.PantDeportivoNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//56
      },
      {
        image: '4.1.CamperaDepNegra.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//57
      },
      {
        image: '4.2.CamperaDepNegra.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//58
      },
      {
        image: '4.3.CamperaDepNegra.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//59
      },
      {
        image: '4.6.CamperaDepVerde.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//60
      },
      {
        image: '4.7.CamperaDepVerde.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//61
      },
      {
        image: '4.8.CamperaDepNegra.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//62
      },
      {
        image: '4.9.CamperaDepNegra.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//63
      },
      {
        image: '4.10.CamperaDepRoja.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//64
      },
      {
        image: '4.11.CamperaDepRoja.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//65
      },

      {
        image: '1.1.RemeraHombBlanca.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//66
      },
      {
        image: '1.2.RemeraHombBlanca.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//67
      },
      {
        image: '1.3.RemeraHombBlanca.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//68
      },
      {
        image: '1.4.RemeraHombGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//69
      },
      {
        image: '1.5.RemeraHombGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//70
      },
      {
        image: '1.6.RemeraHombGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//71
      },
      {
        image: '1.7.RemeraHombRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//72
      },
      {
        image: '1.8.RemeraHombRosa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//73
      },
      {
        image: '1.9.RemeraHombBordo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//74
      },
      {
        image: '1.10.RemeraHombBordo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//75
      },
      {
        image: '1.11.RemeraHombBordo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//76
      },
      {
        image: '3.4.CamperaDepAzul.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//77
      },
      {
        image: '3.5.CamperaDepAzul.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//78
      },
      {
        image: '3.6.CamperaDepAzul.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//79
      },
      {
        image: '3.7.CamperaDepVizon.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//80
      },
      {
        image: '3.8.CamperaDepVizon.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//81
      },
      {
        image: '3.10.CamperaDepNegra.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//82
      },
      {
        image: '3.11.CamperaDepNegra.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//83
      },
      {
        image: '3.12.CamperaDepNegra.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//84
      },

      {
        image: '4.1.PantalonDepVerde.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//85
      },
      {
        image: '4.2.PantalonDepVerde.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//86
      },
      {
        image: '4.3.PantalonDepVerde.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//87
      },
      {
        image: '4.4.PantalonDepNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//88
      },
      {
        image: '4.5.PantalonDepNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//89
      },
      {
        image: '4.6.PantalonDepNegro.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//90
      },
      {
        image: '4.7.PantalonDepGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//91
      },
      {
        image: '4.8.PantalonDepGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//92
      },
      {
        image: '4.9.PantalonDepGris.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//93
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
