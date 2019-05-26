import P5 from 'p5';

const sketch = p => {
    let canvas;

    p.preload = () => {};

    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {

    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);

    p.keyPressed = () => {};

    p.mouseClicked = () => {
    }

};

new P5(sketch);