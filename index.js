const readlineSync = require('readline-sync');
const canvasFactory = require('./canvas-factory');
const {drawLine, drawRectangle, bucketFill} = require('./canvas-painter');
const {commandConstants} = require('./constants');

console.log(
    `Command \t\tDescription
C w h           Should create a new canvas of width w and height h.
L x1 y1 x2 y2   Should create a new line from (x1,y1) to (x2,y2). Currently only
                horizontal or vertical lines are supported. Horizontal and vertical lines
                will be drawn using the 'x' character.
R x1 y1 x2 y2   Should create a new rectangle, whose upper left corner is (x1,y1) and
                lower right corner is (x2,y2). Horizontal and vertical lines will be drawn
                using the 'x' character.
B x y c         Should fill the entire area connected to (x,y) with "colour" c. The
                behaviour of this is the same as that of the "bucket fill" tool in paint
                programs.
Q               Should quit the program.`
);

const createCanvas = () => {
    const width = readlineSync.questionInt('Type in canvas width: ');
    const height = readlineSync.questionInt('Type in canvas height: ');

    return canvasFactory.createCanvas(width, height);
};

const drawLineFromInput = (canvas) => {
    canvas = createNewCanvasIfCanvasIsEmpty(canvas);
    const x1 = readlineSync.questionInt('Type in x1 coordinate: ');
    const y1 = readlineSync.questionInt('Type in y1 coordinate: ');
    const x2 = readlineSync.questionInt('Type in x2 coordinate: ');
    const y2 = readlineSync.questionInt('Type in y2 coordinate: ');

    return drawLine(canvas, x1, y1, x2, y2);
};

const drawRectangleFromInput = (canvas) => {
    canvas = createNewCanvasIfCanvasIsEmpty(canvas);
    const x1 = readlineSync.questionInt('Type in x1 coordinate: ');
    const y1 = readlineSync.questionInt('Type in y1 coordinate: ');
    const x2 = readlineSync.questionInt('Type in x2 coordinate: ');
    const y2 = readlineSync.questionInt('Type in y2 coordinate: ');

    return drawRectangle(canvas, x1, y1, x2, y2);
};

const fillBucketFromInput = (canvas) => {
    canvas = createNewCanvasIfCanvasIsEmpty(canvas);

    const x = readlineSync.questionInt('Type in x coordinate: ');
    const y = readlineSync.questionInt('Type in y coordinate: ');
    const color = readlineSync.question('Type in fill color: ');

    return bucketFill(canvas, x, y, color);
};

const createNewCanvasIfCanvasIsEmpty = (canvas) => {
    if (canvas.length !== 0) {
        return canvas;
    } else {
        console.log('You must first create a canvas before drawing!');
        return createCanvas();
    }
};

const processCommand = (command, canvas) => {
    switch (command) {
        case commandConstants.C:
            return createCanvas();
        case commandConstants.L:
            return drawLineFromInput(canvas);
        case commandConstants.R:
            return drawRectangleFromInput(canvas);
        case commandConstants.B:
            return fillBucketFromInput(canvas);
        default:
            return canvas;
    }
};


const start = () => {
    let canvas = [];
    const commands = [commandConstants.C, commandConstants.L, commandConstants.R, commandConstants.B];

    let commandIndex;
    let selectedCommand;

    while (true) {
        commandIndex = readlineSync.keyInSelect(commands, 'Please select a command', {cancel: commandConstants.Q});
        selectedCommand = commands[commandIndex];

        if (selectedCommand === commandConstants.Q || selectedCommand === undefined) {
            break;
        }
        canvas = processCommand(selectedCommand, canvas);
        canvasFactory.printCanvas(canvas);
    }
};

start();