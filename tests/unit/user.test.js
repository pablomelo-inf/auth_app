const bcrypt = require('bcryptjs');
const {User} = require('../../src/app/models');
const truncate = require('../utils/truncate');


describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Paulo',
            email: 'paulo@psm.com',
            password: '123467'
        });

        const compareHash = await bcrypt.compare('123467', user.password_hash);

        expect(compareHash).toBe(true);

    });

});