$(document).ready(function(){

// });
$('#btn2').click(function(){
    let inputVal = $('input').val();
    $('input').val("");
    let finalInput = `
        <li><button id="button2">X</button>${inputVal}</li>
    `
    $('section ul').append(finalInput);
// var addSk = $('#btn1').append("tr")
// $('.flex div').append(addSk);
$(".flex").on("click", "button", function() {
    $(this).closest("li").fadeOut(1000, function() {
    $(this).remove();  

});
})
});
})
