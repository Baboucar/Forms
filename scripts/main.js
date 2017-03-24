$('#new').click(function (e){
  // append a new row of code to the items div
    $('.visually-hidden').append('<div> <div class="form-data"><label for="institution">Institution Name</label><input  name="" id="institution" type="text"></div> <div class="form-data"><label for="from">From </label><input  name="" id="from" type="text"></div> <div class="form-data"> <label for="to">To</label><input  name="" id="to" type=""></div><button class="delete_btn">Delete </button></div>');
});

 /* document.getElementById("add").disabled = true;*/

//delete button

$("body").on("click", ".delete_btn", function(e){
 $(this).parent("div").remove();
});


//vendor

var count = 0;
$('#add').click(function (e){
  // append a new row of code to the items div
  $("#items").append('<div><input class="" name="input[]" type="file"> <button class="delete">Delete </button></div>');

  if(count == 5){
    $(this).attr("disabled",true);
  }

});

 /* document.getElementById("add").disabled = true;*/
