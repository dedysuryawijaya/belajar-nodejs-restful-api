import supertest from "supertest"
import {web} from "../src/application/web.js"
import { prismaClient } from "../src/application/database.js"


describe('POST /api/users', function () {

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                username: 'wydesu'
            }
        })
    })

    it('Should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'wydesu',
                password: 'rahasia',
                name: 'Dedy'
            })

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('wydesu');
        expect(result.body.data.name).toBe('Dedy');
        expect(result.body.data.password).toBeUndefined();
    })
})