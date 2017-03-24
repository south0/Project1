

x1= 100;
y1 = 100;
x2= 500;
y2 = 250;
x3= 300;
y3 = 500;
x4= 400;
y4 = 400;
x5 = 100;
y5 =400;
x6 = 600;
y6 =100;
x7 = 900;
y7 =100;
x8 = 900;
y8 =500;

// mouse controller
xx = 1;
 yy= 1;

num=.009;



R=0;
G=0;
B=0;
abc= 120;
a = 100;

var song1A;
var song1B;
var song1C;
var song1D;
var song2A;
var song2B;
var song2C;
var song2D;
var song3A;
var song3B;
var song3C;
var song3D;
var song4A;
var song4B;
var song4C;
var song4D;
var song1E;
var song2E;
var song3E;
var song1F;
var song2F;
var song3F;
var song1G;
var song2G;
var song3G;
var song1H;
var song2H;
var song3H;


var vid;



grow1= 0;
grow2= 0;
grow3= 0;
grow4= 0;
grow5= 0;
grow6= 0;
grow7= 0;
grow8= 0;


var isGrowing1=true;
var isGrowing2=true;
var isGrowing3=true;
var isGrowing4=true;
var isGrowing5=true;
var isGrowing6=true;
var isGrowing7=true;
var isGrowing8=true;


///set all variables 

var state = 0;


function preload(){
	song1A = loadSound('music/song1.mp3');
	song1B = loadSound('music/song2.mp3');
	song1C = loadSound('music/song3.mp3');
	song1D = loadSound('music/song4.mp3');
	song2A = loadSound('music/song5.mp3');
	song2B = loadSound('music/song6.mp3');
	song2C = loadSound('music/song7.mp3');
	song2D = loadSound('music/song8.mp3');
	song3A = loadSound('music/song9.mp3');
	song3B = loadSound('music/song10.mp3');
	song3C = loadSound('music/song11.mp3');
	song3D = loadSound('music/song12.mp3');
	song4A = loadSound('music/song14.mp3');
	song4B = loadSound('music/song15.mp3');
	song4C = loadSound('music/song16.mp3');
	song4D= loadSound('music/song17.mp3');
	song1E= loadSound('music/song18.mp3');
	song2E= loadSound('music/song19.mp3');
	song3E= loadSound('music/song20.mp3');
	song1F= loadSound('music/song21.mp3');
	song2F= loadSound('music/song22.mp3');
	song3F= loadSound('music/song23.mp3');
	song1G= loadSound('music/song24.mp3');
	song2G= loadSound('music/song25.mp3');
	song3G= loadSound('music/song26.mp3');
	song1H= loadSound('music/song27.mp3');
	song2H= loadSound('music/song28.mp3');
	song3H= loadSound('music/song29.mp3');


}

function setup() {

createCanvas(windowWidth, windowHeight);


// 
            

}

function draw() {
	
	background(R, G, B, 100);

	
	stroke(0);
	noFill();
	ellipse(x1, y1, grow1, grow1);
	ellipse(x2, y2, grow2, grow2);
	ellipse(x3, y3, grow3, grow3);
	ellipse(x4, y4, grow4, grow4);
	ellipse(x5, y5, grow5, grow5);
	ellipse(x6, y6, grow6, grow6);
	ellipse(x7, y7, grow7, grow7);
	ellipse(x8, y8, grow8, grow8);

	
	

	
	noCursor();
	fill(255);
	noStroke();
	ellipse(xx, yy, 10, 10);

	///checking state 1
	//use dist() to see if mouse is close to x1, y1

	console.log(state);

	

	//if state 1 is true, then call state 1 function
	if(state == 1){
		state1();

	}
	if(state == 2){
		state2();
	}
	if(state == 3){
		state3();
	}

	if(state == 4){
		state4();
	}






	//receives alpha data from the server
	socket.on('alphaD', function(data){
		
		// console.log(data);
		var orientation = data;

		//THIS IS STATE 1
		if(40<=orientation && orientation< 150){ //checking for state 1
			state = 1;
		}

		//STATE 2
		if (150<= orientation && orientation< 240){
			state = 2;
		}

		//STATE 3
		if (240<= orientation && orientation < 330){
			state = 3;
		}

		// STATE 4
	// if (330<= alpha && alpha< 360 ){
 //        state = 4;
     
 //    }
 //    if (alpha> 0 && alpha < 40) {
 //      state = 4;

       
 //    }
	})


	socket.on('button1',function(){
    	console.log('1');
    	xx= xx+.009;
    })
    socket.on('button2',function(){
    	console.log('2');
    	yy= yy+.009;

    })
    socket.on('button3',function(){
    	console.log('3');
    	yy=yy-.009;
    })
    socket.on('button4',function(){
    	console.log('4');
    	xx=xx-.009;
    })

    // if(num>.08){
    // 	console.log('over');
    // }
    // if(num<.08){
    // 	num =.08;
    // }


}

