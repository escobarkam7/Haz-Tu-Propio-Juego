class Game{
    constructor (){

    }

    getGameState(){
        var gameStateUpdate = database.ref(gameStateUpdateRef);
            gameStateUpdate.on ("value", (estado)=>{
                state = estado.val();
            })
    }

    update (state){
        var gameStateUpdateRef = database.ref("gameStateUpdate");
        gameStateUpdateRef.update ({
            state: gameState
        })
    }

    async start(){
        if (gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");

            if (playerCountRef.exist()){
                var playerCount = playerCountRef.val();
                player.getCount();

            }

            form = new Form();
            form.display();
        }

        player1 = createSprite(200, 500);  
        player1.addImage(PouNormal);

        player2 = createSprite(200, 500);  
        player2.addImage(PouNormal);

        players = [player1, player2];

    }

    play(){
        form.hide();

        player.getPlayerInfo();//distance, name, 
        player.getPlayerRank();

        Image(back_img, 500, 300, 1000, 600);

        x = 100;
        y = 200;
        index = 0;

        drawSprites();

        for(var i in players){  //por cada i(jugador) en players
            index += 1;
            x = 500 - players[i].distance;
            y = 500;

            players [i -1].x = x;
            players [i -1].y = y;

            if (index === players.index){
                fill ("white"); 
                textSize(30); 
                text(players[i].name, x-25, y+25);
            }

            fill ("pink");
            textSize(40);
            text(players[i].score, x-35, y+35);
        }

        if (player[i].score >= 5){
            gameState = 2;
            player.rank += 1;
            player.updatePlayerRank(player.rank);
            update();
            showRank();
        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null){
            this.distance += 10;
            update();
        }

        if (keyIsDown(LEFT_ARROW) && player.index !== null){
            this.distance -= 10;
            update();
        }

        //Si cada tantos pixeles divididos en 20 obtienen residuo 0 entonces pasa x cosa 
        if(frameCount % 20 === 0){
            cupcakes = createSprite(random(1, 1000), 0, 70, 70);
            cupcakes.velocityY = 20;

            var randomCase = math.round (random (1, 4))

            switch (randomCase){
                case 1:
                    cupcakes.addImage = (cupcake1_img);
                brake;
                case 2: 
                    cupcakes.addImage = (cupcake2_img);
                brake;
                case 3: 
                    cupcakes.addImage = (cupcake3_img);
                brake;
                case 4:
                    cupcakes.addImage = (cupcake4_img);
                brake;
            }

            cupcakesGroup.add(cupcakes);
        }

        if (player.index !== null){
            for (var i in cupcakesGroup){
                if (cupcakesGroup.get(i).isTouching(players)){
                    cupcakesGroup.get(i).destroy();
                    players.score += 1;
                    update();
                }
            }
        }

       
    }

    showRank (){
        alert("Pou está lleno. FELICIDADES" + player.rank);

    }

    endGame (){
        fill ("pink");
        textSize(60);
        text("El juego ha terminado", 500, 300);
    }


}