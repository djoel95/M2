$('#boton').click(function() {
    // Cuando se hace clic en el botón con el id 'boton'
  
    $.get('http://localhost:5000/amigos/', function(data) {
      // Realizar una solicitud GET a la ruta 'http://localhost:5000/amigos/'
      // Cuando la solicitud se completa satisfactoriamente y se obtiene la respuesta 'data'
  
      var lista = $('#lista');
      // Seleccionar el elemento con el id 'lista' y asignarlo a la variable 'lista'
  
      lista.empty();
      // Vaciar el contenido del elemento 'lista'
  
      data.forEach(function(amigo) {
        // Por cada amigo en 'data'
  
        lista.append('<li>' + amigo.name + '</li>');
        // Agregar un nuevo elemento de lista ('<li>') al final del elemento 'lista'
        // El contenido del elemento de lista será el nombre del amigo ('amigo.name')
      });
    });
  });
  


    // // Mostrar amigos al hacer click en el botón "Ver Amigos"
    // $('#boton').click(function() {
    //   $.get('http://localhost:5000/amigos/', function(data) {
    //     var lista = $('#lista');
    //     lista.empty();
    //     data.forEach(function(amigo) {
    //       lista.append('<li>' + amigo.name + '</li>');
    //     });
    //   });
    // });
  
    // Buscar amigo al hacer click en el botón "Buscar"
    $('#search').click(function() {
        // Cuando se hace clic en el botón con el id 'search'
      
        var value = $('#input').val();
        // Obtener el valor ingresado en el campo de entrada con el id 'input' y asignarlo a la variable 'value'
      
        $.get('http://localhost:5000/amigos/' + value, function(data) {
          // Realizar una solicitud GET a la ruta 'http://localhost:5000/amigos/{value}'
          // Donde '{value}' es el valor ingresado en el campo de entrada
      
          $('#amigo').text(data.name);
          // Establecer el texto del elemento con el id 'amigo' como el nombre del amigo obtenido en la respuesta 'data'
        });
      });
      
      // Borrar amigo al hacer clic en el botón con el id 'delete'
      $('#delete').click(function() {
        var value = $('#inputDelete').val();
        // Obtener el valor ingresado en el campo de entrada con el id 'inputDelete' y asignarlo a la variable 'value'
      
        $.ajax({
          url: 'http://localhost:5000/amigos/' + value,
          // Realizar una solicitud DELETE a la ruta 'http://localhost:5000/amigos/{value}'
          // Donde '{value}' es el valor ingresado en el campo de entrada
      
          type: 'DELETE',
          // Establecer el tipo de solicitud como DELETE
      
          success: function() {
            $('#success').text('Amigo borrado correctamente');
            // Establecer el texto del elemento con el id 'success' como 'Amigo borrado correctamente' cuando la solicitud se complete con éxito
          }
        });
      });
      
  
  
  