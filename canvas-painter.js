const drawLine = (grid, x1, y1, x2, y2) => {

    for (let row = y1 - 1; row <= y2 - 1; row++) {
        for(let column = x1; column <= x2; column++) {
            grid[row][column] = 'x';
        }
    }
    return grid;
};

module.exports = {
    drawLine: drawLine
};
