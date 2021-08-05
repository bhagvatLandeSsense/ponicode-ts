import rewire from "rewire"
const _test = rewire("./test")
const addNumbers = _test.__get__("addNumbers")
// @ponicode
describe("addNumbers", () => {
    test("0", () => {
        let result: any = addNumbers(0, -1)
        expect(result).toBe(-1)
    })

    test("1", () => {
        let result: any = addNumbers(-1, 1)
        expect(result).toBe(0)
    })

    test("2", () => {
        let result: any = addNumbers(10, 15)
        expect(result).toBe(25)
    })

    test("3", () => {
        let result: any = addNumbers(1, 1)
        expect(result).toBe(2)
    })

    test("4", () => {
        let result: any = addNumbers(100, 0)
        expect(result).toBe(100)
    })

    test("5", () => {
        let result: any = addNumbers(NaN, NaN)
        expect(result).toBe(NaN)
    })

    test("6", () => {
        let result: any = addNumbers(100, 1)
        expect(result).toBe(101)
    })

    test("7", () => {
        let result: any = addNumbers(100, -100)
        expect(result).toBe(0)
    })

    test("8", () => {
        let result: any = addNumbers("foo bar", "foo bar")
        expect(result).toBe("foo barfoo bar")
    })

    test("9", () => {
        let result: any = addNumbers("This is a String1", 1)
        expect(result).toBe("This is a String11")
    })

    test("10", () => {
        let result: any = addNumbers(0.1, 2)
        expect(result).toBe(2.1)
    })

    test("11", () => {
        let result: any = addNumbers(Infinity, Infinity)
        expect(result).toBe(Infinity)
    })

    test("12", () => {
        let result: any = addNumbers(0, 0.1)
        expect(result).toBe(0.1)
    })

    test("13", () => {
        let result: any = addNumbers(0, 15)
        expect(result).toBe(15)
    })

    test("14", () => {
        let result: any = addNumbers("  This is ", 2)
        expect(result).toBe("  This is 2")
    })

    test("15", () => {
        let result: any = addNumbers(-100, 0)
        expect(result).toBe(-100)
    })

    test("16", () => {
        let result: any = addNumbers("p", 1)
        expect(result).toBe("p1")
    })

    test("17", () => {
        let result: any = addNumbers(-Infinity, -Infinity)
        expect(result).toBe(-Infinity)
    })

    test("18", () => {
        let result: any = addNumbers("This is a String1", 16)
        expect(result).toBe("This is a String116")
    })

    test("19", () => {
        let result: any = addNumbers(-100, 1)
        expect(result).toBe(-99)
    })

    test("20", () => {
        let result: any = addNumbers(0, 1)
        expect(result).toBe(1)
    })

    test("21", () => {
        let result: any = addNumbers(0, 0.2)
        expect(result).toBe(0.2)
    })

    test("22", () => {
        let result: any = addNumbers(-100, -100)
        expect(result).toBe(-200)
    })

    test("23", () => {
        let result: any = addNumbers(0, NaN)
        expect(result).toBe(NaN)
    })
})
