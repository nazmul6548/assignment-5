const key = document.querySelectorAll(".kbd");
for (const btn of key) {
    btn.addEventListener("click",() => {
        const myinnerText = btn.innerText;
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

        const seatInner = document.getElementById('added-seat');
        console.log(seatInner);
        seatInner.appendChild(div);
        div.classList.add("flex");
        div.classList.add("justify-between")
        div.classList.add("p-5")
        
    })
}

