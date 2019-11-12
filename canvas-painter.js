const {symbols} = require('./constants');

const drawLine = (grid, x1, y1, x2, y2) => {

    // TODO - add error handling for out of bounds parameters

    for (let row = y1 - 1; row <= y2 - 1; row++) {
        for (let column = x1 - 1; column <= x2 - 1; column++) {
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

const targetPointIsValid = (grid, visited, x, y) => {

    if (y < 0) {
        return false;
    }

    if (x < 0) {
        return false;
    }

    if (y > grid.length - 1) {
        return false;
    }

    if (x > grid[0].length - 1) {
        return false;
    }

    if (visited.get(`${x},${y}`)) {
        return false;
    }

    if (grid[y][x] !== symbols.EMPTY) {
        return false;
    }

    grid[y][x] = symbols.FILL;
    visited.set(`${x},${y}`, true);

    return true;
};

const bucketFill = (grid, x, y) => {

    const visitedPoints = new Map();
    const pointsQueue = [];
    pointsQueue.push([x - 1, y - 1]);

    while(pointsQueue.length !== 0) {
        const [pointX, pointY] = pointsQueue.pop();

        if (targetPointIsValid(grid, visitedPoints, pointX, pointY)) {
            pointsQueue.push([pointX, pointY - 1]);
            pointsQueue.push([pointX, pointY + 1]);
            pointsQueue.push([pointX - 1, pointY]);
            pointsQueue.push([pointX + 1, pointY]);
        }
    }

    return grid;
};

module.exports = {
    drawLine: drawLine,
    drawRectangle: drawRectangle,
    bucketFill: bucketFill
};
