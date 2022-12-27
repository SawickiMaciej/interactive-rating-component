const r1 = document.getElementById("1");
const r2 = document.getElementById("2");
const r3 = document.getElementById("3");
const r4 = document.getElementById("4");
const r5 = document.getElementById("5");

const submitbtn = document.getElementById("submit-button");



const choose1 = () => {
    for(var i = 1; i<=5; i++){

        document.getElementById(i).removeAttribute('style');
    }
    document.getElementById("1").style.backgroundColor = "var(--Light-Grey)";
    document.getElementById("1").style.color = "white";
    userrate = "1";

};

const choose2 = () => {
    for(var i = 1; i<=5; i++){

        document.getElementById(i).removeAttribute('style');
    }
    document.getElementById("2").style.backgroundColor = "var(--Light-Grey)";
    document.getElementById("2").style.color = "white";

    userrate = "2";
};

const choose3 = () => {
    for(var i = 1; i<=5; i++){

        document.getElementById(i).removeAttribute('style');
    }
    document.getElementById("3").style.backgroundColor = "var(--Light-Grey)";
    document.getElementById("3").style.color = "white";
    
    userrate = "3";
};

const choose4 = () => {
    for(var i = 1; i<=5; i++){

        document.getElementById(i).removeAttribute('style');
    }
    document.getElementById("4").style.backgroundColor = "var(--Light-Grey)";
    document.getElementById("4").style.color = "white";
   
    userrate = "4";
};

const choose5 = () => {
    for(var i = 1; i<=5; i++){

        document.getElementById(i).removeAttribute('style');
    }
    document.getElementById("5").style.backgroundColor = "var(--Light-Grey)";
    document.getElementById("5").style.color = "white";
    
    userrate = "5";
};


const thanks = (body) => {

    return `
    <div id="result-content">
        <img src="images/illustration-thank-you.svg" alt="thank you">
        <p class="your-rate">You selected ${body.rate} out of 5</p>
        <h2>Thank you!</h2>
        <p class="desc">We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>



      </div>`
    };







const submit = () =>{
    document.getElementById("box").innerHTML = thanks({
        rate: userrate
    })
}

r1.addEventListener("click", choose1);
r2.addEventListener("click", choose2);
r3.addEventListener("click", choose3);
r4.addEventListener("click", choose4);
r5.addEventListener("click", choose5);
submitbtn.addEventListener("click", submit);

