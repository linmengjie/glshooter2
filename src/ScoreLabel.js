gls2.ScoreLabel = tm.createClass({
    superClass: tm.graphics.Canvas,

    gameScene: null,

    init: function(gameScene) {
        this.superInit("#scoreLabel");

        this.gameScene = gameScene;

        this.resize(SC_W, SC_H).fitWindow();

        this.setText("20px Orbitron", "left", "top");
        this.fillStyle = "rgba(255,255,255,0.01)";
    },

    update: function() {
        this.clear();

        this.resetTransform();
        this.fillStyle = "rgba(255,255,255,0.4)";
        this.strokeStyle = "rgba(255,255,255,0.4)";
        this.draw();

        this.fillStyle = "rgba(255,255,255,0.02)";
        this.strokeStyle = "rgba(255,255,255,0.02)";
        for (var i = -2; i <= 2; i++) {
            for (var j = -2; j <= 2; j++) {
                this.setTransform(1.0, 0.0, 0.0, 1.0, i, j);
                this.draw();
            }
        }

        this.context.globalCompositeOperation = "source-over";
        for (var i = 0; i < this.gameScene.zanki; i++) {
            this.drawTexture(tm.asset.AssetManager.get("tex1"), 64*3, 0, 64, 64, 5 + (i*32), 40, 32, 32);
        }
    },

    draw: function() {
        this.context.globalCompositeOperation = "lighter";

        var text;
        this.setText("16px Orbitron", "left", "top");
        var score = (this.gameScene.score + "");
        score.substring(score.indexOf("."), score.length);
        score = score.padding(16, "0");
        text = "";
        for (var i = 0; i < score.length; i += 4) {
            text += score.substring(i, i+4) + " ";
        }
        this.fillText(text, 5, 5);

        this.setText("14px Orbitron", "left", "top");
        score = (~~this.gameScene.baseScore + "").padding(8, "0");
        text = "";
        for (var i = 0; i < score.length; i += 4) {
            text += score.substring(i, i+4) + " ";
        }
        this.fillText(text, 5, 22);

        if (this.gameScene.comboCount > 0) {
            this.setText("bold 40px Orbitron", "left", "top");
            this.strokeText(~~this.gameScene.comboCount + " HIT!!", 10, 85);
        }

    },

});