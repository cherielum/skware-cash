
$(function() {


	function renderTransactions(listOfTransactions) {

			var transactionList = $('.transactions');
			$('.transaction').remove();

			listOfTransactions.forEach(function(transaction) {
				var transactionDiv = $('<div class = "transaction"></div>');
				transactionDiv.append('<div class = "name">' + transaction.name + '</div>'); 
				transactionDiv.append('<div class = "for">' + transaction.for + '</div>'); 
				transactionDiv.append('<div class = "date">' + transaction.date + '</div>'); 
				transactionDiv.append('<div class = "amount">' + transaction.amount + '</div>'); 

				transactionList.append(transactionDiv);

			
			});
	}

	renderTransactions(fullTransactionData); 

	// Listen for whenever someone types in the textbox. 
	//Hint use .on('input', function() {...}) 
	//when they type, show ONLY the transactions that match their search string
	//HINT use .filter()
	//HINT use your renderTransactions() function as soon as you get the filtered list of transactions
	//HINT .indexOf() call on array or string.


			$(".search-input").on('input', function() {   //listen as ppl type, use .on('input')

				// transactionList.empty(); //to throw away what was there
				// transactionList.append(''); 

				var filteredList = fullTransactionData.filter(function(transaction) {  //transaction represents the four categories we have.
					//return true, if we want to keep this transaction
					//return false, if we do not want to keep it
					var searchString = $('.search-input').val().toLowerCase(); 

					var searchStringIsInName= transaction.name.toLowerCase().indexOf(searchString) > -1; //if it finds, it'll be greater than 0, and return true and print it
					var searchStringIsInFor= transaction.for.toLowerCase().includes(searchString);
					var searchStringIsInDate = transaction.date.indexOf(searchString) >-1 ; 
					var searchStringIsInAmount= transaction.amount.indexOf(searchString) >-1 ; 
					var weWantToKeepThisTransaction = searchStringIsInName ||searchStringIsInFor || searchStringIsInDate || searchStringIsInAmount;


					if(weWantToKeepThisTransaction) {
						return true; 

					} else {
						return false; 
					}

				});    //filter is called on arrays and return a new array
				

				renderTransactions(filteredList);


			});




	})


		
