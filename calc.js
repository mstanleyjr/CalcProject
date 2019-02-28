
function displayResults(event){
  var pp = document.getElementById('perPersonCost').value;
  var count = document.getElementById('count').value;
  var total = pp * count;
  var addition = document.getElementById('results');

  addition.appendChild(document.createElement("table"));
  for(var i = 5; i <= 100; i += 10)
  {
    var newHead = document.createElement("th");
    newHead.textContent = " " + i + "% ";
    newHead.style.border = "thin solid"
    //newhead.style.width = "50";
    addition.appendChild(newHead);
    if(i == 5)
    {
      i = 0;
    }
  }
  var newRow = document.createElement("tr");
  for(var j = 5; j <= 100; j+= 10)
  {
    var newCell = document.createElement("td");
    var n = (j / 100) * (pp * count);
    newCell.textContent = "  " + n.toFixed(2) + "  ";
    newCell.style.border = "thin solid";
    newRow.appendChild(newCell);
    if(j == 5)
    {
      j = 0;
    }
  }
  addition.appendChild(newRow);
  event.preventDefault();
}


document.getElementById('calculate').addEventListener("click", displayResults);
