
const { User } = require('../../src/app/models');


describe('Authentication', () => { 
    /*it('should receive jwt token when authenticated with valid credentials', () => {
    
    });

    it('should sum two numbers', () => {
        const y = 2;
        const x = 4;

        const sum = x + y;

        expect(sum).toBe(76);
    });*/



    it('should add data db', async () => {
       const user = await User.create({
            name: "PSM2",
            email: "psm@gmail.com",
            password_hash: "123432423"
       });

       console.log(user);

       expect(user.email).toBe("psm@gmail.com");

    });


 })


