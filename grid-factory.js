const createGrid = (numOfRows, numOfColumns) => {
    let grid = [];

    for (let row = 0; row < numOfRows; row++) {
        grid[row] = [];
        for (let column = 0; column < numOfColumns; column++) {
            grid[row].push(' ')
        }
    }

    return grid;
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
    const gridWithBorders = grid.map(rowsWithColumns => {
        return [...rowsWithColumns]
    });

    gridWithBorders.push(grid[0].map(() => ' '));
    gridWithBorders.push(grid[0].map(() => ' '));

    for (let row = 0; row < gridWithBorders.length; row++) {
        gridWithBorders[row].push(' ');
        gridWithBorders[row].push(' ')
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
