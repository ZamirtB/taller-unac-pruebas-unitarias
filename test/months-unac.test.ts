import {monthsUnac} from "../src/months-unac";


test("Contiene mes llamado Jan", ()=>{
    expect(monthsUnac()).toContain("Jan");
})
