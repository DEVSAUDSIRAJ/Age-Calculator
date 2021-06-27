function calculate() {
    var date = document.getElementById("date-field").value;
    var month = document.getElementById("month-field").value;
    var year = document.getElementById("year-field").value;


    if(date>31){
        alert("please put valid date")
     return
    }
    var dob = new Date(`${date}${month}${year}`);
    var now = new Date();
    var differene =now-dob;
   

    var day = Math.ceil((differene)/(1000*60*60*24))
   
    var month = Math.ceil((differene) / (1000 * 60 * 60 * 24 * 30))
   
    var year= Math.ceil((differene) / (1000 * 60 * 60 * 24 *365.25))
  

    document.getElementById("output-day").innerHTML=day
    document.getElementById("output-month").innerHTML=month
    document.getElementById("output-year").innerHTML=year


    
    
}

function clear(){
    document.getElementById("my-form").value.reset();
    
}
