const {symbols} = require('./constants');
const {drawLine, drawRectangle, bucketFill} = require('./canvas-painter');
const {createGrid} = require('./grid-factory');

const getAllSymbolsFromGrid = (grid, symbol) => {
    return grid.flatMap(row => row.filter(point => point === symbol));
};

describe('drawing horizontal and vertical lines', () => {
    it('should draw a horizontal line', () => {
        const grid = createGrid(20, 4);

        const gridWithLine = drawLine(grid, 1, 2, 6, 2);

        const points = getAllSymbolsFromGrid(gridWithLine, symbols.X);
        expect(points.length).toEqual(6);
    });
    it('should draw a vertical line', () => {
        const grid = createGrid(20, 4);

        const gridWithLine = drawLine(grid, 6, 3, 6, 4);

        const points = getAllSymbolsFromGrid(gridWithLine, symbols.X);
        expect(points.length).toEqual(2);
    });
    it('should draw both horizontal and vertical line', () => {
        const grid = createGrid(20, 4);

        let gridWithLine = drawLine(grid, 1, 2, 6, 2);
        gridWithLine = drawLine(gridWithLine, 6, 3, 6, 4);

        const points = getAllSymbolsFromGrid(gridWithLine, symbols.X);
        expect(points.length).toEqual(8);
    });
    it('should throw an error if somebody tries to draw a line which is out of grid bounds', () => {
        const grid = createGrid(20, 4);
        expect(() => {
            drawLine(grid, 22, 3, 6, 4);
        }).toThrow();
    });
});
describe('rectangle drawing', () => {
    it('should draw a rectangle in the specified area', () => {
        const grid = createGrid(20, 4);

        const gridWithRectangle = drawRectangle(grid, 14, 1, 18, 3);

        const points = getAllSymbolsFromGrid(gridWithRectangle, symbols.X);
        expect(points.length).toEqual(12);
    });
});
describe('bucket fill', () => {
    it('should fill only one half of the canvas', () => {
        const grid = createGrid(3, 3);
        const gridWithHorizontalLine = drawLine(grid, 1, 2, 3, 2);

        const filledGrid = bucketFill(gridWithHorizontalLine, 1, 1, symbols.FILL);

        const points = getAllSymbolsFromGrid(filledGrid, symbols.FILL);

        expect(points.length).toEqual(3);
    });
    it('should throw an error if somebody tries to use a non-existing point for bucket fill', () => {
        const grid = createGrid(3, 3);
        expect(() => {
            bucketFill(gridWithHorizontalLine, 5, 5, symbols.FILL);
        }).toThrow();
    });
});