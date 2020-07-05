//devo fare in modo che al click sulla freccia destra l'immagine cambi, quindi devo aggiungere e togliere una classe che al click mandi in display none l'immagine corrente e in display block l'immagine successiva.


$(document).ready(function(){

  $(".next").click(function(){
    nextImg();

  })


  $(".prev").click(function(){
    prevImg();

  })


  $(document).keydown(function(){
    tastiera();

  })

  $(".nav i").click(function(){
    var immagineAttiva = $(".images img.active");
    var iconaAttiva = $(".nav i.active");
    $(this).addClass("active");
    $(iconaAttiva).removeClass("active");



    // if (iconaAttiva) {
    //   $(this).removeClass("active");
    //
    // }
    // if ("!.nav i"){
    //   $(this).addClass("active");
    // }



  })




})


//FUNCTION

function nextImg(){
  var immagineAttiva = $(".images img.active");
  var iconaAttiva = $(".nav i.active");
  immagineAttiva.removeClass("active");
  iconaAttiva.removeClass("active");
  console.log(".next");

  if (immagineAttiva.hasClass("last")) {
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");

  }else{
    imm7agineAttiva.next().addClass("active");
    iconaAttiva.next().addClass("active");
  }

}

function prevImg(){
  var immagineAttiva = $(".images img.active");
  var iconaAttiva = $(".nav i.active");
  immagineAttiva.removeClass("active");
  iconaAttiva.removeClass("active");
  //console.log(".next");

  if (immagineAttiva.hasClass("first")) {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");

  }else{
    immagineAttiva.prev().addClass("active");
    iconaAttiva.prev().addClass("active");
  }

}

function tastiera(){
  var key =event.which;
  if (key == 39 || key == 100) {
    nextImg();

  } else if (key == 37 || key ==97 ) {
    prevImg();
  }
}
