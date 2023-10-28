const WIDTH = 800;
const HEIGHT = 600;

// Setup Canvas
const content_main = document.getElementsByTagName('main')[0];
const game_canvas = document.createElement("canvas");
game_canvas.width = WIDTH;
game_canvas.height = HEIGHT;
game_canvas.id = "game";
content_main.insertBefore(game_canvas, content_main.firstChild);
const game_ctx = game_canvas.getContext('2d');

// Start Game when page is loaded
window.addEventListener('load', function () {
  const game = new Game(game_ctx);
  let lastTime = 0; // Starting Time
  // Animation Loop
  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    game.update(deltaTime);
    game.draw();
    requestAnimationFrame(animate);
  }
  animate(0)
});

// Setup Game
class InputHandler {
  constructor(game) {
    this.game = game;
    window.addEventListener('keydown', (event) => {
      if (
        (event.key === 'ArrowUp') || (event.key === 'w') ||
        (event.key === 'ArrowLeft') || (event.key === 'a') ||
        (event.key === 'ArrowDown') || (event.key === 's') ||
        (event.key === 'ArrowRight') || (event.key === 'd') ||
        (event.key === 'Escape') || (event.key === ' ')
      ) {
        if (this.game.input.indexOf(event.key) == -1) {
          this.game.input.push(event.key);
        }
        event.preventDefault();
      }
    });
    window.addEventListener('keyup', (event) => {
      if (this.game.input.indexOf(event.key) > -1) {
        this.game.input.splice(this.game.input.indexOf(event.key), 1);
      }
      console.log(this.game.input);
    });
  }
}

class Projectile { }

class Particle { }

class Enemy { }

class Player {
  constructor(game, name, x = 50, y = 50, color = "#cc6600", w = 50, h = 50) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.name = name;
    this.width = w;
    this.height = h;
    this.color = color;
    this.speedY = 0;
    this.speedX = 0;
    this.speedMax = 5;
  }

  update() {
    // Handle Input
    if (this.game.input.indexOf('ArrowUp') > -1 || this.game.input.indexOf('w') > -1) {
      this.speedY = -this.speedMax;
    } else if (this.game.input.indexOf('ArrowDown') > -1 || this.game.input.indexOf('s') > -1) {
      this.speedY = this.speedMax;
    } else {
      this.speedY = 0;
    }
    if (this.game.input.indexOf('ArrowLeft') > -1 || this.game.input.indexOf('a') > -1) {
      this.speedX = -this.speedMax;
    } else if (this.game.input.indexOf('ArrowRight') > -1 || this.game.input.indexOf('d') > -1) {
      this.speedX = this.speedMax;
    } else {
      this.speedX = 0;
    }

    // Move Player
    this.y += this.speedY;
    this.x += this.speedX;

    // Check if player is hitting boundaries
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
      this.speedY = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.speedY = 0;
    }
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
      this.speedX = 0;
    }
    if (this.x < 0) {
      this.x = 0;
      this.speedX = 0;
    }
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Layer { }

class Environment { }

class UI { }

class Game {
  constructor(context, player_name = "Player 1") {
    this.player = new Player(this, player_name);
    this.input_handler = new InputHandler(this);
    this.input = [];
    this.width = WIDTH;
    this.height = HEIGHT;
    this.ctx = context;
    this.update_queue = [];
    this.draw_queue = [];
    this.lastTimestamp = 0

    this.game_over = false;

    this.update_queue.push(this.player);
    this.draw_queue.push(this.player);
  }

  // tick
  update(deltaTime) {
    this.update_queue.forEach((obj) => obj.update());
  }

  draw() {
    game_ctx.clearRect(0, 0, this.width, this.height);
    this.draw_queue.forEach((obj) => obj.draw(this.ctx));
  }
}