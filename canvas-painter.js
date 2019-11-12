const {symbols} = require('./constants');

const getGridBoundary = (grid) => {
  return grid.length + grid[0].length;
};

const isPointInsideGrid = (grid, x, y) => {
    return getGridBoundary(grid) >= x + y;
};

const throwOutOfBoundsError = () => {
    throw Error('Point is out grid bounds');
};

const drawLine = (grid, x1, y1, x2, y2) => {

    if (!isPointInsideGrid(grid, x1, y1) || !isPointInsideGrid(grid, x2, y2)) {
        throwOutOfBoundsError();
    }

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

const targetPointIsValid = (grid, visited, x, y, color) => {

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

    grid[y][x] = color;
    visited.set(`${x},${y}`, true);

    return true;
};

const bucketFill = (grid, x, y, color) => {

    if (!isPointInsideGrid(grid, x, y)) {
        throwOutOfBoundsError();
    }

    const visitedPoints = new Map();
    const pointsQueue = [];
    pointsQueue.push([x - 1, y - 1]);

    while(pointsQueue.length !== 0) {
        const [pointX, pointY] = pointsQueue.pop();

        if (targetPointIsValid(grid, visitedPoints, pointX, pointY, color)) {
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
