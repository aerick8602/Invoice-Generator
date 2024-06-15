let tab = document.getElementById("invoice");
let pEL = document.getElementById("sum");

function additem() {
    let newrow = tab.insertRow(-1);
    let c1 = newrow.insertCell(0);
    let c2 = newrow.insertCell(1);
    let c3 = newrow.insertCell(2);
    let c4 = newrow.insertCell(3);

    c1.innerHTML = '<input type="text" autocomplete="on">';
    c2.innerHTML = '<input type="number" class="qt" required oninput="total()">';
    c3.innerHTML = '<input type="number" class="pr" required oninput="total()">';
    c4.innerHTML = '<button class="rem" onclick="deleteRow(this)"><i class="fa fa-trash"></i></button>';
}

function total() {
    let quantities = document.getElementsByClassName("qt");
    let prices = document.getElementsByClassName("pr");
    let ans = 0;
    for (let i = 0; i < quantities.length; i++) {
        ans += quantities[i].value * prices[i].value;
    }
    pEL.innerText = `Total: Rs. ${ans}`;
}

function reset() {
    tab.innerHTML = "";
    pEL.innerText = `Total: Rs.0`;
}

function deleteRow(el) {
    if (confirm("Are you sure you want to delete the row?")) {
        let row = el.parentNode.parentNode;
        row.parentNode.removeChild(row);
        total();
    }
}
