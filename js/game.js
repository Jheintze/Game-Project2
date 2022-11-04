
class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImages
		this.playerImage
		this.obstacles = []
		this.Mutti
		this.gameOver
		this.win2
		
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage("../assets/helmholtz.jpg"), x: 0, speed: 5 },
			
		]
		this.gameOver = loadImage("../assets/gameover.jpg")
        this.Mutti = loadImage("../assets/pics/momsticker2.webp")
		this.playerImage = loadImage("../assets/walkingdude2.gif")
		this.win2 = loadImage("../assets/win2.jpg")
		
	}
    draw() {
       clear()
       this.background.draw()
       this.player.draw()
        
       
       
		if (frameCount % 10 === 0) {
			this.obstacles.push(new Obstacle(this.Mutti))
		}

        // Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

        //filter stuff out thats been hit or was out
		this.obstacles = this.obstacles.filter(obstacle => {
			

			if (obstacle.collision(this.player)) {
				return false
			    
			} else {
				return true
				this.lives--
				document.querySelector("span").innerText = this.lives
			}
		})
       if (this.obstacles.length > 100){
			//textSize(100)
			//fill("red")
			// rect(0,0,width,height)
			//text("YOU WIN", 500, 700)
			image(game.win2, 0, 0, width, height)
			noLoop()

          // console.log("WINNER WINNER CHICKEN DINNER")
       }
}
}

//player.score--
//this.lives--
//document.querySelector("h2").innerText = this.lives






















