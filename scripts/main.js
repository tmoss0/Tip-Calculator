function mySubmit() {
	var checkCost = document.getElementById('input-check-cost').value;
	var tipPercent = document.getElementById('input-tip-percent').value;
	
	tipPercent = tipPercent * .01;
	checkCost = parseInt(checkCost);

	var total = parseFloat(checkCost + checkCost * tipPercent);
	total = total.toFixed(2);

	document.getElementById('input-tip-total').innerHTML = '$' + (checkCost * tipPercent).toFixed(2);
  	document.getElementById('input-total').innerHTML = '$' + total;	
}
