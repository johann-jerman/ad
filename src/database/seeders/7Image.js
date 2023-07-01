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
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//1
      },
      {
        image: '1.2.RemeraRosa.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//2
      },
      {
        image: '1.3.RemeraRosa.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//3
      },
      {
        image: '1.4.RemeraBlanca.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//4
      },
      {
        image: '1.5.RemeraBlanca.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//5
      },
      {
        image: '1.6.RemeraBlanca.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//6
      },
      {
        image: '1.7.RemeraCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//7
      },
      {
        image: '1.8.RemeraCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//8
      },
      {
        image: '1.9.RemeraCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//9
      },
      {
        image: '1.10.RemeraNegra.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//10
      },
      {
        image: '1.11.RemeraNegra.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//11
      },
      {
        image: '1.12.RemeraNegra.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//12
      },
      {
        image: '1.13.RemeraGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//13
      },
      {
        image: '1.14.RemeraGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//14
      },
      {
        image: '1.15.RemeraGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//15
      },
      {
        image: '2.1.BuzoDeportivoRosa.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//16
      },
      {
        image: '2.2.BuzoDeportivoRosa.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//17
      },
      {
        image: '2.3.BuzoDeportivoRosa.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//18
      },
      {
        image: '2.4.BuzoDeportivoCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//19
      },
      {
        image: '2.5.BuzoDeportivoCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//20
      },
      {
        image: '2.6.BuzoDeportivoCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//21
      },
      {
        image: '2.10.BuzoDeportivoGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//22
      },
      {
        image: '2.11.BuzoDeportivoGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//23
      },
      {
        image: '2.12.BuzoDeportivoGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//24
      },
      {
        image: '2.13.BuzoDeportivoCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//25
      },
      {
        image: '2.14.BuzoDeportivoCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//26
      },
      {
        image: '2.15.BuzoDeportivoCeleste.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//27
      },
      {
        image: '2.16.BuzoDeportivoNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//28
      },
      {
        image: '2.17.BuzoDeportivoNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//29
      },
      {
        image: '2.18.BuzoDeportivoNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//30
      },
      {
        image: '2.19.BuzoDeportivoNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//31
      },
      {
        image: '2.20.BuzoDeportivoBlanco.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//32
      },
      {
        image: '2.21.BuzoDeportivoBlanco.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//33
      },
      {
        image: '2.22.BuzoDeportivoBlanco.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//34
      },
      {
        image: '2.23.BuzoDeportivoNaranja.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//35
      },
      {
        image: '2.24.BuzoDeportivoNaranja.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//36
      },
      {
        image: '2.25.BuzoDeportivoNaranja.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//37
      },
      {
        image: '2.26.BuzoDeportivoNaranja.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//38
      },

      {
        image: '3.1.PantDeportivoLila.webp',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//39
      },
      {
        image: '3.2.PantDeportivoLila.webp',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//40
      },
      {
        image: '3.3.PantDeportivoLila.webp',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//41
      },
      {
        image: '3.4.PantDeportivoRosa.webp',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//42
      },
      {
        image: '3.5.PantDeportivoRosa.webp',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//43
      },
      {
        image: '3.6.PantDeportivoRosa.webp',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//44
      },
      {
        image: '3.8.PantDeportivoNaranja.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//45
      },
      {
        image: '3.9.PantDeportivoNaranja.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//46
      },
      {
        image: '3.10.PantDeportivoNaranja.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//47
      },
      {
        image: '3.11.PantDeportivoMarron.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//48
      },
      {
        image: '3.12.PantDeportivoMarron.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//49
      },
      {
        image: '3.13.PantDeportivoMarron.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//50
      },
      {
        image: '3.14.PantDeportivoGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//51
      },
      {
        image: '3.15.PantDeportivoGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//52
      },
      {
        image: '3.16.PantDeportivoGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//53
      },
      {
        image: '3.20.PantDeportivoNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//54
      },
      {
        image: '3.21.PantDeportivoNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//55
      },
      {
        image: '3.22.PantDeportivoNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//56
      },
      {
        image: '4.1.CamperaDepNegra.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//57
      },
      {
        image: '4.2.CamperaDepNegra.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//58
      },
      {
        image: '4.3.CamperaDepNegra.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//59
      },
      {
        image: '4.6.CamperaDepVerde.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//60
      },
      {
        image: '4.7.CamperaDepVerde.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//61
      },
      {
        image: '4.8.CamperaDepNegra.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//62
      },
      {
        image: '4.9.CamperaDepNegra.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//63
      },
      {
        image: '4.10.CamperaDepRoja.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//64
      },
      {
        image: '4.11.CamperaDepRoja.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//65
      },

      {
        image: '1.1.RemeraHombBlanca.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//66
      },
      {
        image: '1.2.RemeraHombBlanca.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//67
      },
      {
        image: '1.3.RemeraHombBlanca.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//68
      },
      {
        image: '1.4.RemeraHombGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//69
      },
      {
        image: '1.5.RemeraHombGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//70
      },
      {
        image: '1.6.RemeraHombGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//71
      },
      {
        image: '1.7.RemeraHombRosa.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//72
      },
      {
        image: '1.8.RemeraHombRosa.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//73
      },
      {
        image: '1.9.RemeraHombBordo.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//74
      },
      {
        image: '1.10.RemeraHombBordo.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//75
      },
      {
        image: '1.11.RemeraHombBordo.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//76
      },
      {
        image: '3.4.CamperaDepAzul.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//77
      },
      {
        image: '3.5.CamperaDepAzul.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//78
      },
      {
        image: '3.6.CamperaDepAzul.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//79
      },
      {
        image: '3.7.CamperaDepVizon.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//80
      },
      {
        image: '3.8.CamperaDepVizon.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//81
      },
      {
        image: '3.10.CamperaDepNegra.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//82
      },
      {
        image: '3.11.CamperaDepNegra.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//83
      },
      {
        image: '3.12.CamperaDepNegra.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//84
      },

      {
        image: '4.1.PantalonDepVerde.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//85
      },
      {
        image: '4.2.PantalonDepVerde.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//86
      },
      {
        image: '4.3.PantalonDepVerde.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//87
      },
      {
        image: '4.4.PantalonDepNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//88
      },
      {
        image: '4.5.PantalonDepNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//89
      },
      {
        image: '4.6.PantalonDepNegro.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//90
      },
      {
        image: '4.7.PantalonDepGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//91
      },
      {
        image: '4.8.PantalonDepGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//92
      },
      {
        image: '4.9.PantalonDepGris.jpg',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//93
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
