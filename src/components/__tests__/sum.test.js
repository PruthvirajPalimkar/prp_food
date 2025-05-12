// import { sum } from "../sum";
const { sum } = require("../sum");

test("Sum funtion should calculate the sum of two numbers", 
    () => {
    const result = sum(1,2);

    expect(result).toBe(3);
});