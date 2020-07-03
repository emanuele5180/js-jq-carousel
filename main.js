//devo fare in modo che al click sulla freccia destra l'immagine cambi, quindi devo aggiungere e togliere una classe che al click mandi in display none l'immagine corrente e in display block l'immagine successiva.


$(document).ready(function(){

  $(".next").click(function(){
    var immagineAttiva = $(".images img.active");
    var iconaAttiva = $(".nav i.active");
    immagineAttiva.removeClass("active");
    iconaAttiva.removeClass("active");
    console.log(".next");

    if (immagineAttiva.hasClass("last")) {
      $(".images img.first").addClass("active");
      $(".nav i.first").addClass("active");

    }else{
      immagineAttiva.next().addClass("active");
      iconaAttiva.next().addClass("active");
    }


  })

  




})
