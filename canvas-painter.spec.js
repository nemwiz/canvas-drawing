const {symbols} = require('./constants');
const {drawLine, drawRectangle} = require('./canvas-painter');
const {createGrid} = require('./grid-factory');

const getAllPointsFromGrid = (grid) => {
    return grid.flatMap(row => row.filter(point => point === symbols.X));
};

describe('drawing horizontal and vertical lines', () => {
    it('should draw a horizontal line', () => {
        const grid = createGrid(4, 20);

        const gridWithLine = drawLine(grid, 1, 2, 6, 2);

        const points = getAllPointsFromGrid(gridWithLine);
        expect(points.length).toEqual(6);
    });
    it('should draw a vertical line', () => {
        const grid = createGrid(4, 20);

        const gridWithLine = drawLine(grid, 6, 3, 6, 4);

        const points = getAllPointsFromGrid(gridWithLine);
        expect(points.length).toEqual(2);
    });
    it('should draw both horizontal and vertical line', () => {
        const grid = createGrid(4, 20);

        let gridWithLine = drawLine(grid, 1, 2, 6, 2);
        gridWithLine = drawLine(gridWithLine, 6, 3, 6, 4);

        const points = getAllPointsFromGrid(gridWithLine);
        expect(points.length).toEqual(8);
    });
});
describe('rectangle drawing', () => {
    it('should draw a rectangle in the specified area', () => {
        const grid = createGrid(4, 20);

        const gridWithRectangle = drawRectangle(grid, 14, 1, 18, 3);

        const points = getAllPointsFromGrid(gridWithRectangle);
        expect(points.length).toEqual(12);
    });
});