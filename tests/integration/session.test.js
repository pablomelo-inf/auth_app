const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');

describe('Authentication', () => { 
    it('should authenticate with valid credentials', async () =>{
        const user = await User.create({
            name: 'PSM',
            email: 'psm@gmail.com',
            password_hash: '12451'
        });


        const response = await request(app)
                         .post("/sessions")
                         .send({
                            email: user.email,
                            password: '12451'
                         });
        
        expect(response.status).toBe(200);


    });
})


