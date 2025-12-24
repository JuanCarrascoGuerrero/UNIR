const request = require('supertest'); //libreria testear apis  de express
const app = require('../src/app');
require('dotenv').config(); //CARGA EL ENV QUE JEST NO SE ENTERA!!!
const mongoose = require('mongoose')


describe('API Students',  ()=>{

    //¿Algo antes de todo lo de este grupo? -> beforeAll

    //comviene primero testear las conexiones con base de datos...

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGO_URL);
    })

    afterAll(()=>{
        mongoose.disconnect();
    })


    let response;


    describe('GET /api/students', ()=>{
            //Ciclo de vida de las pruebas, para evitar duplicaods, etc...
    beforeAll(async ()=>{
        response = await request(app).get('/api/students').send();
    })

        it('deberia responder con status 200', async ()=>{
            //En before all ya estamos haciendo el request http api
            //al pasarle la app express aislada ¡¡no tenemos que levantar el servidor para ejecutar las pruebas!!
            expect(response.status).toBe(200);
        })

        it('deberia responder JSON', async ()=>{
            //Content-Type: application/json        //Alternativas al toBe()
            expect(response.headers['content-type']).toContain('application/json');
        })

        it('deberia responder array de estudiantes', async ()=>{
            //Más alternativas al toBe()
            console.log("BODY:", response.body);
            expect(response.body).toBeInstanceOf(Array);
        })
    })

    /*describe('GET /api/students', ()=>{
        
    })*/


})