const {drawLine} = require('./canvas-painter');
const {createGrid} = require('./grid-factory');

describe('drawing horizontal and vertical lines', () => {
   it('should draw a horizontal line', () => {
       const grid = createGrid(4, 20);

       const gridWithLine = drawLine(grid, 1, 2, 6, 2);

       expect(gridWithLine[1][2]).toEqual('x');
   });
});
