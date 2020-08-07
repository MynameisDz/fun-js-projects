function formatCurrency(value) {
	value = Math.ceil(value);
	value = value.toFixed(2);
	/*
	 *After running toFixed() method, 'value' variable is a string
	 */
	return "$" + value;
}

function update() {
	let $bill = Number(document.getElementById("yourBill").value);
	let $tipPercent = document.querySelector("#tipInput").value;
	let $people = document.querySelector("#splitInput").value;

	let tipValue = $bill * ($tipPercent / 100);
	let total = $bill + tipValue;
	let tipEach = tipValue / $people;
	let billEach = $bill / $people;

	document.querySelector("#tipPercent").innerHTML = $tipPercent + "%";
	document.querySelector("#people").innerHTML = $people + " persons";

	document.querySelector("#tipValue").innerHTML = formatCurrency(tipValue);
	document.querySelector("#totalWithTip").innerHTML = formatCurrency(total);
	document.querySelector("#tipEach").innerHTML = formatCurrency(tipEach);
	document.querySelector("#billEach").innerHTML = formatCurrency(billEach);
}

/**
 ** The element assigned event (input) will take the changes and invoke function update()
 */

let $container = document.getElementById("container");
$container.addEventListener("input", update);
