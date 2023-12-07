const translate = require("./script");

test("consonant clusters", () => {
    expect(translate("this is hard")).toBe("isthay isway ardhay");
});