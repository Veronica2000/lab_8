var groceries = [
	{
	name: "banana",
	price: 1
	},
	{
	name: "spinach",
	price: 3
	},
	{
	name: "Lucky Charms",
	price: 4
	},
	{
	name: "carrots",
	price: 1
	},
	{
	name: "Friskies",
	price: 8
	},
	{
	name: "shredded cheddar",
	price: 2
	}
];

var list = document.getElementById('list');
var foodTotal = document.getElementById('foodTotal');
var total = 0;
var button = document.getElementById('button');





groceries.forEach(function(item) {
	var newItem = document.createElement("li");
	newItem.innerText += item.name + " : $" + item.price;
	list.appendChild(newItem);
	total += item.price;
});



button.addEventListener('click', function () {
	var userFood = document.getElementById('food').value;
	var userPrice = document.getElementById('price').value;
    var newUserFood = document.createElement('li');
    newUserFood.innerText += userFood + " : $" + userPrice;
    list.appendChild(newUserFood);
    total += parseFloat(userPrice, 10);
    foodTotal.innerText= ": $" + total;

}); 


/*
function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}*/


