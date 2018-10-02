function preload(){
  // put preload code here
}

function setup() {
  // put setup code here

  background(174);
  colorMode(HSB);

}

var x=20;
var y=60;
var speed=2;

function draw() {
  // put drawing code here
  createCanvas(800,600);
  colorMode(RGB);

  //ellipse
   noStroke();
   fill(0,0,0);
   ellipse(x, y, 70, 70);
   x=x+speed;

 //line
 strokeWeight(1);
 stroke(0,0,0);
 line(230, 38, 123, 21);

 //line2
 strokeWeight(1);
 stroke(0,0,0);
 line(205, 177, 55, 15);

 //line2
 strokeWeight(1);
 stroke(0,0,0);
 line(245, 137, 23, 19);


  //legL
  strokeWeight(1);
  stroke(255,255,255);
   fill(0,0,0);
   rect(386, 303, 10, 247, 30);

   //legR
   strokeWeight(1);
   stroke(255,255,255);
    fill(0,0,0);
    rect(312, 302, 10, 247, 30);

    //handR1
    strokeWeight(1);
    stroke(255,255,255);
     fill(0,0,0);
     rect(402, 110, 8, 112);

     //handR2
     strokeWeight(1);
     stroke(255,255,255);
      fill(0,0,0);
      rect(292, 110, 118, 8);

      //fingerR
      strokeWeight(1);
      stroke(255,255,255);
       fill(0,0,0);
       rect(277, 110, 14, 5);

       //fingerR1
       strokeWeight(1);
       stroke(255,255,255);
        fill(0,0,0);
        rect(271, 110, 5, 2);

        //handL1
        strokeWeight(1);
        stroke(255,255,255);
         fill(0,0,0);
         rect(133, 222, 168, 8);

         //handL2
         strokeWeight(1);
         stroke(255,255,255);
          fill(0,0,0);
          rect(133, 159, 8, 71);

          //fingerL
          strokeWeight(1);
          stroke(255,255,255);
           fill(0,0,0);
           rect(133, 143, 5, 14);

           //fingerL1
           strokeWeight(1);
           stroke(255,255,255);
            fill(0,0,0);
            rect(133, 137, 2, 6);


            //Head
            strokeWeight(1);
            stroke(255,255,255);
             fill(0,0,0);
             rect(330, 166, 41, 41);

             //mouse
             strokeWeight(1);
             stroke(255,255,255);
              fill(0,0,0);
             rect(342, 195, 15, 5);

             //EyeL
             strokeWeight(1);
             stroke(255,255,255);
              fill(0,0,0);
              ellipse(339, 174, 8, 8);

              //EyeR
              strokeWeight(1);
              stroke(255,255,255);
               fill(0,0,0);
               ellipse(356, 174, 8, 8);


               //body

               strokeWeight(1);
               stroke(255,255,255);
                fill(0,0,0);
                rect(302, 206, 100, 100);




   // rectangle
   strokeWeight(12);
   stroke(247, 137, 30);
   noFill()


}
