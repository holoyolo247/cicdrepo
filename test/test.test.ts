import { handler } from "../services/hello"

describe('Hello describe test suite',()=>{
    test('handler should return 200',async()=>{
        const result = await handler({},{})
        expect(result.statusCode).toBe(200)
       

    })
    test('handler should return body = Hello',async()=>{
        const result = await handler({},{})
        expect(result.body).toBe('Hello')
       

    })
})