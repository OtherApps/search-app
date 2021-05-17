const  ShowCount = (props) => {


function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}



var my_months= new Array('AVIV','ZIV','SIVAN');




var d = new Date();

var start_of_year = 4;
var start_month = 4; 
var start_day=14 ;
var number_of_days_in_month = daysInMonth(4,2021)-start_day; 




var current_Month=d.getMonth();
var current_day=d.getDate(); 
var my_date ; 



my_date= "<br>"+my_months[0]+" " + ((number_of_days_in_month + current_day)+1); 



var countDownDate = new Date("June 20, 2021 15:37:25").getTime();
function hideintro(){
	
	document.getElementById("news").style.visibility="hidden"; 
	
	document.getElementById("contenedor").style.display="grid"; 
	
}
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var weeks = Math.ceil(((50-days)-1)/7);
var display_days = (50-days)+1;

var outPut = " Conteo del Ómer<br> Semana # " +  weeks +" <br> Día # "+ display_days+ " " + my_date  + "<br><a onclick='hideintro()' style='font-size:20px' class='button'>Close</a>"   ;




  if (distance < 0) {
   clearInterval(x);
    
  }
}, 1000);

return(
<div>
{outPut}
</div>

)
}

export default ShowCount