// UZELVS Shadow Revenge
class Player {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.w = 40;
        this.h = 40;

        this.speed = 4;

        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
    }

    update(Game) {
        if (Game.keys["ArrowRight"]) this.x += this.speed;
        if (Game.keys["ArrowLeft"]) this.x -= this.speed;
        if (Game.keys["ArrowUp"]) this.y -= this.speed;
        if (Game.keys["ArrowDown"]) this.y += this.speed;

        // punch
        if (Game.keys[" "] && this.attackCooldown === 0) {
            this.isAttacking = true;
            this.attackTimer = 10;
            this.attackCooldown = 30;
        }

        if (this.attackTimer > 0) this.attackTimer--;
        else this.isAttacking = false;

        if (this.attackCooldown > 0) this.attackCooldown--;

        // keep inside screen
        this.x = Math.max(0, Math.min(window.innerWidth - this.w, this.x));
        this.y = Math.max(0, Math.min(window.innerHeight - this.h, this.y));
    }

    draw(ctx) {
        // DARK SHADOW PLAYER (NOT WHITE)
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.w, this.h);

        // glowing eyes
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.x + 10, this.y + 10, 5, 5);
        ctx.fillRect(this.x + 25, this.y + 10, 5, 5);

        // punch glow
        if (this.isAttacking) {
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x - 10, this.y - 10, this.w + 20, this.h + 20);
        }
    }
}
