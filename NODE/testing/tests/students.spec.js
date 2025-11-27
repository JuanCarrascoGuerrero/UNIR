const request = require('supertest'); //libreria testear apis  de express
const app = require('../src/app');
const { default: mongoose } = require('mongoose');
const mongoose = require(mongoose)


describe('API Students',  ()=>{

    //¿Algo antes de todo lo de este grupo? -> beforeAll

    //comviene primero testear las conexiones con base de datos...

    beforeAll(async ()=>{
        await mongoose.connect('mongodb://localhost27017/api-students-test');
    })

    afterAll(()=>{
        mongoose.disconnect();
    })


    let response;

    beforeAll(async ()=>{
        response = await request(app).get('/api/students').send();
    })

    describe('GET /api/students', ()=>{
        it('deberia responder con status 200', async ()=>{
            //En before all ya estamos haciendo el request http api
            //al pasarle la app express aislada ¡¡no tenemos que levantar el servidor para ejecutar las pruebas!!
            expect(response.status).toBe(200);
        })

        it('deberia responder JSON', async ()=>{
            //Content-Type: application/json
            expect(response.headers['content-type']).toContain('application/json');
        })

        it('deberia responder array de estudiantes', async ()=>{
            //Content-Type: application/json
            expect(response.body).toBeInstanceOf(Array);
        })
    })

    describe('GET /api/students', ()=>{
        
    })


})