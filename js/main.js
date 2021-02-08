// check off specific todo 
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

//Click on X to deleting todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        // remove total li, after fade-out
        $(this).remove();
    });
    //prevent from event bubbling up
    event.stopPropagation();
});

// val() extract the values from input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){ // Enter key = 13
        // grab the new todos from input
        let newTodo = $(this).val();
        // creat e a new li & add to ul
        //.append() takes a string of html
        $("ul").append("<li><span><i class='far fa-trash-alt fa-1.5x'></i></span> " + newTodo + "</li>");
        // after adding todo, remove the old todo value from input section
        $("input[type='text']").val('');
    }
});

// creating todo by plus icon
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});
