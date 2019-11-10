const {createGrid} = require('./grid-factory');


describe('grid initialization', () => {
    it('should initialize a grid with exact number of rows and columns', () => {
        const expectedNumOfRows = 6;
        const expectedNumberOfColumns = 8;

        const grid = createGrid(expectedNumOfRows, expectedNumberOfColumns);

        expect(grid.length).toEqual(expectedNumOfRows);
        expect(grid[0].length).toEqual(expectedNumberOfColumns);
    });
    it('draws grid borders', () => {
        const rows = 6;
        const columns = 10;

        const grid = createGrid(rows, columns);

        for (let column = 0; column < columns; column++) {
            expect(grid[0][column]).toEqual('-');
            expect(grid[rows - 1][column]).toEqual('-');
        }

        for (let row = 1; row < rows - 1; row++) {
            expect(grid[row][0]).toEqual('|');
            expect(grid[row][columns - 1]).toEqual('|');
        }
    });
});
