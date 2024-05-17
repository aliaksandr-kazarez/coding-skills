describe("Array", () => {
  it("should be able to be created with capacity", () => {
    const arr = new DSArray(5);
    expect(arr).toHaveLength(0);
    expect(arr.capacity).toBe(5);
  });

  it("should be able to be created from existign Array", () => {
    const arr = new DSArray([0, 1, 2, 3]);
    expect(arr).toHaveLength(4);
    expect(arr.capacity).toBe(4);
  });

  describe("basic operations", () => {
    let arr;
    beforeEach(() => {
      arr = new DSArray(["firstItem", "secondItem"]);
    });
    it("should be able to get at(index)", () => {
      arr.at(0, "firstItem");
    });
    it("should be able to set at(index)", () => {
      expect(arr.ar(1)).toBe("secondItem");
      arr.at(1, 12);
      expect(arr.ar(1)).toBe(12);
    });
    it("should be able to iterate over an array", () => {
      arr = new DSArray([0, 1, 2, 3, 4]);
      arr.iterate((item, index) => {
        expect(item).toBe(index);
      });
    });
  });
  describe("advanced operations", () => {
    let arr;
    beforeEach(() => {
      arr = new DSArray([0, 2]);
    });
    it("should be able to insert(at)", () => {
      expect(arr.at(1)).toBe(2);
      arr.insert(1, 1);
      expect(arr.at(1)).toBe(1);
      expect(arr.at(2)).toBe(2);
    });
  });
});
