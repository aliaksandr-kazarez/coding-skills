type AlgorithmDescription = {
    name: string;
    sort: <T extends number>(array: T[]) => T[];
};

const sortingAlgorithms: AlgorithmDescription[] = [
    {
        name: "No Sort",
        sort: (array) => {
            return array;
        },
    },
    {
        name: "Array Sort",
        sort: (array) => {
            return array.sort((a, b) => a - b);
        },
    },
];
describe.each(sortingAlgorithms)("'$name' Sorting Algorithm Test", ({ sort }) => {
    it("should do nothing with sorted array", () => {
        expect(sort([0, 1, 2])).toEqual([0, 1, 2]);
    });

    it("should sort unsorted array", () => {
        expect(sort([2, 1, 0])).toEqual([0, 1, 2]);
    });

    it("should sort negative numbers", () => {
        expect(sort([-2, 1, 0])).toEqual([-2, 0, 1]);
    });

    it("should sort large negative numbers", () => {
        expect(sort([-2564, 154367, -1543])).toEqual([-2564, -1543, 154367]);
    });

    it("should sort duplicate numbers", () => {
        expect(sort([-2564, 154367, -1543, 0, 0, 0])).toEqual([-2564, -1543, 0, 0, 0, 154367]);
    });
});
