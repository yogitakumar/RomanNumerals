//MyTest

const{
    DecimalToRoman,
    RomanToDecimal
}=require("../challenge/myCode");

describe("Decimal To RomanNumeral",()=>{
    test("Convert numbers to Roman numerals",()=>{
        expect(DecimalToRoman(1)).toBe("I");
        expect(DecimalToRoman(2)).toBe("II");
        expect(DecimalToRoman(3)).toBe("III");
        expect(DecimalToRoman(3250)).toBe("MMMCCL");
    });
});

describe("RomanNumeral To Decimal",()=>{
    test("Convert Roman numerals to numbers",()=>{
        expect( RomanToDecimal("I")).toBe(1);
        expect( RomanToDecimal("II")).toBe(2);
        expect( RomanToDecimal("III")).toBe(3);
        expect( RomanToDecimal("MMMCCL")).toBe(3250);
    });
});