class ScreenMessages {
  constructor() {}

  showIntro(ctx, game) {
    ctx.rect(0, 0, game.gameWidth, game.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,1";
    ctx.fill();
    ctx.font = "60px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Enter Your Name", game.gameWidth / 2, game.gameHeight / 2);
  }

  showMainMenu(ctx, game) {
    ctx.rect(0, 0, game.gameWidth, game.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`Hi, ${game.player}`, game.gameWidth / 2, 0 + 150);

    const defender = document.getElementById("draymond-defence");
    ctx.drawImage(defender, game.gameWidth / 2 - 75, game.gameHeight / 2, 150, 150);
    ctx.fillText("+100 points", game.gameWidth / 2, game.gameHeight / 2 - 20);

    const charge = document.getElementById("steven-adams-charge");
    ctx.drawImage(charge, game.gameWidth * 0.25 - 75, game.gameHeight / 2, 150, 150);
    ctx.fillText("-1 foul", game.gameWidth * 0.25, game.gameHeight / 2 - 20);

    const ref = document.getElementById("ref");
    ctx.drawImage(ref, game.gameWidth / 1.3 - 75, game.gameHeight / 2, 150, 150);
    ctx.fillText("+1 foul", game.gameWidth / 1.3, game.gameHeight / 2 - 50);
    ctx.fillText("+300 points", game.gameWidth / 1.3, game.gameHeight / 2 - 20);
  }

  showPausedMenu(ctx, game) {
    ctx.rect(0, 0, game.gameWidth, game.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fill();
    ctx.font = "100px Arial";
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";
    ctx.fillText("Time Out", game.gameWidth / 2, game.gameHeight / 2);
  }

  showGameOver(ctx, game) {
    ctx.rect(0, 0, game.gameWidth, game.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();
    ctx.font = "100px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", game.gameWidth / 2, game.gameHeight / 2);
  }

  showScoreAndFouls(ctx, game, score, fouls) {
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, 100, 40);
    ctx.fillText("Fouls Remaining: " + fouls, game.gameWidth - 140, 40);
  }
}
