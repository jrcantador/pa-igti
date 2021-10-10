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

        const test = await personService.find({}, "_id", "asc", 0, 10);
        expect(test.length).toBe(1);
    })

    test("update", async () =>{

        let person = {
            'name' : "User Test 1",
            'birth_date' : '2021-01-01 00:00:00',
            'telephone' : '14999999999'
        }
        let people = await personService.create(person);        
        expect([people].length).toBe(1);

        people.name = "User Test 2"
        await personService.update(people._id, people);        ;
            
        const test = await personService.find({"_id" : people._id}, "name", "asc", 0, 10);          
        expect(test[0].name).toBe("User Test 2");                
    })

    test("remove", async () =>{

        const person = {
            'name' : "User Test 1",
            'birth_date' : '2021-01-01 00:00:00',
            'telephone' : '14999999999'
        }
        const people = await personService.create(person);
        expect([people].length).toBe(1);

        await personService.remove(people._id);

        const test = await personService.find({"_id" : people._id}, "name", "asc", 0, 10);          
        expect(test.length).toBe(0); 
    })

    test("count", async () =>{

        const person1 = {
            'name' : "User Test 1",
            'birth_date' : '2021-01-01 00:00:00',
            'telephone' : '14999999999'
        }

        const person2 = {
            'name' : "User Test 2",
            'birth_date' : '2021-01-01 00:00:00',
            'telephone' : '14999999999'
        }
        
        await personService.create(person1);
        await personService.create(person2);        
               
        const find = await personService.find({}, "name", "asc", 0, 10);                         
        expect(find.length).toBe(2);    
                
        const count = await personService.count({});                  
        expect(count).toBe(2); 
    })

})  

