var canvas = new fabric.Canvas('myCanvas')
    
imageHeight = 30
imageWidth = 30

playerX = 10
playerY = 10

playerObject = ""
imageObject = ""

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top:playerX,
            left:playerY
        });
        canvas.add(playerObject)
    })
}

function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        imageObject = Img
        imageObject.scaleToWidth(imageWidth)
        imageObject.scaleToHeight(imageHeight)
        imageObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(imageObject)
    })
}
