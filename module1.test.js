const module1 = require('./module1')

describe('basic feature', ()=>{
    it('should return the right value', () => {
        expect(module1.func1(10)).toBe(11);
    })

    it('func2', () =>{
        const cb = jest.fn()
        cb.mockReturnValue(1)
        expect(module1.func2(10, cb)).toBe(11);
    })
})