const key = document.querySelectorAll(".kbd");
let totalSeat =40;
let counter = 0;
let clickButtons =0;
for (const btn of key) {
    let clickCount = 0;
    btn.addEventListener("click",() => {
        if (clickButtons >= 4) {
            alert("You can only select up to 4 seats");
            return;
        }
        if (clickCount >= 1) {
            btn.disabled=true;
            return;
        }

// console.log(btn);
totalSeat--;
document.getElementById('total-seat').innerText=totalSeat;
if (totalSeat === 0) {
    alert("All seats have been booked.")
    
   
}else if(totalSeat < 0){
    alert('Seats are overbooked!')
    
}
btn.style.backgroundColor="#1DD100";



        
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
    // document.getElementById('total-cost').innerText=convertedtotalcost+convert;
    const totalP =convertedtotalcost;
    const finalCost =totalP + convert;
    document.getElementById('total-cost').innerText=finalCost;
    // return finalCost;
    //    

clickButtons++;
clickCount++;






// another section
const applyButton = document.getElementById('apply-button');
// console.log(applyButton);
applyButton.addEventListener('click',() => {
    // console.log("clicked");
    const couponElement = document.getElementById('hs-trailing-button-add-on').value;
    const couponCode =couponElement.split(' ').join('').toUpperCase();
    console.log(couponCode);

  
    if (counter >= 2) {
        if (couponCode == "NEW15") {
            const discountElement = document.getElementById('discount-cost');
            const discounAmount =finalCost * 0.15;
           
            
            discountElement.innerText="Discount Price: " + discounAmount.toFixed(2) + 'tk';


            const afterDiscountPrice = document.getElementById('after-discount');
            afterDiscountPrice.innerText=finalCost - discounAmount.toFixed(2)

            
        }else if(couponCode == "COUPLE20") {
            const discountElement = document.getElementById('discount-cost');
            const discounAmount =finalCost * 0.2;
            
            discountElement.innerText="Discount Price: " + discounAmount.toFixed(2) + "tk";

            const afterDiscountPrice = document.getElementById('after-discount');
            afterDiscountPrice.innerText=finalCost - discounAmount.toFixed(2)

        }else{
            alert('invalid coupon');
        }
        document.getElementById('hs-trailing-button-add-on').style.display = 'none';
    document.getElementById('apply-button').style.display = 'none';
        
    }else{
        alert('At least booking 2 seats')
    }
    
    


});







    });
}

const finalShowPic = document.getElementById('model');
finalShowPic.addEventListener('click',() => {
    const buttonCard = document.getElementById('banner-card').classList;
    buttonCard.remove('hidden');
    // console.log(buttonCard);


});


const finalShowPic1 = document.getElementById('banner-card');
finalShowPic.addEventListener('click',() => {
    const buttonCard = document.getElementById('main-div').classList;
    buttonCard.add('hidden');
    // console.log(buttonCard);


});
const finalShowPic2 = document.getElementById('continue-id');
finalShowPic.addEventListener('click',() => {
    const buttonCard = document.getElementById('continue-id').classList;
    buttonCard.remove('hidden');
    // console.log(buttonCard);


});
