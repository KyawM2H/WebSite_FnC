var i = 0;
var txt = 'Hi there, I created this website to showcase my application for FAC skills bootcamp.';
var speed = 150;

const typingEffect = () =>{
  var timer=setInterval(function(){
    if(i<txt.length){
      document.getElementById("typing_effect").innerHTML += txt.charAt(i);
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}

typingEffect();
