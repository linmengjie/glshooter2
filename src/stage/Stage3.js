/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage3 = tm.createClass(
/** @lends {gls2.Stage3.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        //start
        this.seq.add(  0, function() {
            gls2.playBgm("bgm3", true),
            //前進
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 2;
            this.gameScene.ground.tweener.clear().to({speed:5}, 4000, "easeInOutQuad");
        });

        //test
//        this.seq.add(120, "madoka-0");
        this.seq.add(300, "higashi", true); //中ボス
//        this.seq.add(180, "alice");
        this.seq.add(1200, function() {});

        //0%
        this.seq.add(150, "nao2-center");
        this.seq.add( 30, "nao2-left");
        this.seq.add( 30, "nao2-right");
        this.seq.add( 30, "nao2-center");
        this.seq.add( 30, "nao2-left");
        this.seq.add( 30, "nao2-right");
        for (var i = 0; i < 6; i++) {
            this.seq.add( 30, "nao1-center");
            this.seq.add( 30, "nao1-right");
            this.seq.add( 30, "nao1-left");
        }

        //10%
        this.seq.add( 60, function() {
            this.gameScene.ground.tweener.clear().to({speed:7}, 1000, "easeInOutQuad");
        });
        this.seq.add(120, "akane-center");
        this.seq.add( 60, "nao2-center");
        this.seq.add( 60, "nao2-center");

        this.seq.add(120, "akane-right");
        this.seq.add(180, "akane-left");
        this.seq.add(120, "reika1-left");
        this.seq.add(180, "reika1-left");

        this.seq.add(120, "akane-center");
        this.seq.add(180, "akane-left");
        this.seq.add( 60, "reika1-left");
        this.seq.add( 60, "reika1-left");

        this.seq.add(120, "akane-center");
        this.seq.add(120, "akane-right");
        this.seq.add( 60, "reika1-right");
        this.seq.add( 60, "reika1-right");

        //20%
        this.seq.add( 60, function() {
            this.gameScene.ground.tweener.clear().to({speed:3}, 1000, "easeInOutQuad");
        });
        this.seq.add(120, "akane-center");
        this.seq.add( 60, "akane-right");
        this.seq.add( 60, "akane-left");
        for (var i = 0; i < 3; i++) {
            this.seq.add( 60, "nao2-center");
            this.seq.add( 60, "nao2-left");
            this.seq.add( 60, "nao2-right");
        }

        
        //30%
        this.seq.add(60, function() {
            //左へ
            this.gameScene.ground.tweener
                .clear()
                .to({speed:4, direction:0}, 3000, "easeInOutQuad");
        });
        this.seq.add( 60, "miyuki_y1");
        this.seq.add( 60, "reika1-right");
        this.seq.add(180, "reika1-right");
        this.seq.add( 60, "nao2-center");
        this.seq.add( 60, "nao2-left");
        this.seq.add(120, "nao2-center");
        this.seq.add( 60, "nao2-left");
 
        this.seq.add( 60, function() {
            this.gameScene.ground.tweener.clear().to({speed:5}, 3000, "easeInOutQuad");
        });
        this.seq.add(120, "komachi3-0");
        this.seq.add( 60, "reika1-left");
        this.seq.add( 60, "reika1-left");

        this.seq.add( 60, "nao2-center");
        this.seq.add( 60, "nao2-center");

        this.seq.add(120, "madoka-1");
        this.seq.add(120, "reika1-left");
        this.seq.add( 60, "nao2-center");
        this.seq.add( 60, "nao2-left");
        this.seq.add(120, "reika1-left");
        this.seq.add(120, "reika1-left");

        //40%
        this.seq.add(  1, function() {
            //前進
            this.gameScene.ground.tweener
                .clear()
                .to({speed:3, direction:Math.PI*0.5}, 2000, "easeInOutQuad");
        });
        this.seq.add( 60, "komachi3-1");
        this.seq.add(120, "reika1-right");
        this.seq.add( 60, "nao2-center");
        this.seq.add( 60, "nao2-right");

        this.seq.add( 60, "madoka-0");
        this.seq.add(120, "reika1-right");
        this.seq.add(120, "reika1-right");

        //50%
        this.seq.add(  1, function() {
            //前進
            this.gameScene.ground.tweener
                .clear()
                .to({speed:5, direction:Math.PI*0.5}, 3000, "easeInOutQuad");
        });

        //60%
        this.seq.add(300, "higashi", true); //中ボス
        this.seq.add(1200, function() {});

        //70%
        for (var i = 0; i < 4; i++) {
            this.seq.add( 90, "nao1-center");
            this.seq.add( 60, "nao1-right");
            this.seq.add( 60, "nao1-left");
        }
        this.seq.add(  1, function() {
            //前進
            this.gameScene.ground.tweener
                .clear()
                .to({speed:2, direction:Math.PI*0.5}, 3000, "easeInOutQuad");
        });

        this.seq.add(180, "alice");

        for (var i = 0; i < 5; i++) {
            this.seq.add( 60, "nao2-center");
            this.seq.add( 60, "nao2-left");
            this.seq.add( 60, "nao2-right");
        }

        //80%
        this.seq.add(120, "reika1-left");
        this.seq.add(120, "reika1-left");
        this.seq.add( 60, "komachi3-0");
        this.seq.add(120, "akane-right");

        this.seq.add(120, "reika1-left");
        this.seq.add(120, "reika1-left");
        this.seq.add( 60, "madoka-1");
        this.seq.add(120, "akane-left");

        //90%
        this.seq.add(120, "reika1-right");
        this.seq.add(120, "reika1-right");
        this.seq.add(120, "akane-left");
        this.seq.add(180, "komachi3-1");

        this.seq.add(120, "reika1-right");
        this.seq.add(120, "reika1-right");
        this.seq.add(120, "akane-right");
        this.seq.add(180, "madoka-0");

        //100%
        this.seq.add(600, function() {
            this.alartWarning(function() {
                gls2.playBgm("bgmBoss", true);
            });
        });

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({speed:8, direction:Math.PI/2}, 5000, "easeInOutQuad");
        });

        //ステージボス
        this.seq.add(480, "momozono");
    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(30,50%,30%)" },
            { offset:1, color:"hsl(30,50%,15%)" },
        ]).toStyle();
    },

});

})();

//Stage3 使用敵機
//hino
//aoki
//midorikawa
//hoshizora
//yotsuba
//komachi
//higashi
//momozono