setInterval(function(){ 
	if(grow1<=0){
			this.isGrowing1=true;
		}
		if(grow1>=50){
			this.isGrowing1=false;
		}

		// update the size
		if(this.isGrowing1){
			// increases size by a random size, so stars blink at different rates
			grow1=grow1+1;
		}
		if(!this.isGrowing1){
			// decreases size by a random size, so stars blink at different rates
			grow1=grow1-1;
		}

 }, Math.floor((Math.random() * 100) + 50));
    
    setInterval(function(){ 
	if(grow2<=0){
			this.isGrowing2=true;
		}
		if(grow2>=50){
			this.isGrowing2=false;
		}

		// update the size
		if(this.isGrowing2){
			// increases size by a random size, so stars blink at different rates
			grow2=grow2+1;
		}
		if(!this.isGrowing2){
			// decreases size by a random size, so stars blink at different rates
			grow2=grow2-1;
		}

 }, Math.floor((Math.random() * 100) + 50));

    setInterval(function(){ 
	if(grow3<=0){
			this.isGrowing3=true;
		}
		if(grow3>=50){
			this.isGrowing3=false;
		}

		// update the size
		if(this.isGrowing3){
			// increases size by a random size, so stars blink at different rates
			grow3=grow3+1;
		}
		if(!this.isGrowing3){
			// decreases size by a random size, so stars blink at different rates
			grow3=grow3-1;
		}

 }, Math.floor((Math.random() * 100) + 50));

    setInterval(function(){ 
	if(grow4<=0){
			this.isGrowing4=true;
		}
		if(grow4>=50){
			this.isGrowing4=false;
		}

		// update the size
		if(this.isGrowing4){
			// increases size by a random size, so stars blink at different rates
			grow4=grow4+1;
		}
		if(!this.isGrowing4){
			// decreases size by a random size, so stars blink at different rates
			grow4=grow4-1;
		}

 }, Math.floor((Math.random() * 100) + 50));

    setInterval(function(){ 
	if(grow5<=0){
			this.isGrowing5=true;
		}
		if(grow5>=50){
			this.isGrowing5=false;
		}

		// update the size
		if(this.isGrowing5){
			// increases size by a random size, so stars blink at different rates
			grow5=grow5+1;
		}
		if(!this.isGrowing5){
			// decreases size by a random size, so stars blink at different rates
			grow5=grow5-1;
		}

 }, Math.floor((Math.random() * 100) + 50));

    setInterval(function(){ 
	if(grow6<=0){
			this.isGrowing6=true;
		}
		if(grow6>=50){
			this.isGrowing6=false;
		}

		// update the size
		if(this.isGrowing6){
			// increases size by a random size, so stars blink at different rates
			grow6=grow6+1;
		}
		if(!this.isGrowing6){
			// decreases size by a random size, so stars blink at different rates
			grow6=grow6-1;
		}

 }, Math.floor((Math.random() * 100) + 50));



setInterval(function(){ 
	if(grow7<=0){
			this.isGrowing7=true;
		}
		if(grow7>=50){
			this.isGrowing7=false;
		}

		// update the size
		if(this.isGrowing7){
			// increases size by a random size, so stars blink at different rates
			grow7=grow7+1;
		}
		if(!this.isGrowing7){
			// decreases size by a random size, so stars blink at different rates
			grow7=grow7-1;
		}

 }, Math.floor((Math.random() * 100) + 50));

