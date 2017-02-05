/*
 _   _                _
| | | | _____  ____ _| |_ ___  _ __ _   _ ___
| |_| |/ _ \ \/ / _` | __/ _ \| '__| | | / __|
|  _  |  __/>  < (_| | || (_) | |  | |_| \__ \
|_| |_|\___/_/\_\__,_|\__\___/|_|   \__,_|___/
                                  (V)(ᒡ◯ᵔ◯ᒢ)(V)

TWEET - 140 Chars - function setup(){createCanvas(512,512,WEBGL);}function draw(){for(i=0;i<30;i++){fill(i*9);rotateY(frameCount*0.003);torus(i*7,i*6%12,6,6);}}
DISCRIPTION - A 140 char limited program using p5.js displaying rotating hexagonal torus.
To see discoverys over the limitation please uncomment relevant comments.
LICENCE - MIT
*/

function setup()
{
  createCanvas(512,512, WEBGL); // WEBGL required as using 3D primatives.
}

function draw() {
  //background(0); // Does look better with shite on black but not enough chars.
  //f = frameCount; // I used frameCount twice in some variations, used less chars to set as shorter named variable each draw.

  //for loop which limit argument controls how many torus rendered.
  for (i = 1; i < 30; i++){
    /* sets the colour of the hexagon torus according to there radius, ranges
    from black in centre to total white outside because ceil(255/30)=9 */
    fill(i * 9);

    //rotate(f * 0.002, createVector([1],[-1],[-1]));
    /* ^^^ Combines all axis varients of rotate in an attempt
    to create more intracate visuals. UNCOMMENT FOR BEAUTIFUL MINDF**K  */
    rotateY(frameCount * 0.0003); //Rotates the Y plane as a factor of frameCount creating continuous spinning
    // ^^^ The effect of
    console.log(frameCount * 0.0003);

    /*torus takes 4 aruguments, Radius, Tube Radius, XSegments and Y Segments.
    - Radius increases as i increments creating a series of nested torus.
    - Tube Radius increases in same manner but is limited by modulus which makes
    every other torus wider than the other creating a better effect when they seperate
    - Segments numbers are fixed at 6 to stick to the theme of hexagons*/
    torus(i*7, i*6%12 ,6,6);
    //torus(i*7,i*6%12,floor(f/i)%12,6);
    /* ^^ This one is my favriote as shapeschange dynamically from triangle to
    dodecahedron by changing the X seg number (num of sides) depending on width and, to
    make it very dynamic, the framecount.(Only 5 Chars out from inclusion!) */
    //torus(i*7,i*6%12,floor(i%6),6);
    //torus(i*7,i*6%12,floor((i+2)/2),6);
    /* ^^^ 3 variations where the number of segemnts of each increasingly wide polygon torus decreased or
    varied between standard polygons. */
  }
}

/*
THOUGHTS:
- Using multiples of a number (in this case 6) for all variables helps creates
  program logic. e.g. for modules
- Experimented with different shapes at diff radius but preferred effect of
  tesellating hexagons.
- Y axis rotation choosen because I think it acentuates the shape change of the torus
- Has subtle but very atheatically pleasing variations when tweeking the segment
  X and Y arguments of torus()
- Less is sometimes more, using just the hexagons creates a clean intresting image.
- Monochrome makes it easier to take in and visualise the mechanics of the animation.
  Far less straining in the eye
- Default noFill on Torus has new asthtics kinda appeal with vibrant base colours.
- Call special attention to this variation "torus(i*7,i*6%12,floor(f/i)%24,6);"
  which I spent hours on trying to minimise. When coupled with "createVector([1],[-1],[-1])"
  I Loved how its changing shapes mimicked that of electron shells in an atom.
- Following on, if this is combined with another or series of additional rotate
  commands at different speeds before rendering the torus; chaotic double pendulam like behavouir seems to arise.
- Inspired the idea of creating four dimesional shapes in euclidean space, a 3D shape
  chaninging in time but confined by standard euclidean geometry with non of those pesky
  intersecting faces.
*/
