global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

  const dataPoke =[{
    
      name: "Caterpie",
      num: "010",
      type:["Bug"]
    },
    {
      name: "Dragonite",
      num: "149",
      type:["Dragon"]
    },
     {
      name: "Squirtle",
      num:"007", 
      type:["Water"]
     } 
  
  ]
 
describe('pokedexType', () => {
  
    
  it('debería ser una función', () => {
    assert.equal(typeof pokedexType, 'function');
  });


  it('debería retornar elemento "Caterpie" para filtrar por tipo "Bug"', () => {
    assert.deepEqual(window.pokedexType(dataPoke, "Bug"), [{
      name: "Caterpie",
      num:"010",
      type:["Bug"]
    }])
    });
  })
  

  describe('sortPoke', () => {
  
    
    it('debería ser una función', () => {
      assert.equal(typeof sortPoke, 'function');
    });
  
  
    it('debería retornar el elemento "Caterpie, Dragonite');
   /*  assert.deepEqual(window.pokedexType(dataPoke, "Bug"), [{
        name: "Caterpie",
        num:"010",
        type:["Bug"]
      }])
      });*/
    
    })
    
  