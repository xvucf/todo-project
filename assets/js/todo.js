//alert("CONNECTED!");
$("ul").on( "click", "li", function(){
    $(this).toggleClass("completed");
})
$("ul").on("click", "span" , function(){
    //li fades out
    $(this).parent().fadeOut(500, function(){
    $(this).remove();
}                            )
    //stop looping
event.stopPropagation();
});

//creating a new todo 
$("input[type='text']").keypress(function(event){
    //check if its enter (13)
    if(event.which === 13){
       //add text val to new todo
        var todoText = $(this).val();
        $("ul").append("<li><span><i class=\"far fa-trash-alt n\"></i></span> " + todoText + "</li>");
        //clear input
        $(this).val("");
    }
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
                
