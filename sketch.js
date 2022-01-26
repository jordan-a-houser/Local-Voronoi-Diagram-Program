//random number generator
function randgp(max) {return Math.floor(Math.random()*max)}

//all the colors
function randhclr() {
  return "#"+
  ("00"+randgp(255).toString(16)).slice(-2)+
  ("00"+randgp(255).toString(16)).slice(-2)+
  ("00"+randgp(255).toString(16)).slice(-2)
}

function blujwlclr() {
  return '#' +
  ("00"+randgp(100).toString(16)).slice(-2)+
  ("00"+randgp(156).toString(16)).slice(-2)+
  ("00"+(156).toString(16)).slice(-2)
}

function coralclr() {
  return '#' +
  ("00"+(222).toString(16)).slice(-2)+
  ("00"+randgp(256).toString(16)).slice(-2)+
  ("00"+randgp(256).toString(16)).slice(-2)
}

function gemrbclr() {
   return "#"+
  ("00"+randgp(222).toString(16)).slice(-2)+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+randgp(255).toString(16)).slice(-2)
}

function grnbluclr() {
  return "#"+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+randgp(200).toString(16)).slice(-2)+
  ("00"+randgp(200).toString(16)).slice(-2)
}

function seagrnclr() {
  return "#"+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+randgp(256).toString(16)).slice(-2)+
  ("00"+(156).toString(16)).slice(-2)
}

function lghtblu() {
  return "#"+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+randgp(156).toString(16)).slice(-2)+
  ("00"+(156).toString(16)).slice(-2)
}

function drkgrnclr() {
  return "#"+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+randgp(156).toString(16)).slice(-2)+
  ("00"+(256).toString(16)).slice(-2)
}

function orange() {
  return '#' +
  ("00"+(240).toString(16)).slice(-2)+
  ("00"+randgp(230).toString(16)).slice(-2)+
  ("00"+randgp(30).toString(16)).slice(-2)
}

function drkred() {
  return "#"+
  ("00"+randgp(150).toString(16)).slice(-2)+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+(50).toString(16)).slice(-2)
}

function drkblu() {
  return "#"+
  ("00"+(5).toString(16)).slice(-2)+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+randgp(150).toString(16)).slice(-2)
}

function blupurpclr() {
  return "#"+
  ("00"+randgp(222).toString(16)).slice(-2)+
  ("00"+randgp(1).toString(16)).slice(-2)+
  ("00"+(222).toString(16)).slice(-2)
}

//this lets us pick a color
function chooseColor(clr){
  if(clr==1) {return randhclr()}
  if(clr==2) {return blujwlclr()}
  if(clr==3) {return coralclr()}
  if(clr==4) {return gemrbclr()}
  if(clr==5) {return grnbluclr()}
  if(clr==6) {return seagrnclr()}
  if(clr==7) {return lghtblu()}
  if(clr==8) {return drkgrnclr()}
  if(clr==9) {return orange()}
  if(clr==10) {return drkred()}
  if(clr==11) {return drkblu()}
  if(clr==12) {return blupurpclr()}
}

