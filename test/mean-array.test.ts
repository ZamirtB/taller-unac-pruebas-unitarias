import {mean} from "../src/mean-array";

test("suma 2 numeros 2+3 y lo divide en 2 = 2.5", () =>{
    expect(mean([2,3])).toBe(2.5)

})