const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getRandomDouble = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let meters = [];
const speed = 0.05;
const r = 7;
const init_x = getRandomDouble(canvas.width / 3, canvas.width * 2 / 3);
const traceColor = "rgba(250,230,150,0.4)";
let mouse = {
    x: undefined,
    y: undefined
}
const colors = {
    1: "#d7c6aa",
    2: "#ff3d7f",
    3: "#979592",
    4: "#00b2a6",
    5: "#356b8c",
    6: "#ffff00",
    7: "#ffbf00",
    8: "#8c56d3",
    9: "#ff0000",
    10: "#efff00"
};

const colorsSize = Object.keys(colors).length;

const getColor = () => colors[parseInt(getRandomInt(1, colorsSize))];

Array.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        if (this[i] !== null) callback.apply(this[i])
}

const requestAnimationFrame  = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame || 
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
};

const Meteor = function(x, r, c, dest) {
    this.dest = dest;
    this.dead = false;
    this.x = x;
    this.y = r;
    this.r = r;
    this.color = c;
}

Meteor.prototype = {
    draw: function() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color
        ctx.fill();
        ctx.restore();
    },
    move: function() {
        let dx = this.dest.x - this.x;
        let dy = this.dest.y - this.y;
        this.x = this.x + dx * speed;
        this.y = this.y + dy * speed;

        if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1)
            this.dead = true;
        else
            this.draw();
    },
    drawTrace: function() {
        ctx.save();
        ctx.fillStyle = traceColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r + 2 * Math.random(), 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
}

const animate = () => {
    ctx.save();
    ctx.globalAlpha = 0.1;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    meters.forEach(function() {
        if (!this.dead) {
            this.move();
            this.drawTrace();
        }
    });

    requestAnimationFrame(animate);
};

window.onload = () => animate();

window.addEventListener('mousedown',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        var meteor = new Meteor(init_x, r, getColor(), { x: mouse.x, y: mouse.y });
        meters.push(meteor)
    }
)