// HF#3 Metrics: Euclidean, Manhattan and Minkovski 3/20/17
function Metric(x,y,mt) {
  if(mt==1) {return Math.sqrt(x*x + y*y)}
  if(mt==2) {return Math.abs(x) + Math.abs(y)}
  if(mt==3) {return(Math.pow(Math.pow(Math.abs(x),3) + Math.pow(Math.abs(y),3),0.33333))}
}
// Plotting Voronoi diagram. aev 3/10/17
function pVoronoiD() {
  var cvs=document.getElementById("cvsId");
  var ctx=cvs.getContext("2d");
  var w=cvs.width, h=cvs.height;
  var x=y=d=dm=j=0, w1=w-2, h1=h-2;
  var n=document.getElementById("sites").value;
  var mt=document.getElementById("mt").value;
  var clr=document.getElementById("clr").value;
  var sym=document.getElementById("sym").value;
  var X=new Array(n), Y=new Array(n), C=new Array(n), K=new Array(n); //making a new color matrix
  ctx.fillStyle="white"; ctx.fillRect(0,0,w,h);

  //p1  (o)
if(sym==1){
  for(var i=0; i<n; i++) {
   X[i]=randgp(w1/4); Y[i]=randgp(h1/2); C[i]=chooseColor(clr); 
  }

  for(y=0; y<321; y++) {
    for(x=0; x<161; x++) {
      dm=Metric(h/2,w/4,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i

 //P1
ctx.fillStyle=C[j]; 
  //TOP LEFT Quadrant
      ctx.fillRect(x,y,1,1) //
      ctx.fillRect(w/4+x,y,1,1)
      
  //top right
      ctx.fillRect(w/2+x,y,1,1)
      ctx.fillRect(3*w/4+x,y,1,1)
  //bottom left
      ctx.fillRect(x,y+h/2,1,1) 
      ctx.fillRect(w/4+x,y+h/2,1,1)
  //bottom right
      ctx.fillRect(w/2+x,y+h/2,1,1)
      ctx.fillRect(3*w/4+x,y+h/2,1,1)
}
  }
}

//p2  (2222)
if(sym==2){
  for(var i=0; i<n; i++) {
 X[i]=randgp(w1/2); Y[i]=randgp(h1/4); C[i]=chooseColor(clr); 
  }
  //the values for y and x are changed to fit into a rectangle. Each is 160x320 by default.(for the horizontal aligned cells, you'd switch the y and x.)
  for(x=0; x<321; x++) {
    for(y=0; y<161; y++) {
      dm=Metric(h/4,w/2,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i

     //P2
ctx.fillStyle=C[j]; 
//   //TOP LEFT Quadrant
      ctx.fillRect(w/2-x,h/4-y,1,1) //
      ctx.fillRect(w-x,h/4-y,1,1)
      
  // //top right
       ctx.fillRect(x,h/4+y,1,1) 
      ctx.fillRect(w/2+x,h/4+y,1,1)
  // //bottom left
      ctx.fillRect(w/2-x,3*h/4-y,1,1) 
      ctx.fillRect(w-x,3*h/4-y,1,1)
  // //bottom right
      ctx.fillRect(x,3*h/4+y,1,1) 
      ctx.fillRect(w/2+x,3*h/4+y,1,1)
}
  }
}
    
//pm  (**)
if(sym==3){
  for(var i=0; i<n; i++) {
   X[i]=randgp(w1/4); Y[i]=randgp(h1/2); C[i]=chooseColor(clr);
  }
  //the values for y and x are changed to fit into a rectangle. Each is 160x320 by default.(for the horizontal aligned cells, you'd switch the y and x.)
  for(y=0; y<321; y++) {
    for(x=0; x<161; x++) {
      dm=Metric(h/2,w/4,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i

   //PM
ctx.fillStyle=C[j]; 
  //TOP LEFT Quadrant
      ctx.fillRect(x,y,1,1) //
      ctx.fillRect(w/2-x,y,1,1)
      
//   //top right
      ctx.fillRect(w/2+x,y,1,1)
      ctx.fillRect(w-x,y,1,1)
  //bottom left
      ctx.fillRect(x,y+h/2,1,1) 
      ctx.fillRect(w/2-x,y+h/2,1,1)
  //bottom right
      ctx.fillRect(w/2+x,y+h/2,1,1)
      ctx.fillRect(w-x,y+h/2,1,1)
}
  }
}

//pg  (xx)
if(sym==4){
  for(var i=0; i<n; i++) {
   X[i]=randgp(w1/4); Y[i]=randgp(h1/2); C[i]=chooseColor(clr); 
  }
  //the values for y and x are changed to fit into a rectangle. Each is 160x320 by default.(for the horizontal aligned cells, you'd switch the y and x.)
  for(y=0; y<321; y++) {
    for(x=0; x<161; x++) {
      dm=Metric(h/2,w/4,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i

               //PG
ctx.fillStyle=C[j]; 
  //TOP LEFT Quadrant
      ctx.fillRect(x,y,1,1) //
      ctx.fillRect(w/4+x,h/2-y,1,1)
      
//   //top right
      ctx.fillRect(w/2+x,y,1,1)
      ctx.fillRect(3*w/4+x,h/2-y,1,1)
      
  //bottom left
      ctx.fillRect(x,y+h/2,1,1) 
      ctx.fillRect(w/4+x,h-y,1,1)
      
  //bottom right
      ctx.fillRect(w/2+x,y+h/2,1,1)
      ctx.fillRect(3*w/4+x,h-y,1,1)
}
  }
}

//pmm (*2222)
if(sym==5){
  for(var i=0; i<n; i++) {
    X[i]=randgp(w1/4); Y[i]=randgp(h1/8); C[i]=chooseColor(clr); 
  }
  //the values for y and x are changed to fit into a rectangle. Each is 160x80 by default.(for the horizontal aligned cells, you'd switch the y and x.)
  for(x=0; x<161; x++) {
    for(y=0; y<81; y++) {
      dm=Metric(h/8,w/4,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i

       //PMM //these are arranged by row
ctx.fillStyle=C[j]; 
//  //top left 1st row
      ctx.fillRect(x,y,1,1)
      ctx.fillRect(w/2-x,y,1,1)
      
// //top left 2nd row      
      ctx.fillRect(x,h/4-y,1,1) //
      ctx.fillRect(w/2-x,h/4-y,1,1)
            
// //top left 3rd row
       ctx.fillRect(x,h/4+y,1,1) 
      ctx.fillRect(w/2-x,h/4+y,1,1)

// //top left 4th row      
      ctx.fillRect(x,h/2-y,1,1)
      ctx.fillRect(w/2-x,h/2-y,1,1)
      
// //bottom left 1st row
      ctx.fillRect(x,h/2+y,1,1)
      ctx.fillRect(w/2-x,h/2+y,1,1)
      
// //bottom left 2nd row
      ctx.fillRect(x,3*h/4-y,1,1) 
      ctx.fillRect(w/2-x,3*h/4-y,1,1)
      
// //bottom left 3rd row
      ctx.fillRect(x,3*h/4+y,1,1) 
      ctx.fillRect(w/2-x,3*h/4+y,1,1)    
      
// //bottom left 4th row
      ctx.fillRect(x,h-y,1,1)
      ctx.fillRect(w/2-x,h-y,1,1)
      
//🧇🥞🧈🍞🥯//
//  //top right 1st row
      ctx.fillRect(x+w/2,y,1,1)
      ctx.fillRect(w-x,y,1,1)
      
// //top right 2nd row      
      ctx.fillRect(x+w/2,h/4-y,1,1) //
      ctx.fillRect(w-x,h/4-y,1,1)
            
// //top right 3rd row
       ctx.fillRect(x+w/2,h/4+y,1,1) 
      ctx.fillRect(w-x,h/4+y,1,1)

// //top right 4th row      
      ctx.fillRect(x+w/2,h/2-y,1,1)
      ctx.fillRect(w-x,h/2-y,1,1)
      
// //bottom right 1st row
      ctx.fillRect(x+w/2,h/2+y,1,1)
      ctx.fillRect(w-x,h/2+y,1,1)
      
// //bottom right 2nd row
      ctx.fillRect(x+w/2,3*h/4-y,1,1) 
      ctx.fillRect(w-x,3*h/4-y,1,1)
      
// //bottom right 3rd row
      ctx.fillRect(x+w/2,3*h/4+y,1,1) 
      ctx.fillRect(w-x,3*h/4+y,1,1)    
      
// //bottom right 4th row
      ctx.fillRect(x+w/2,h-y,1,1)
      ctx.fillRect(w-x,h-y,1,1)
}
  }
}

//pmg (22*) 
if(sym==6){
  for(var i=0; i<n; i++) {
    X[i]=randgp(w1/4); Y[i]=randgp(h1/8); C[i]=chooseColor(clr); 
  }
  //the values for y and x are changed to fit into a rectangle. Each is 160x80 by default.(for the horizontal aligned cells, you'd switch the y and x.)
  for(x=0; x<161; x++) {
    for(y=0; y<81; y++) {
      dm=Metric(h/8,w/4,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i

//     //PMG //these are arranged by row
ctx.fillStyle=C[j]; 
// //top left 1st row
      ctx.fillRect(x,y,1,1)
      ctx.fillRect(w/2-x,h/8-y,1,1)
      
//  //top left 2nd row
      ctx.fillRect(x,h/4-y,1,1) //
      ctx.fillRect(w/2-x,h/8+y,1,1)
      
//   // //top left 3rd row
       ctx.fillRect(x,h/4+y,1,1) 
      ctx.fillRect(w/2-x,3*h/8-y,1,1)
      
// //top left 4th row
      ctx.fillRect(x,h/2-y,1,1)
      ctx.fillRect(w/2-x,3*h/8+y,1,1)
      
// //bottom left 1st row
      ctx.fillRect(x,h/2+y,1,1)
      ctx.fillRect(w/2-x,5*h/8-y,1,1)
      
//  //bottom left 2nd row
      ctx.fillRect(x,3*h/4-y,1,1) 
      ctx.fillRect(w/2-x,5*h/8+y,1,1)
      
// //  //bottom left 3rd row
      ctx.fillRect(x,3*h/4+y,1,1) 
      ctx.fillRect(w/2-x,7*h/8-y,1,1)
      
// //bottom left 4th row
      ctx.fillRect(x,h-y,1,1)
      ctx.fillRect(w/2-x,7*h/8+y,1,1)
      
//🥐🧇🥞🧈🍞🥯
      
// //top left 1st row
      ctx.fillRect(w/2+x,y,1,1)
      ctx.fillRect(w-x,h/8-y,1,1)
      
//  //top left 2nd row
      ctx.fillRect(w/2+x,h/4-y,1,1) //
      ctx.fillRect(w-x,h/8+y,1,1)
      
//   // //top left 3rd row
       ctx.fillRect(w/2+x,h/4+y,1,1) 
      ctx.fillRect(w-x,3*h/8-y,1,1)
      
// //top left 4th row
      ctx.fillRect(w/2+x,h/2-y,1,1)
      ctx.fillRect(w-x,3*h/8+y,1,1)
      
// //bottom left 1st row
      ctx.fillRect(w/2+x,h/2+y,1,1)
      ctx.fillRect(w-x,5*h/8-y,1,1)
      
//  //bottom left 2nd row
      ctx.fillRect(w/2+x,3*h/4-y,1,1) 
      ctx.fillRect(w-x,5*h/8+y,1,1)
      
// //  //bottom left 3rd row
      ctx.fillRect(w/2+x,3*h/4+y,1,1) 
      ctx.fillRect(w-x,7*h/8-y,1,1)
      
// //bottom left 4th row
      ctx.fillRect(w/2+x,h-y,1,1)
      ctx.fillRect(w-x,7*h/8+y,1,1)
}
  }
}

//p4  (442)
if(sym==7){
  for(var i=0; i<n; i++) {
    X[i]=randgp(w1); Y[i]=randgp(h1); C[i]=chooseColor(clr); 
  }
  for(y=0; y<641; y++) {
    for(x=0; x<641; x++) {
      dm=Metric(h,w,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i

   //P4
ctx.fillStyle=C[j]; 
  //TOP LEFT Quadrant
      ctx.fillRect(h/4-y/4,x/4,1,1) //top left
      ctx.fillRect((w/2)-x/4,(h/4)-y/4,1,1) //top right 
      ctx.fillRect((h/4)+y/4,(w/2)-x/4,1,1) //bottom right
      ctx.fillRect(x/4,(h/4)+y/4,1,1) //bottom left
      
//     //TOP RIGHT QUADRANT
      ctx.fillRect(3*h/4-y/4,x/4,1,1) //top left
      ctx.fillRect(w-x/4,(h/4)-y/4,1,1) //top right 
      ctx.fillRect((3*h/4)+y/4,w/2-x/4,1,1) //bottom right
      ctx.fillRect(w/2+x/4,(h/4)+y/4,1,1) //bottom leftright 
      
  //    //BOTTOM LEFT QUADRANT
      ctx.fillRect(h/4-y/4,w/2+x/4,1,1) //top left
      ctx.fillRect((w/2)-x/4,(3*h/4)-y/4,1,1) //top right 
      ctx.fillRect((h/4)+y/4,w-x/4,1,1) //bottom right
      ctx.fillRect(x/4,(3*h/4)+y/4,1,1) //bottom left
      
//    //BOTTOM RIGHT QUADRANT
      ctx.fillRect(3*h/4-y/4,w/2+x/4,1,1) //top left
      ctx.fillRect(w-x/4,(3*h/4)-y/4,1,1) //top right 
      ctx.fillRect((3*h/4)+y/4,w-x/4,1,1) //bottom right
      ctx.fillRect((w/2)+x/4,(3*h/4)+y/4,1,1) //bottom left
}
  }
}
  
//p4m (*442)
if(sym==8){
for(var i=0; i<n; i++) {
    X[i]=randgp(w1); Y[i]=randgp(h1); C[i]=chooseColor(clr); 
  }
for(x=0; x<641; x++) {
    for(y=0; y<x; y++) {
      dm=Metric(h,w,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i
      
ctx.fillStyle=C[j]; 

   //top left
      
      ctx.fillRect(x/4,y/4,1,1) //top top left 1 the default
      ctx.fillRect(y/4,x/4,1,1) // bottom top left 2 45deg ref about hyp

      ctx.fillRect(y/4,320-(x/4),1,1) //top bottom left 3 90deg ref about short side
      ctx.fillRect(x/4,320-(y/4),1,1) //bottom bottom left 4 135 deg ref about long side
      
      ctx.fillRect(320-(x/4),320-(y/4),1,1) //bottom bottom right 5 180 deg ref about short side
      ctx.fillRect(320-(y/4),320-(x/4),1,1) //top bottom right 6 225 deg ref about long side
      
      ctx.fillRect(320-(y/4),x/4,1,1) //bottom top right 7 270 deg ref about short side
      ctx.fillRect(320-(x/4),y/4,1,1) //top top right 8 315 deg ref long side
        
//      //bot left
      
      ctx.fillRect((x/4),320+(y/4),1,1) //top top left
      ctx.fillRect((y/4),320+(x/4),1,1) // bottom top left
      
      ctx.fillRect((y/4),640-(x/4),1,1) //top bottom left
      ctx.fillRect((x/4),640-(y/4),1,1) //bottom bottom left
      
      ctx.fillRect(320-(x/4),640-(y/4),1,1) //bottom bottom right
      ctx.fillRect(320-(y/4),640-(x/4),1,1) //top bottom right
      
      ctx.fillRect(320-(y/4),320+(x/4),1,1) //bottom top right
      ctx.fillRect(320-(x/4),320+(y/4),1,1) //top top right

//       //bot right
      
      ctx.fillRect(320+(x/4),320+(y/4),1,1) //top top left
      ctx.fillRect(320+(y/4),320+(x/4),1,1) // bottom top left
      
      ctx.fillRect(320+(y/4),640-(x/4),1,1) //top bottom left
      ctx.fillRect(320+(x/4),640-(y/4),1,1) //bottom bottom left       

      ctx.fillRect(640-(x/4),640-(y/4),1,1) //bottom bottom right 
      ctx.fillRect(640-(y/4),640-(x/4),1,1) //top bottom right
      
      ctx.fillRect(640-(y/4),320+(x/4),1,1) //bottom top right
      ctx.fillRect(640-(x/4),320+(y/4),1,1) //top top right

//  //top right
      
      ctx.fillRect(320+(x/4),(y/4),1,1) //top top left
      ctx.fillRect(320+(y/4),(x/4),1,1) //bottom top left
      
      ctx.fillRect(320+(y/4),320-(x/4),1,1) // top bottom left
      ctx.fillRect(320+(x/4),320-(y/4),1,1) //bottom bottom left
  
      ctx.fillRect(640-(y/4),w/2-(x/4),1,1) //top bottom right
      ctx.fillRect(640-(x/4),320-(y/4),1,1) //bottom bottom right

      ctx.fillRect(640-(x/4),(y/4),1,1) //top top right
      ctx.fillRect(640-(y/4),(x/4),1,1) //bottom top right
    }
     }
    }


//p4g (4*2)
if(sym==9){
 for(var i=0; i<n; i++) {
    X[i]=randgp(w1); Y[i]=randgp(h1); C[i]=chooseColor(clr); 
  }
for(x=0; x<641; x++) {
    for(y=0; y<x; y++) {
      dm=Metric(h,w,mt); j=-1;
      for(var i=0; i<n; i++) {
        d=Metric(X[i]-x,Y[i]-y,mt)
        if(d<dm) {dm=d; j=i;}
      }//fend i
ctx.fillStyle=C[j]; 

      //top left
      ctx.fillRect(x/4,h/4-y/4,1,1) //top left 
      ctx.fillRect(h/4+y/4,x/4,1,1) // top right
      
       ctx.fillRect(w/2-(x/4),h/4+(y/4),1,1) // bot right
      ctx.fillRect(h/4-(y/4),w/2-(x/4),1,1) //bot left
      
       ctx.fillRect(y/4,w/4-(x/4),1,1) //top left ref
       ctx.fillRect(w/4+(x/4),y/4,1,1)// top right ref
     
       ctx.fillRect(h/2-(y/4),w/4+x/4,1,1)//bot right ref
       ctx.fillRect(w/4-x/4,h/2 -(y/4),1,1)//bot left ref
     
    //top right
        ctx.fillRect(w/2+x/4,h/4-y/4,1,1) //top left 
      ctx.fillRect(3*h/4+y/4,x/4,1,1) // top right
      
       ctx.fillRect(w-(x/4),h/4+(y/4),1,1) // bot right
      ctx.fillRect(3*h/4-(y/4),w/2-(x/4),1,1) //bot left
      
       ctx.fillRect(h/2+y/4,w/4-(x/4),1,1) //top left ref
       ctx.fillRect(3*w/4+(x/4),y/4,1,1)// top right ref
     
       ctx.fillRect(h-(y/4),w/4+x/4,1,1)//bot right ref
       ctx.fillRect(3*w/4-x/4,h/2 -(y/4),1,1)//bot left ref
      
    //bottom right
        ctx.fillRect(w/2+x/4,3*h/4-y/4,1,1) //top left 
      ctx.fillRect(3*h/4+y/4,w/2+x/4,1,1) // top right
      
       ctx.fillRect(w-(x/4),3*h/4+(y/4),1,1) // bot right
      ctx.fillRect(3*h/4-(y/4),w-(x/4),1,1) //bot left
      
       ctx.fillRect(h/2+y/4,3*w/4-(x/4),1,1) //top left ref
       ctx.fillRect(3*w/4+(x/4),h/2+y/4,1,1)// top right ref
     
       ctx.fillRect(h-(y/4),3*w/4+x/4,1,1)//bot right ref
       ctx.fillRect(3*w/4-x/4,h -(y/4),1,1)//bot left ref
      
  //bottom left
            ctx.fillRect(x/4,3*h/4-y/4,1,1) //top left 
      ctx.fillRect(h/4+y/4,w/2+x/4,1,1) // top right
      
       ctx.fillRect(w/2-(x/4),3*h/4+(y/4),1,1) // bot right
      ctx.fillRect(h/4-(y/4),w-(x/4),1,1) //bot left
      
       ctx.fillRect(y/4,3*w/4-(x/4),1,1) //top left ref
       ctx.fillRect(w/4+(x/4),h/2+y/4,1,1)// top right ref
     
       ctx.fillRect(h/2-(y/4),3*w/4+x/4,1,1)//bot right ref
       ctx.fillRect(w/4-x/4,h -(y/4),1,1)//bot left ref
      }
}

}
}
