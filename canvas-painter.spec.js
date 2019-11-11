const {drawLine} = require('./canvas-painter');
const {createGrid} = require('./grid-factory');

describe('drawing horizontal and vertical lines', () => {

    const getAllPointsFromGrid = (grid) => {
        return grid.flatMap(row => row.filter(point => point === 'x'));
    };

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
