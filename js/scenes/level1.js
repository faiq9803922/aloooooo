// UZELVS Shadow Revenge
const Level1Scene = {
    init() {
        Game.player = new Player();

        Game.enemies = [
            new Enemy(500, 300),
            new Enemy(700, 350)
        ];
    },

    update(Game, ctx) {
        Game.player.update(Game);
        Game.enemies.forEach(e => e.update(Game));
    },

    render(Game, ctx) {
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        Game.player.draw(ctx);
        Game.enemies.forEach(e => e.draw(ctx));
    }
};
