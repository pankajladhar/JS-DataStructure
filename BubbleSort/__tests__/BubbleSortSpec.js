import BubbleSort from './../index';

describe("Bubble sort", () => {
    it('should return sorted array', () => {
        expect(BubbleSort([7, 5, 2, 4, 3, 9])).toEqual([2, 4, 5, 3, 7, 9])
    })
})