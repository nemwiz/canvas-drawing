const {createCanvas, addCanvasBorders} = require('./canvas-factory');

describe('canvas initialization', () => {
    it('should initialize a canvas with exact number of rows and columns', () => {
        const expectedNumberOfRows = 6;
        const expectedNumberOfColumns = 8;

        const canvas = createCanvas(expectedNumberOfRows, expectedNumberOfColumns);

        expect(canvas.length).toEqual(expectedNumberOfColumns);
        expect(canvas[0].length).toEqual(expectedNumberOfRows);
    });
    it('should throw an error if canvas initialization values are invalid', () => {
        const expectedNumberOfRows = -5;
        const expectedNumberOfColumns = 8;

        expect(() => {
            createCanvas(expectedNumberOfRows, expectedNumberOfColumns);
        }).toThrow();
    });
    it('draws canvas borders', () => {
        const rows = 6;
        const columns = 10;

        const canvas = addCanvasBorders(createCanvas(rows, columns));

        for (let row = 0; row < canvas[0].length; row++) {
            expect(canvas[0][row]).toEqual('-');
            expect(canvas[canvas.length - 1][row]).toEqual('-');
        }

        for (let column = 1; column < canvas.length - 1; column++) {
            expect(canvas[column][0]).toEqual('|');
            expect(canvas[column][canvas[0].length - 1]).toEqual('|');
        }
    });
});
