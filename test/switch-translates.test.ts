import {translateUnac } from "../src/switch-translate";

test("Pasar Hi a Hola", () =>{
    expect(translateUnac('hi')).toMatch(/hola/);
});

test("Pasar Bye a adios", () =>{
    expect(translateUnac('bye')).toMatch(/adios/);
});