setInterval(function(){ 
	if(grow8<=0){
			this.isGrowing8=true;
		}
		if(grow8>=50){
			this.isGrowing8=false;
		}

		// update the size
		if(this.isGrowing8){
			// increases size by a random size, so stars blink at different rates
			grow8=grow8+1;
		}
		if(!this.isGrowing8){
			// decreases size by a random size, so stars blink at different rates
			grow8=grow8-1;
		}

 }, Math.floor((Math.random() * 100) + 50));


function state4(event){
		x1= 50;
y1 = 50;
x2= 500;
y2 = 100;
x3= 600;
y3 = 300;
x4= 500;
y4 = 600;





	R = map(xx, 0, windowWidth, 0, 255);

	G = map(yy, 0, windowHeight, 0, 255);

	var distance1= dist(xx, yy, x1, y1);
	var distance2= dist(xx, yy, x2, y2);
	var distance3= dist(xx, yy, x3, y3);
	var distance4= dist(xx, yy, x4, y4);

	if(distance1 < 50){

	

if(!song4A.isPlaying()){
		song4A.play();}
 }else{
 	song4A.pause();
 	
 }

 if(distance2 < 50){

	

if(!song4B.isPlaying()){
		song4B.play();}
 }else{
 	song4B.pause();
 	
 }

 if(distance3 < 50){

	

if(!song4C.isPlaying()){
		song4C.play();}
 }else{
 	song4C.pause();
 	
 }

 if(distance4 < 50){

	

if(!song4D.isPlaying()){
		song4D.play();}
 }else{
 	song4D.pause();
 	
 }



}



function state3(event){

x1= 50;
y1 = 200;
x2= 1500;
y2 = 200;
x3= 500;
y3 = 350;
x4= 1000;
y4 = 600;
x5 = 100;
y5= 500;
x6= 700;
y6 = 170;
x7= 800;
y7 = 200;
x8 = 470;
y8= 600;


	var distance1= dist(xx, yy, x1, y1);
	var distance2= dist(xx, yy, x2, y2);
	var distance3= dist(xx, yy, x3, y3);
	var distance4= dist(xx, yy, x4, y4);
	var distance5= dist(xx, yy, x5, y5);
	var distance6= dist(xx, yy, x5, y5);
	var distance7= dist(xx, yy, x7, y7);
	var distance8= dist(xx, yy, x8, y8);

R = map(yy, 0, windowWidth, 50, 190);

	B = map(yy, 0, windowHeight/2, 30, 100);

	


if(distance1 < 50){

	

if(!song3A.isPlaying()){
		song3A.play();}
 }else{
 	song3A.pause();
 	
 }

 if(distance2 < 50){

	

if(!song3B.isPlaying()){
		song3B.play();}
 }else{
 	song3B.pause();
 	
 }

 if(distance3 < 50){

	

if(!song3C.isPlaying()){
		song3C.play();}
 }else{
 	song3C.pause();
 	
 }

 if(distance4 < 50){


if(!song3D.isPlaying()){
		song3D.play();}
 }else{
 	song3D.pause();
 	
 }
 if(distance5 < 50){

	

if(!song3E.isPlaying()){
		song3E.play();}
 }else{
 	song3E.pause();
 	
 }
 if(distance6 < 50){

	

if(!song3F.isPlaying()){
		song3F.play();}
 }else{
 	song3F.pause();
 	
 }
 if(distance7 < 50){

	

if(!song3G.isPlaying()){
		song3G.play();}
 }else{
 	song3G.pause();
 	
 }
 if(distance8 < 50){

	

if(!song3H.isPlaying()){
		song3H.play();}
 }else{
 	song3H.pause();
 	
 }





}



