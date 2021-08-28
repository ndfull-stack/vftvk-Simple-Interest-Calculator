function updateRate() 
{
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}


function compute()
{
 
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const year = new Date().getFullYear()+ parseInt(years);  
    
    //Condition for the Negative, Zero or No Input in Amount field
    if(parseInt(principal) <= 0 || !principal){
        alert("Enter a positive number");
        document.getElementById("principal").focus();  // Focus on Amount field 
    }
    else 
    document.getElementById("result").innerHTML= "\<br>If you deposit $<mark>" +principal+"</mark>,\<br\>at an interest rate of <mark>" + rate +"%</mark>\<br\> You will receive an amount of <mark>$" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";
}
        