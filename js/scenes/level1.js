// UZELVS Shadow Revenge
const Level1Scene = {
    init() {
        Game.player = new Player();
    },

    update(Game, ctx) {
        Game.player.update(Game);
    },

    render(Game, ctx) {
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        Game.player.draw(ctx);
    }
};