//blues with green
function state2(event){

x1= 300;
y1 = 50;
x2= 800;
y2 = 600;
x3= 1100;
y3 = 75;
x4= 400;
y4 = 500;
x5 = 1500;
y5= 350;
x6= 650;
y6 = 350;
x7= 120;
y7 = 270;
x8 = 100;
y8= 500;



	var distance1= dist(xx, yy, x1, y1);
	var distance2= dist(xx, yy, x2, y2);
	var distance3= dist(xx, yy, x3, y3);
	var distance4= dist(xx, yy, x4, y4);
	var distance5= dist(xx, yy, x5, y5);
	var distance6= dist(xx, yy, x6, y6);
	var distance7= dist(xx, yy, x7, y7);
	var distance8= dist(xx, yy, x8, y8);

B = map(xx, 0, windowWidth, 80, 255);

	G = map(yy, 0, windowHeight, 60, 100);



if(distance1 < 50){

	

if(!song2A.isPlaying()){
		song2A.play();}
 }else{
 	song2A.pause();
 	
 }

 if(distance2 < 50){

	

if(!song2B.isPlaying()){
		song2B.play();}
 }else{
 	song2B.pause();
 	
 }

 if(distance3 < 50){

	

if(!song2C.isPlaying()){
		song2C.play();}
 }else{
 	song2C.pause();
 	
 }

 if(distance4 < 50){

	

if(!song2D.isPlaying()){
		song2D.play();}
 }else{
 	song2D.pause();
 	
 }
  if(distance5 < 50){

	

if(!song2E.isPlaying()){
		song2E.play();}
 }else{
 	song2E.pause();
 	
 }
  if(distance6 < 50){

	

if(!song2F.isPlaying()){
		song2F.play();}
 }else{
 	song2F.pause();
 	
 }
 if(distance7 < 50){

	

if(!song2G.isPlaying()){
		song2G.play();}
 }else{
 	song2G.pause();
 	
 }
 if(distance8 < 50){

	

if(!song2H.isPlaying()){
		song2H.play();}
 }else{
 	song2H.pause();
 	
 }



}




//top left x
//state 1 should be mostly reds / some blue
function state1(event){


x1= 100;
y1 = 100;
x2= 1200;
y2 = 50;
x3= 500;
y3 = 125;
x4= 1000;
y4 = 425;
x5 = 75;
y5= 600;
x6= 430;
y6 = 425;
x7= 900;
y7 = 700;
x8 = 200;
y8= 300;




	var distance1= dist(xx, yy, x1, y1);
	var distance2= dist(xx, yy, x2, y2);
	var distance3= dist(xx, yy, x3, y3);
	var distance4= dist(xx, yy, x4, y4);
	var distance5= dist(xx, yy, x5, y5);
	var distance6= dist(xx, yy, x6, y6);
	var distance7= dist(xx, yy, x7, y7);
	var distance8= dist(xx, yy, x8, y8);
	
	

	R = map(xx, 0, windowWidth, 10, 90);

	B = map(yy, 0, windowHeight, 70, 140);



if(distance1 < 50){

	;

if(!song1A.isPlaying()){
		song1A.play();}
 }else{
 	song1A.pause();
 	;
 }

 if(distance2 < 50){

	

if(!song1B.isPlaying()){
		song1B.play();}
 }else{
 	song1B.pause();
 	
 }

 if(distance3 < 50){

	

if(!song1C.isPlaying()){
		song1C.play();}
 }else{
 	song1C.pause();
 	
 }

 if(distance4 < 50){

	

if(!song1D.isPlaying()){
		song1D.play();}
 }else{
 	song1D.pause();
 	
 }
  if(distance5 < 50){

	

if(!song1E.isPlaying()){
		song1E.play();}
 }else{
 	song1E.pause();
 	
 }
   if(distance6 < 50){

	

if(!song1F.isPlaying()){
		song1F.play();}
 }else{
 	song1F.pause();
 	
 }

 if(distance7 < 50){

	

if(!song1G.isPlaying()){
		song1G.play();}
 }else{
 	song1G.pause();
 	
 }
 if(distance8 < 50){

	

if(!song1H.isPlaying()){
		song1H.play();}
 }else{
 	song1H.pause();
 	
 }


 


	

}












