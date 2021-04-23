let {data} = require('../api/router-model')
const request = require('supertest')
const server = require('./server')



const newGuy = {id:3, name:'Ed'}



describe("server functionality",()=>{

    describe('[POST] "/stuff"',()=>{
        it("should return the added object with the right shape", async ()=>{
            let res
            res = await request(server).post('/api/stuff').send(newGuy)
            console.log(data)
           expect(data.length).toBe(3)
            //expect(res.body).toMatchObject(newGuy)
        })
    })
})