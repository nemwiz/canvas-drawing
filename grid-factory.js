const createGrid = (numOfRows, numOfColumns) => {
    let grid = [];

    for (let row = 0; row < numOfRows; row++) {
        grid[row] = [];
        for (let column = 0; column < numOfColumns; column++) {
            grid[row].push(' ')
        }
    }

    return addGridBorders(grid);
};

const addVerticalBorders = (grid) => {
    const totalRows = grid.length - 1;
    const lastColumn = grid[0].length - 1;

    for (let row = 1; row < totalRows; row++) {
        grid[row][0] = '|';
        grid[row][lastColumn] = '|';
    }

    return grid;
};

const addHorizontalGridBorders = (grid) => {
    const totalColumns = grid[0].length;
    const lastRow = grid.length - 1;
    for (let column = 0; column < totalColumns; column++) {
        grid[0][column] = '-';
        grid[lastRow][column] = '-';
    }

    return grid;
};

const addGridBorders = (grid) => {
    return addHorizontalGridBorders(addVerticalBorders(grid));
};

const printGrid = (grid) => {
    for (let row = 0; row < grid.length; row++) {
        let canvas = '';
        for (let column = 0; column < grid[row].length; column++) {
            canvas = canvas + grid[row][column];
        }
        console.log(canvas);
    }
};

module.exports = {
    createGrid: createGrid,
    printGrid: printGrid
};
