const dialerapp = require("../src/dialerapp");

describe("Testcases for dialaerapp ", () => {
  it("it should return fullname of contact by given firstname of keypad form of existed contact ", () => {
    const result = dialerapp.search_contact("2723");
    expect(result).toBe("Brad Pitt");
  });

  it("it should return fullname of contact by given lastname of keypad form of existed contact ", () => {
    const result = dialerapp.search_contact("733837");
    expect(result).toBe("Keanu Reeves");
  });

  it("it should return fullname of contact by given first half of phno of existed contact ", () => {
    const result = dialerapp.search_contact("97432");
    expect(result).toBe("Trisha");
  });

  it("it should return fullname of contact by given second half of phno of existed contact ", () => {
    const result = dialerapp.search_contact("83597");
    expect(result).toBe("Vijay Sethupathy");
  });

  it("it should return contact not found if given contact not existed in the contact list ", () => {
    const result = dialerapp.search_contact("78436");
    expect(result).toBe("contact not found!");
  });

  it("it should create a new contact ", () => {
    const result = dialerapp.create_contact([
      { name: "bhagya", phno: "9876589321" },
    ]);
    expect(result.name).toBe("bhagya");
    expect(result.phno).toBe("9876589321");
  });
});
