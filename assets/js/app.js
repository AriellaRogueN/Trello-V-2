$(document).ready(function () {
/*Al hacer click en el boton añadir una lista, este botón se esconde
y se visualiza un formulario y un botón guardar, los cuales se agregan
a un div vacio*/
  $("#ad-btn").click(function () {

    $("#ad-btn").hide();

    $("#form-1").append("<div id = 'text-box'class = 'form-group'>" +
      "<textarea  id='text' class = 'form-control'type = 'textarea'  placeholder ='Añadir una lista...'</textarea>")

    $("#form-1").append("<button type = 'button' class ='btn btn-success' id ='save-btn' > Guardar")
/*Al hacer click en el botón guardar, se esconde el formulario y el botón*/

    $("#save-btn").click(function () {

      $("#text-box").css("display", "none");

      $("#save-btn").hide();
/*Se agrega un nuevo formulario en un segundo div vacio, que quedará al costado*/
      $("#forms").append("<div id = 'text-box'class = 'form-group'>" +
        "<textarea  id='text' class = 'form-control'type = 'textarea'  placeholder ='Añadir una lista...'</textarea>")
      $("#forms").append("<button type = 'button' class ='btn btn-success' id ='save-btn' > Guardar")
/*se toma el valor del texto escrito por el usuario, el cual se agrega en un panel que a su vez se añade
   en el primer div vacío */
      var texto = $("#text").val();

      $("#form-1").append("<div id='form-one'class = 'panel panel-default'>" +

        "<div class = 'panel-heading'> " +
        "<p>" + texto + " </p>" +
        "</div></div>")
/*Se agrega un botón, añadir tarjeta*/     
      $("#form-1").append("<input class = 'btn btn-default btn-block' type = 'submit' value = 'Añadir tarjeta'>")
/*Al hacer click en el botón añadir tarjeta, este mismo se esconde y se agrega un nuevo 
 formulario y un boton añadir*/
      $(".btn-block").click(function () {
        $(".btn-block").hide();
        $("#form-1").append("<div id = 'text-box'class = 'form-group'>" +
          "<textarea  id='text-2' class = 'form-control'type = 'textarea'</textarea>")
        $("#form-1").append("<button type = 'button' class ='btn btn-success' id ='affix-btn' > Añadir" +
          "<button type='button' class='close' aria-label='Close'><span id='close'aria-hidden='true'>&times;</span></button>")

/*Al hacer click en añadir, se agrega una nueva tarjeta con el  texto ingresado por el usuario*/
        $("#affix-btn").click(function () {
          var texto2 = $("#text-2").val();
          $("#form-1").prepend("<div class = 'panel panel-default' id='new-form'>" +

            "<div class = 'panel-heading'> " +
            "<p>" + texto2 + " </p>" +
            "</div></div>")
/*Se limpia el textArea*/
          $("#text-2").val("");
        })
      })
    })
  })
});

