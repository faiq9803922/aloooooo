// UZELVS Shadow Revenge
const MenuScene = {
    update(Game, ctx) {
        if (Game.keys["Enter"]) {
            changeScene(Level1Scene);
        }
    },

    render(Game, ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.textAlign = "center";

        ctx.fillText("PRESS ENTER TO START", canvas.width / 2, canvas.height / 2);
    }
};
