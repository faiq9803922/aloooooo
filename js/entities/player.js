// UZELVS Shadow Revenge
class Player {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.w = 40;
        this.h = 40;

        this.speed = 4;

        // combat
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
    }

    update(Game) {

        // movement
        if (Game.keys["ArrowRight"]) this.x += this.speed;
        if (Game.keys["ArrowLeft"]) this.x -= this.speed;
        if (Game.keys["ArrowUp"]) this.y -= this.speed;
        if (Game.keys["ArrowDown"]) this.y += this.speed;

        // punch (SPACE)
        if (Game.keys[" "] && this.attackCooldown === 0) {
            this.isAttacking = true;
            this.attackTimer = 10;
            this.attackCooldown = 30;
        }

        // attack timing
        if (this.attackTimer > 0) {
            this.attackTimer--;
        } else {
            this.isAttacking = false;
        }

        if (this.attackCooldown > 0) {
            this.attackCooldown--;
        }

        // hit enemy (simple check)
        if (this.isAttacking && Game.enemies) {
            Game.enemies.forEach(enemy => {
                if (
                    this.x < enemy.x + enemy.w &&
                    this.x + this.w > enemy.x &&
                    this.y < enemy.y + enemy.h &&
                    this.y + this.h > enemy.y
                ) {
                    enemy.hp -= 1;
                }
            });
        }
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.w, this.h);

        // glowing eyes
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.x + 10, this.y + 10, 5, 5);
        ctx.fillRect(this.x + 25, this.y + 10, 5, 5);

        // punch effect
        if (this.isAttacking) {
            ctx.strokeStyle = "white";
            ctx.strokeRect(this.x - 10, this.y - 10, this.w + 20, this.h + 20);
        }
    }
}
