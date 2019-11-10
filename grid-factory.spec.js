const {createGrid, addGridBorders} = require('./grid-factory');


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

        const grid = addGridBorders(createGrid(rows, columns));

        for (let column = 0; column < grid[0].length; column++) {
            expect(grid[0][column]).toEqual('-');
            expect(grid[grid.length - 1][column]).toEqual('-');
        }

        for (let row = 1; row < grid.length - 1; row++) {
            expect(grid[row][0]).toEqual('|');
            expect(grid[row][grid[0].length - 1]).toEqual('|');
        }
    });
});
