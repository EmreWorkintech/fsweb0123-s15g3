/*
Brief: gerçek hayat insan simülasyonu oyunu

SPECS:
1- yeni karakter yaratırken isim ve yaş bilgisi giriliyor.
2- oluşturulan karakterin özellikleri:
    mideKapasitesi var: [%], initial: 0%
    enerjisi var: 0-100 arasında olacak, initial: 100
3- karakterin bazı özellikleri var:
    yemek yer: 
        yediği kadar midesi dolar: Örn: 10 yerse mideKapasitesi  += 10 olur
        enerjisi de yarısı katı artar
    hareket eder: 
        yürüyebilir: her km'de enerjisi 2.5 birim azalır.
        koşabilir:  her km'de enerjisi 10 birim azalır.
4- bazı sınırları var:
    mideKaptasitesi 100'den fazla olamaz, 0'dan küçük olamaz
    enerjisi 100'den fazla olamaz, 0'dan küçük olamaz.
  
*/

/*
    versiyon: 2;
    bu insanın bazı becerileri var.
        ilk tanımlandığında becerisi yok
    beceri öğrenme özelliği var.
*/
const Human = require('./human');
let emre;
beforeAll(()=>{   // test yazılımının başlangıcında bir kere çalışır.

})
beforeEach(()=>{   // her testten önce çalışır
    emre = new Human('Emre', 45);
})

afterEach(()=>{   // her testten sonra çalışır
   
})

afterAll(()=>{   //bütün testler bittikten sonra çalışır.
   
})



describe('Human objesi:', ()=> {
    test('[1] yeni bir human başarıyla oluşturuluyor', ()=> {
        expect(Human).toBeDefined();
        expect(emre).toHaveProperty('name', 'Emre');
        expect(emre).toHaveProperty('age', 45);
        expect(emre).toMatchObject({name:'Emre', age: 45});
    })
    test('[2] yeni human\'ın default özellikleri doğru tanımlanıyor', ()=> {
        expect(emre).toHaveProperty('stomach', 0);
        expect(emre).toHaveProperty('energy', 100);
        expect(emre).toMatchObject({name:'Emre', age: 45, stomach:0, energy: 100});
    })
})

describe('Human karakterinin yapabilecekleri:', ()=> {
    describe('Yemek yeme özellikleri:', ()=> {
        test('[3] yemek yediğinde midesi dolar', ()=>{
            emre.eat(30);
            expect(emre.stomach).toBe(30);
            emre.eat(70);
            expect(emre.stomach).toBe(100);
        })
        test('[4] yemek yediğinde enerjisi artar', ()=>{
            emre.move(5,'run');
            emre.eat(30);
            expect(emre.energy).toBe(65);
        })
    })

    describe('Hareket etme özellikleri:', ()=> {
        test('[5] yürüdüğünde enerjisi azalır', ()=>{
            emre.move(10,'walk');
            expect(emre.energy).toBe(75);
        })
        test('[6] yürüdüğünde açıkır', ()=>{
            emre.eat(30);
            emre.move(10,'walk');
            expect(emre.stomach).toBe(25);
        })
        test('[7] koştuğunda enerjisi azalır', ()=>{
            emre.move(5,'run');
            expect(emre.energy).toBe(50);
        })
        test('[8] koştuğunda acıkır', ()=>{
            emre.eat(30);
            emre.move(5,'run');
            expect(emre.stomach).toBe(20);
        })
    })
    
})

describe('Human karakterinin sınarları:', ()=> {
    describe('Stomach:', ()=> {
        test('[9] kapasitesi 100\'den fazla olamaz', ()=>{
            emre.eat(120);
            expect(emre.stomach).toBe(100);
        })
        test('[10] kapasitesi 0\'dan az olamaz', ()=>{
            emre.move(1,'run');
            expect(emre.stomach).toBe(0);
        })
    })

    describe('Energy:', ()=> {
        test('[11] kapasitesi 100\'den fazla olamaz', ()=>{
            emre.eat(30);
            expect(emre.energy).toBe(100);
        })
        test('[12] kapasitesi 0\'dan az olamaz', ()=>{
            emre.move(11,'run');
            expect(emre.energy).toBe(0);
        })
    })
    
})

describe('Human v2', ()=> {
    beforeEach(()=>{   // her testten önce çalışır
        erdem = new Human('Emre', 45, ["Hızlı Okuma"]);
    })
    
    describe('Yeni karakter doğru oluşturuluyor', ()=> {
        test('[13] v2 human\'ın default özellikleri doğru tanımlanıyor', ()=> {
            expect(erdem.skills).toEqual(["Hızlı Okuma"]);
        })

        test('[14] eski versiyonda da yeni skiller oluşabiliyor', ()=> {
            expect(emre.skills).toEqual([]);
        })
    })
    
})