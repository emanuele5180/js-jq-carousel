//devo fare in modo che al click sulla freccia destra l'immagine cambi, quindi devo aggiungere e togliere una classe che al click mandi in display none l'immagine corrente e in display block l'immagine successiva.


$(document).ready(function(){

  $(".next").click(function(){
    $(".images img").removeClass("active");
    console.log(".next");
    $(".images img").next("img").addClass("active");
  })

})
