// Prevent dropdown menu from closing when click inside the form
$(document).on("click", ".action-buttons", function(e){
	e.stopPropagation();
	location='index1.html'
});
//
var ref=0,sofa_set=0,din_Tab=0,micro_Wave=0,Racks=0,Cooler=0,Box=0,LCD=0,Bicycle=0;
let sum=0;
var days=0;
$(document).ready(function(){
	$('#pricebtn').click(function(){
		ref= parseInt($('#quantity1').val());
		sofa_set= parseInt($('#quantity2').val());
		din_Tab= parseInt($('#quantity3').val());
		micro_Wave= parseInt($('#quantity4').val());
		Racks= parseInt($('#quantity5').val());
		Cooler= parseInt($('#quantity6').val());
		Box= parseInt($('#quantity7').val());     //10
		LCD= parseInt($('#quantity8').val());
		Bicycle= parseInt($('#quantity9').val());
		console.log(ref,sofa_set,din_Tab,micro_Wave,Racks,Cooler,Box,LCD,Bicycle)
		// Main code almost done now only total price calculation is left.
		//console.log(sum)
		sum=(ref+sofa_set+din_Tab+micro_Wave+Racks+Cooler+LCD+Bicycle)*5+Box*2;
		var t=parseInt($('#selection1').find(":selected").val())
		$('h4').text(`${sum*t} Rs`);
		//$('#chkprice').text(sum*t);
		//console.log(sum*t)
	})
})

//  $('#pricebtn').click(function(){
//     $('.').html('Here is div content');
//   })