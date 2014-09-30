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

