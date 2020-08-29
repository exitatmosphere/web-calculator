const { getTwoArgsOperation, getOneArgOperation } = require("./operations");

describe("Operation getter", () => {
    it("should return addition function", () => {
        expect(getTwoArgsOperation("+").name).toBe("addition");
    });

    it("should return subtraction function", () => {
        expect(getTwoArgsOperation("-").name).toBe("subtraction");
    });

    it("should return multiplication function", () => {
        expect(getTwoArgsOperation("*").name).toBe("multiplication");
    });

    it("should return division function", () => {
        expect(getTwoArgsOperation("/").name).toBe("division");
    });

    it("should return exponentiation function", () => {
        expect(getTwoArgsOperation("**").name).toBe("exponentiation");
    });

    it("should return percent function", () => {
        expect(getTwoArgsOperation("%").name).toBe("percent");
    });

    it("should return subtraction function", () => {
        expect(getOneArgOperation("sin").name).toBe("sin");
    });

    it("should return multiplication function", () => {
        expect(getOneArgOperation("cos").name).toBe("cos");
    });

    it("should return division function", () => {
        expect(getOneArgOperation("tg").name).toBe("tg");
    });

    it("should return exponentiation function", () => {
        expect(getOneArgOperation("ctg").name).toBe("ctg");
    });
});

describe("operations", () => {
    it("addition", () => {
        expect(getTwoArgsOperation("+")(1, 2)).toBe(3);
    });

    it("subtraction", () => {
        expect(getTwoArgsOperation("-")(1, 2)).toBe(-1);
    });

    it("multiplication", () => {
        expect(getTwoArgsOperation("*")(1, 2)).toBe(2);
    });

    it("division", () => {
        expect(getTwoArgsOperation("/")(2, 2)).toBe(1);
    });

    it("exponentiation", () => {
        expect(getTwoArgsOperation("**")(3, 3)).toBe(27);
    });

    it("percent", () => {
        expect(getTwoArgsOperation("%")(300, 3)).toBe(9);
    });

    it("sin", () => {
        expect(getOneArgOperation("sin")(0)).toBe(0);
    });

    it("cos", () => {
        expect(getOneArgOperation("cos")(0)).toBe(1);
    });

    it("tg", () => {
        expect(getOneArgOperation("tg")(0)).toBe(0);
    });

    it("ctg", () => {
        expect(getOneArgOperation("ctg")(1)).toBe(0.6420926159343306);
    });
});