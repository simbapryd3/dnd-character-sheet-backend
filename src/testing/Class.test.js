// Class Service Testing

const dndClass = require("../services/Class.service");

describe("Class service", () => {
    describe("findById", () => {
        test("should return /classes/${id} when given id", () => {
            //arrange
            const barbarianClass = [
                { id: 1, url:"http://www.dnd5eapi.co/api/classes/1" }
            ];

            //act
            const response = dndClass.findById(1);
            
            //assert
            expect(response).toEqual(barbarianClass);
        })

    // describe("findAll", () => {  
    // })

    })
})    

// http://www.dnd5eapi.co/api/classes/1