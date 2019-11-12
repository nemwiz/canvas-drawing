const {createGrid, printGrid} = require('./grid-factory');
const {drawLine, drawRectangle, bucketFill} = require('./canvas-painter');

let grid = createGrid(20, 4);

printGrid(grid);
printGrid(drawLine(grid, 1, 2, 6, 2));
printGrid(drawLine(grid, 6, 3, 6, 4));
printGrid(drawRectangle(grid, 14, 1, 18, 3));
printGrid(bucketFill(grid, 10, 3));