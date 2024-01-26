function show_now() { 
    var my_time = new Date();
    var hours = my_time.getHours();
    var msg = "Hello Everyone!";

    if(hours>=5 && hours<12){
        msg = "Good Morning";
    }
    else if(hours>12 && hours<18){
        msg = "Good Afternoon";
    }
    else{
        msg = "Good Evening";
    }
    setTimeout(function(){alert(msg)},1000);
    
}

function changeColor() {
    var myButton = document.getElementById("colorButton");
    var list = ["blue", "green", "red", "purple","aliceblue","aqua"];
    
    // Generate a random index between 0 and 3
    var randomNumber = Math.floor(Math.random() * 6);

    // Set the background color to the color at the random index
    myButton.style.backgroundColor = list[randomNumber];
    myButton.style.color = red;
}

