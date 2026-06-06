// UZELVS Shadow Revenge
const IntroScene = {
    timer: 0,

    init() {
        this.timer = 0;
    },

    update(Game, ctx) {
        this.timer++;

        // auto move to menu after 3 seconds
        if (this.timer > 180) {
            changeScene(MenuScene);
        }
    },

    render(Game, ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        ctx.font = "60px Arial";
        ctx.textAlign = "center";

        ctx.shadowColor = "purple";
        ctx.shadowBlur = 20;

        ctx.fillText("UZELVS", canvas.width / 2, canvas.height / 2);
    }
};
