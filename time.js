/*referring to a style property using a variable
javascript left border color
getElementsByClassName()
hexagonal css
display of digital clock, some translation:D
*/


function rTime(){
  time();
  setInterval(time, 1000);
}


function time(){
  var date= new Date();
  var time=[];
  var i=0;
  var divCnt=0;
  var cls=[];
  var numDivs=[];
  var look=[];
  look[0]=[1,1,1,1,1,1,0,0];
  look[1]=[0,0,0,1,1,0,0,0];
  look[2]=[1,0,1,1,0,1,1,1];
  look[3]=[1,0,0,1,1,1,1,1];
  look[4]=[0,1,0,1,1,0,1,1];
  look[5]=[1,1,0,0,1,1,1,1];
  look[6]=[1,1,1,0,1,1,1,1];
  look[7]=[1,0,0,1,1,0,0,0];
  look[8]=[1,1,1,1,1,1,1,1];
  look[9]=[1,1,0,1,1,1,1,1];
  
  var classes=["top", "left-t", "left-b",
  			   "right-t", "right-b", "bottom", 
  			   "center-t", "center-b"];
  			   
  var styles=["borderTopColor","borderLeftColor","borderLeftColor",
  			  "borderRightColor","borderRightColor","borderBottomColor",
  			  "borderBottomColor","borderTopColor"]; 
  			  
  time[0]= date.getSeconds()%10;
  time[1]= Math.floor(date.getSeconds()/10) ;
  
  time[2]= date.getMinutes()%10;  
  time[3]= Math.floor(date.getMinutes()/10) ;
  
  time[4]= date.getHours()%10;
  time[5]= Math.floor(date.getHours()/10) ;
  
  			  			  
  			  
  numDivs[0]= document.getElementById("s-ones");
  numDivs[1]= document.getElementById("s-tens");
  numDivs[2]= document.getElementById("m-ones");
  numDivs[3]= document.getElementById("m-tens");
  numDivs[4]= document.getElementById("h-ones");
  numDivs[5]= document.getElementById("h-tens");
  
  for(divCnt=0; divCnt<6; divCnt++){
    for(i=0; i<8; i++){
    cls.push((numDivs[divCnt].getElementsByClassName(classes[i])[0]));
    }
    console.log(cls);
  
    for(i=0; i<8; i++){
  	  if(look[time[divCnt]][i])
        cls[i].style[styles[i]]="black";
      else
        cls[i].style[styles[i]]="transparent";
    }
    
    cls=[];
  }
  
  
  
  
}

