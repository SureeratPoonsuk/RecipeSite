function stepDone(element){
	console.log(element); //skriver ut i konsollet// 
	 var myClassList = element.classList;  // hämta en lista med  klasser på element//
	console.log(myClassList);

	

	if(myClassList.contains('step-done')){
		myClassList.remove('step-done');
		 }
else { 
myClassList.add('step-done');

}

 }

 function countAmount() {
 	var qty =document.getElementById('qtySelect').value;
 	console.log(qty); // countAmount viktigt att det är samma bokstäver med kladdkaka eller html//
 

 var myAmountList = document.getElementsByClassName('amount');
 console.log(myAmountList);

 	for (var i = 0; i < myAmountList.length; i++){ 
 	var myAmount = myAmountList[i].dataset.amount;// 0 är starta man starta på 0//
 	console.log(myAmount);

 	var newAmount = myAmount * qty;
 	myAmountList[i].innerHTML = newAmount;

 	}

 }  
                         