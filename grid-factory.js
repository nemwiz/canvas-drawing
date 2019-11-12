const {symbols} = require('./constants');

const createGrid = (numOfColumns, numOfRows) => {
    let grid = [];

    for (let row = 0; row < numOfRows; row++) {
        grid[row] = [];
        for (let column = 0; column < numOfColumns; column++) {
            grid[row].push(symbols.EMPTY)
        }
    }

    return grid;
};

const addVerticalBorders = (grid) => {
    const totalRows = grid.length - 1;
    const lastColumn = grid[0].length - 1;

    for (let row = 1; row < totalRows; row++) {
        grid[row][0] = symbols.VERTICAL_BORDER;
        grid[row][lastColumn] = symbols.VERTICAL_BORDER;
    }

    return grid;
};

const addHorizontalGridBorders = (grid) => {
    const totalColumns = grid[0].length;
    const lastRow = grid.length - 1;
    for (let column = 0; column < totalColumns; column++) {
        grid[0][column] = symbols.HORIZONTAL_BORDER;
        grid[lastRow][column] = symbols.HORIZONTAL_BORDER;
    }

    return grid;
};

const addGridBorders = (grid) => {
    // deep copy array to avoid changing references
    const gridWithBorders = grid.map(rowsWithColumns => {
        return [...rowsWithColumns]
    });

    gridWithBorders.push(grid[0].map(() => symbols.EMPTY));
    gridWithBorders.unshift(grid[0].map(() => symbols.EMPTY));

    for (let row = 0; row < gridWithBorders.length; row++) {
        gridWithBorders[row].push(symbols.EMPTY);
        gridWithBorders[row].unshift(symbols.EMPTY)
    }

    return addHorizontalGridBorders(addVerticalBorders(gridWithBorders));
};

const printGrid = (grid) => {

    const gridWithBorders = addGridBorders(grid);

    for (let row = 0; row < gridWithBorders.length; row++) {
        let canvas = '';
        for (let column = 0; column < gridWithBorders[row].length; column++) {
            canvas = canvas + gridWithBorders[row][column];
        }
        console.log(canvas);
    }
};

module.exports = {
    createGrid: createGrid,
    addGridBorders: addGridBorders,
    printGrid: printGrid
};
