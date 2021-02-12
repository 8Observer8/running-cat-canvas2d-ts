let ctx: CanvasRenderingContext2D;
let spriteSheet: HTMLImageElement;
let sx = 0, sy = 0, sWidth = 512, sHeight = 256; // Source image
let dx = 0, dy = 0, dWidth = 512, dHeight = 256; // Destination canvas
// ctx.drawImage(spriteSheet, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

let frameIndex = 0;
let currentTime, deltaTime;
let lastTime = Date.now();
let animationTime = 0;
const animationSpeed = 100;
const myframes = [
    { x: 0, y: 0 }, { x: sWidth, y: 0 }, { x: sWidth * 2, y: 0 }, { x: sWidth * 3, y: 0 },
    { x: 0, y: sHeight }, { x: sWidth, y: sHeight }, { x: sWidth * 2, y: sHeight },
    { x: sWidth * 3, y: sHeight }
];

function main()
{
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");

    spriteSheet = new Image();
    spriteSheet.onload = () => { mainLoop(); };
    spriteSheet.src = "assets/running-cat.png";
}

function mainLoop()
{
    currentTime = Date.now();
    deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    animationTime += deltaTime;
    if (animationTime >= animationSpeed)
    {
        animationTime = 0;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(spriteSheet, myframes[frameIndex].x,
            myframes[frameIndex].y, sWidth, sHeight, dx, dy, dWidth, dHeight);
        frameIndex++;
        if (frameIndex >= myframes.length) { frameIndex = 0; }
    }
    requestAnimationFrame(mainLoop);
}

// Debug
main();

// Release
// window.onload = () => main();
