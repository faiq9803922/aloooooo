// UZELVS Shadow Revenge
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 40;
        this.hp = 5;
    }

    update(Game) {
        if (Game.player) {
            if (Game.player.x < this.x) this.x -= 1;
            if (Game.player.x > this.x) this.x += 1;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.hp > 0 ? "red" : "gray";
        ctx.fillRect(this.x, this.y, this.w, this.h);

        // health bar
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y - 10, this.hp * 8, 5);
    }
}
