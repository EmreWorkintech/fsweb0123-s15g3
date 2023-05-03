const { foo, sum, multiply } = require('./index');

describe('Basic Test:', ()=>{
    it('[1] checks sanity', ()=>{
        expect(5).toBe(5);
        expect(5).toBe(3+2);
        expect(5).not.toBe(5*2);
        expect(5).toBeDefined();
        expect(5).toBeGreaterThan(3);
    })
    test('[2] checks ojects', ()=>{
        const o1 = {a:1}
        const o2 = {a:1}
        const o3 = o2
        const o4 = {a:1,b:2}
        expect(o1).not.toBe(o2);
        expect(o3).toBe(o2);
        expect(o1).toEqual(o2);
        expect(o4).toMatchObject(o1);
        expect(o1).not.toHaveProperty('b');
        expect(o1).toHaveProperty('a');
        expect(o1).toHaveProperty('a',1);
        expect(o1.a).toBe(1);
    })
})

describe('Unit Test:', ()=>{
    describe('Sync Test: ', ()=>{
        /* it.only('only örneği', ()=>{
            expect(5).toBe(5);
            })
            it.todo('function testlerini buraya yazacağız');
            it.skip('function testlerini buraya yazacağız', ()=> {
            
            });
         */
        test('[3] foo function return expected string', ()=> {
            const result = foo();
            expect(result).toHaveLength(15);
            expect(result).toMatch(/bar/);
        })
    })
    describe('async Test: ', ()=>{
        it('[4] function testlerini buraya yazacağız', async ()=> {
            const result = await multiply(7,5);
            const expectedValue = 35;
            expect(result).toBe(expectedValue);
        });
        it('[5] function testlerini buraya yazacağız', ()=> {
            multiply(7,5).then(result=> {
                const expectedValue = 35;
                expect(result).toBe(expectedValue);
            });
            
        });
    })
})