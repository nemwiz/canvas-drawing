const {createGrid, printGrid} = require('./grid-factory');
const {drawLine} = require('./canvas-painter');

let grid = createGrid(4, 20);

printGrid(grid);
printGrid(drawLine(grid, 1, 2, 6, 2));
printGrid(drawLine(grid, 6, 3, 6, 4));
