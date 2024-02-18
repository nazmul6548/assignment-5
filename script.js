const key = document.querySelectorAll(".kbd");
let totalSeat =8;
let counter = 0;
for (const btn of key) {
    btn.addEventListener("click",() => {

// console.log(btn);
totalSeat--;
document.getElementById('total-seat').innerText=totalSeat;
if (totalSeat === 0) {
    alert("All seats have been booked.")
    
   
}else if(totalSeat < 0){
    alert('Seats are overbooked!')
    
}


        
        const myinnerText = btn.innerText;
        // btn.addEventListener("click",(e) => {
        //     totalSeat = totalSeat + 1;
        //     document.getElementById('total-seat').innerText=totalSeat;
        // });
        
        const p1 =document.createElement("p")
        const p2 =document.createElement("p")
        const p3 =document.createElement("p")
        const div =document.createElement("p")
        p1.innerText=myinnerText;
        p2.innerText="Economy Class";
        p3.innerText="550";
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        
       const convert =parseInt(p3.innerText)
       

console.log(myinnerText);
        const seatInner = document.getElementById('added-seat');
        console.log(seatInner);
        seatInner.appendChild(div);
        div.classList.add("flex");
        div.classList.add("justify-between")
        div.classList.add("p-5")
        
        counter++;
        document.getElementById('seat').innerText=counter;
        
    const totalcost =document.getElementById('total-cost').innerText;
    const convertedtotalcost =parseInt(totalcost)
    document.getElementById('total-cost').innerText=convertedtotalcost+convert;
    //    



    });
}

// for (const  of object) {
    
// }