var salesDetails = $('.sales__details');
var Sales = $('.sales');

var salesClickHandler = function (){
	var isActive = salesDetails.attr('data-state');

	if (isActive == 'active') {
	    salesDetails.attr('data-state', 'inactive');
	} else{
		salesDetails.attr('data-state', 'active');
	}	
};


Sales.on('click', salesClickHandler);


