const {createGrid, addGridBorders} = require('./grid-factory');

describe('grid initialization', () => {
    it('should initialize a grid with exact number of rows and columns', () => {
        const expectedNumberOfRows = 6;
        const expectedNumberOfColumns = 8;

        const grid = createGrid(expectedNumberOfRows, expectedNumberOfColumns);

        expect(grid.length).toEqual(expectedNumberOfColumns);
        expect(grid[0].length).toEqual(expectedNumberOfRows);
    });
    it('draws grid borders', () => {
        const rows = 6;
        const columns = 10;

        const grid = addGridBorders(createGrid(rows, columns));

        for (let row = 0; row < grid[0].length; row++) {
            expect(grid[0][row]).toEqual('-');
            expect(grid[grid.length - 1][row]).toEqual('-');
        }

        for (let column = 1; column < grid.length - 1; column++) {
            expect(grid[column][0]).toEqual('|');
            expect(grid[column][grid[0].length - 1]).toEqual('|');
        }
    });
});
