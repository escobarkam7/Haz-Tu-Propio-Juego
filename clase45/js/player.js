class player{

    //Inicialización de las propiedades del objeto
    constructor() {
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.rank = null;
        this.score= 0;
        this.distance= 0;
    }

    updateCount(){
        //Al poner la diagonal nos referimos a que es la carpeta principal
        //El .update significa que se van a agregar cosas 
        database.ref("/")({
            playerCount : count //los valores se llamarán count
        })
    }

    getCount(){
        //se crea carpeta de guardado en la base de datos para guardar la info
        var playerCountRef = database.ref("playerCount");
            //.on es para entrar dentro de la carpeta
            playerCountRef.on("value", (data)=>{
                //obtenemos los datos de la carpeta y 
                playerCount = data.val();
            })
    }


    update(){
        var playerIndex = "player/players" + this.index;
        //Tarea: crear carpeta playerIndex para mandar nombre, distancia y puntuación 
    }



}