function returnText(){
    let d1 = document.getElementById("day").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;
    // let date = new Date();
    const date = new Date();
    let d2 = date.getDate();
    let m2 = date.getMonth() + 1;
    let y2 = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let year = `${y2-y1-1}`;
    let month = `${12-m1+1}`;
    let day = `${30-d1+14}`;
    if(isNaN(d1)&&isNaN(m1)&&isNaN(y1)){
      alert("Please Enter your dob");
    }
    else {
      document.querySelector(".result").innerHTML="you are "+year+" years "+month+" months and "+day+" days old";
    }
    // alert("you are "+year+" years "+month+" months and "+day+" days old");
}
function clearScreen(){
  document.querySelector(".result").innerHTML="";
}
