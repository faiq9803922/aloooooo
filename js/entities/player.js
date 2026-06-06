// UZELVS Shadow Revenge
class Player {
    constructor() {
        this.x = 100;
        this.y = 300;
        this.speed = 4;
        this.size = 40;
    }

    update(Game) {
        if (Game.keys["ArrowRight"]) this.x += this.speed;
        if (Game.keys["ArrowLeft"]) this.x -= this.speed;
        if (Game.keys["ArrowUp"]) this.y -= this.speed;
        if (Game.keys["ArrowDown"]) this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
