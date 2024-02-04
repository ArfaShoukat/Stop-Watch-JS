var minutes =0
var second =0
var miliseconds=0
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('milisec')
var interval;
 function start(){

    interval=  setInterval(() => {
        miliseconds++
        getmili.innerHTML=miliseconds
      if (miliseconds >=100){
      second++
      getsec.innerHTML=second
      miliseconds=0
      
      }
      else if(second>=60){
          minutes++
          getmin.innerHTML=minutes
          second=0
      
      
      }
       }, 10);
       document.getElementById('start').disabled = true
 }
 function stop(){
    clearInterval(interval)
    document.getElementById('start').disabled = false

 }
 function reset(){
    var minutes =0
var second =0
var miliseconds=0
getmin.innerHTML=minutes
getsec.innerHTML = second
getmili.innerHTML=miliseconds
 }