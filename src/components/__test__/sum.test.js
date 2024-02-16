import { sum } from "../sum"

test("testing the sum function",()=>{
    const result = sum(2,3)
    expect(result).toBe(5)
})