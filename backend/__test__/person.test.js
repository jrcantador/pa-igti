const mongoose = require('mongoose');
const personService = require('../services/personServices');

  
describe('find', () => {
    beforeAll(async ()=>{
        mongoClient = await mongoose.connect("mongodb://localhost/cadTest", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    })

    afterAll(async ()=>{
        await mongoose.connection.close();
    })

    //CUIDADO, APAGA TODO O BANCO
    afterEach(async () => {
        await mongoose.connection.db.dropDatabase();
    })

    test("create", async () =>{

        const person = {
            'name' : "User Test 1",
            'birth_date' : '2021-01-01 00:00:00',
            'telephone' : '14999999999'
        }
        const people = await personService.create(person);
        expect([people].length).toBe(1);
    })
    
    test("find", async () =>{
        const person = {
            'name' : "User Test 1",
            'birth_date' : '2021-01-01 00:00:00',
            'telephone' : '14999999999'
        }
        const people = await personService.create(person);
        expect([people].length).toBe(1);

        const findReturn = await personService.find({}, "_id", "asc", 0, 10);
        expect(findReturn.length).toBe(1);
    })

})


