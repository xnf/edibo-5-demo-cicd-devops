import {dividivide, rezireizina} from "../src/script";

it('should return 4 when i multiply 2 and 2', ()=>{
   expect(rezireizina(2, 2)).toBe(8);
});

it('should return 5 when 10 divided by 2', ()=>{
   expect(dividivide(10, 2)).toBe(5);
});

it('should return null when divided by zero', ()=>{
   expect(dividivide(10,0)).toBe(Infinity);
})
