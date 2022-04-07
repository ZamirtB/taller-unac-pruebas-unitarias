import {sum } from "../src/sum-array"

test("Funcion Suma array de 2 numeros 5+4=9 " , () =>{
    expect(sum([5,4])).toBe(9);
})


test("Funcion Suma array de 2 numeros 5+2=7 " , () =>{
    expect(sum([5,2])).toBe(7);
})