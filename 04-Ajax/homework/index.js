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
      var value = $('#input').val();
  
      $.get('http://localhost:5000/amigos/' + value, function(data) {
        $('#amigo').text(data.name);
      });
    });
  
    // Borrar amigo al hacer click en el botón "Delete"
    $('#delete').click(function() {
      var id = $('#inputDelete').val();
  
      $.ajax({
        url: 'http://localhost:5000/amigos/' + id,
        type: 'DELETE',
        success: function() {
          $('#success').text('Amigo borrado correctamente');
        }
      });
    });
  
  
  