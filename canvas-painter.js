const {symbols} = require('./constants');

const drawLine = (grid, x1, y1, x2, y2) => {

    for (let row = y1 - 1; row <= y2 - 1; row++) {
        for (let column = x1; column <= x2; column++) {
            grid[row][column] = symbols.X;
        }
    }
    return grid;
};

const drawRectangle = (grid, x1, y1, x2, y2) => {
    grid = drawLine(grid, x1, y1, x2, y1);
    grid = drawLine(grid, x1, y2, x2, y2);
    grid = drawLine(grid, x1, y1, x1, y2);
    grid = drawLine(grid, x2, y1, x2, y2);
    return grid;
};

module.exports = {
    drawLine: drawLine,
    drawRectangle: drawRectangle
};
