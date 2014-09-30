var salesDetailsleft = $('.salesdetailsleft');
var salesLeft = $('.salesleft');

var salesLeftClickHandler = function (){
	var isActive = salesDetailsleft.attr('data-state');

	if (isActive == 'active') {
	    salesDetailsleft.attr('data-state', 'inactive');
	} else{
		salesDetailsleft.attr('data-state', 'active');
	}	
};


salesLeft.on('click', salesLeftClickHandler);



var salesDetailsright = $('.salesdetailsright');
var salesRight = $('.salesright');

var salesRightClickHandler = function (){
	var isActive = salesDetailsright.attr('data-state');

	if (isActive == 'active') {
	    salesDetailsright.attr('data-state', 'inactive');
	} else{
		salesDetailsright.attr('data-state', 'active');
	}	
};


salesRight.on('click', salesRightClickHandler);
