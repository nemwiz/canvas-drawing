const {symbols} = require('./constants');

const isNullOrOverMaxSize = (number) => {
  return number <= 0 || number > 50;
};

const createCanvas = (numOfColumns, numOfRows) => {
    let canvas = [];

    if(isNullOrOverMaxSize(numOfColumns) || isNullOrOverMaxSize(numOfRows)) {
        throw Error('Invalid values for canvas initialization. Max canvas size is 50.')
    }

    for (let row = 0; row < numOfRows; row++) {
        canvas[row] = [];
        for (let column = 0; column < numOfColumns; column++) {
            canvas[row].push(symbols.EMPTY)
        }
    }

    return canvas;
};

const addVerticalBorders = (canvas) => {
    const totalRows = canvas.length - 1;
    const lastColumn = canvas[0].length - 1;

    for (let row = 1; row < totalRows; row++) {
        canvas[row][0] = symbols.VERTICAL_BORDER;
        canvas[row][lastColumn] = symbols.VERTICAL_BORDER;
    }

    return canvas;
};

const addHorizontalBorders = (canvas) => {
    const totalColumns = canvas[0].length;
    const lastRow = canvas.length - 1;
    for (let column = 0; column < totalColumns; column++) {
        canvas[0][column] = symbols.HORIZONTAL_BORDER;
        canvas[lastRow][column] = symbols.HORIZONTAL_BORDER;
    }

    return canvas;
};

const addCanvasBorders = (canvas) => {
    // deep copy array to avoid changing references
    const canvasWithBorders = canvas.map(rowsWithColumns => {
        return [...rowsWithColumns]
    });

    canvasWithBorders.push(canvas[0].map(() => symbols.EMPTY));
    canvasWithBorders.unshift(canvas[0].map(() => symbols.EMPTY));

    for (let row = 0; row < canvasWithBorders.length; row++) {
        canvasWithBorders[row].push(symbols.EMPTY);
        canvasWithBorders[row].unshift(symbols.EMPTY)
    }

    return addHorizontalBorders(addVerticalBorders(canvasWithBorders));
};

const printCanvas = (canvas) => {

    const canvasWithBorders = addCanvasBorders(canvas);

    for (let row = 0; row < canvasWithBorders.length; row++) {
        let canvas = '';
        for (let column = 0; column < canvasWithBorders[row].length; column++) {
            canvas = canvas + canvasWithBorders[row][column];
        }
        console.log(canvas);
    }
};

module.exports = {
    createCanvas: createCanvas,
    addCanvasBorders: addCanvasBorders,
    printCanvas: printCanvas
};
