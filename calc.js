//Added to git?
function displayResults(event){
  var parent = document.getElementById("results");
  while(parent.firstChild)
  {
    parent.removeChild(parent.firstChild);
  }


  var gc = document.getElementById('totalGC').value;
  var count = document.getElementById('count').value;
  var addition = document.getElementById('results');
  var totalPrice = document.getElementById('totalCost').value;

  addition.appendChild(document.createElement("table"));
  var percentHeader = document.createElement("th");
  percentHeader.textContent = "Discount %";
  addition.appendChild(percentHeader);

  for(var i = 5; i <= 100; i += 10)
  {
    var newHead = document.createElement("th");
    newHead.textContent = " " + i + "% ";
    addition.appendChild(newHead);
    if(i == 5)
    {
      i = 0;
    }
  }

event.preventDefault();
  function calculateDiscount(){
    var newRow = document.createElement("tr");
    var dVal = document.createElement("td");
    var perPerson = totalPrice / gc;
    dVal.textContent = "Discount Value(" + perPerson + " * Item Count)";
    newRow.appendChild(dVal);
    for(var j = 5; j <= 100; j+= 10)
    {
      var newCell = document.createElement("td");
      var n = (j / 100) * ((totalPrice / gc) * count);
      newCell.textContent = "  " + n.toFixed(2) + "  ";
      newRow.appendChild(newCell);
      if(j == 5)
      {
        j = 0;
      }
    }
    addition.appendChild(newRow);
    var newPrice = document.createElement("tr");
    var npHeader = document.createElement("td");
    npHeader.textContent = "New Cost";
    newPrice.appendChild(npHeader);
    for(var j = 5; j <= 100; j+= 10)
    {
      var newCell = document.createElement("td");
      var n = totalPrice - (j / 100) * ((totalPrice / gc) * count);
      newCell.textContent = "  " + n.toFixed(2) + "  ";
      newPrice.appendChild(newCell);
      if(j == 5)
      {
        j = 0;
      }
    }
    addition.appendChild(newPrice);

  }



    calculateDiscount()



  event.preventDefault();
}


document.getElementById('calculate').addEventListener("click", displayResults);
