let date = new Date()
let month = date.getMonth()
let tanggal = date.getDate();
let day = date.getDay();
let year = date.getFullYear();
let hari = "";
let bulan = "";
switch (day){
    case 0:
    hari = "Sunday";
    break;
    case 1:
    hari = "Monday";
    break;
    case 2:
    hari = "Tuesday";
    break;
    case 3:
    hari = "Wednesday";
    break;
    case 4:
    hari = "Thursday";
    break;
    case 5:
    hari = "Friday";
    break;
    case 6:
    hari = "Saturday";
    break;
}
switch (month){
    case 0:
    bulan = "January";
    break;
    case 1:
    bulan = "February";
    break;
    case 2:
    bulan = "March";
    break;
    case 3:
    bulan = "April";
    break;
    case 4:
    bulan = "May";
    break;
    case 5:
    bulan = "June";
    break;
    case 6:
    bulan = "July";
    break;
    case 7:
    bulan = "August";
    break;
    case 8:
    bulan = "September";
    break;
    case 9:
    bulan = "October";
    break;
    case 10:
    bulan = "November";
    break;
    case 11:
    bulan = "Desember";
    break;
}

$("#date").html(hari + ", " + tanggal + " " + bulan + " " + year);

let MyList = document.getElementsByTagName("li");
let i;
for (i = 0; i < MyList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  MyList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newList() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Can't add a blank list!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}