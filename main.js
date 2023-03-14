
var canvas=new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.


hole_image_width = 5;
hole_image_height = 5;
ball_x=0;
ball_y=0;
hole_y=400
hole_x=800
function load_img(){
    fabric.Image.fromURL("golf-h.png",function(Img){
        hole_object=Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
       hole_object.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_object);
    });
	new_image();
}

function new_image(){

    fabric.Image.fromURL(getImage,function(Img){
        hole_object=Img;
        hole_object.scaleToWidth(holeImageWidth);
        hole_object.scaleToHeight(holeImageHeight);
        hole_object.set({
            top:ball_Y,
            left:ball_X
        });
        canvas.add(hole_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up(){
		if(ball_Y>=0){
			ball_Y=ball_Y-holeImageHeight;
			console.log("holeImageHeight="+holeImageHeight);
			console.log("When up arrow is pressed,x="+ball_X+" y="+ball_Y);
			canvas.remove(ball_object);
			ball_update();
		}
	}
	function down(){
		if(ball_Y<=500){
			ball_Y=ball_Y+holeImageHeight;
			console.log("holeImageHeight="+holeImageHeight);
			console.log("When down arrow is pressed,x="+ball_X+" y="+ball_Y);
			canvas.remove(ball_object);
			ball_update();
		}
	}
	function left(){
		if(ball_X>0){
			ball_X=ball_X-holeImageWidth;
			console.log("holeImageWidth="+holeImageWidth);
			console.log("When left arrow is pressed,x="+ball_X+" y="+ball_Y);
			canvas.remove(ball_object);
			ball_update();
		}
	}
	function right(){
		if(ball_X<=850){
			ball_X=ball_X+holeImageWidth;
			console.log("holeImageWidth="+holeImageWidth);
			console.log("When right arrow is pressed,x="+ball_X+" y="+ball_Y);
			canvas.remove(ball_object);
			ball_update();
		}
	}
}

