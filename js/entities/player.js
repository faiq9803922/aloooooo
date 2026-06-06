// UZELVS Shadow Revenge
class Player {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.w = 40;
        this.h = 40;
        this.speed = 4;
    }

    update(Game) {
        if (Game.keys["ArrowRight"]) this.x += this.speed;
        if (Game.keys["ArrowLeft"]) this.x -= this.speed;
        if (Game.keys["ArrowUp"]) this.y -= this.speed;
        if (Game.keys["ArrowDown"]) this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = "black"; // shadow character
        ctx.fillRect(this.x, this.y, this.w, this.h);

        // glowing eyes effect
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.x + 10, this.y + 10, 5, 5);
        ctx.fillRect(this.x + 25, this.y + 10, 5, 5);
    }
}
