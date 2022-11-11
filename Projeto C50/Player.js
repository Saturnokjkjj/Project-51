class Player {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.width = 75;
    this.height = 75;

    this = createSprite(this.x, this.y, this.width, this.height);
    this = addAnimation(amogusImg);
    this.scale = 0.1
    }
  }
  
