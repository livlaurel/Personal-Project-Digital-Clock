function displayTime(){ //function that displays the time
   //create a new date object to get the current time
   var dateTime = new Date(); 
   //get current hour,min,sec
   var hrs = dateTime.getHours();
   var min = dateTime.getMinutes();
   var sec = dateTime.getSeconds();
   //get the element that displays session (AM/PM)
   var session = document.getElementById('session');

   //sets the session
   if(hrs >= 12){
     session.innerHTML = 'PM';
   }else{
     session.innerHTML = 'AM';
   }
   
   //converts to 12 hour format
   if(hrs > 12){
     hrs = hrs - 12;
   }

   //updates the HTML of elements displaying hours,mins,and sec
   document.getElementById('hours').innerHTML = hrs;
   document.getElementById('minutes').innerHTML = min;
   document.getElementById('seconds').innerHTML = sec;
 }
 //call the displayTime function every 10 milliseconds (updating the time)
 setInterval(displayTime, 10);