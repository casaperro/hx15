Parse.initialize('Twcx2DD4Cec21YmzoH9pJxiGMeSKS8aC21terDuB', 'Q6xD57V36getpoL3RvyAiub20TYGZUjGBYXXTxwJ');

// Inicializar variables
var currentUser; // Usuario actual (en localstorage)
var currentUserData; // Datos completos del usuario
$("#perro").hide();

// Evento submit para el login
$('#submitButton').click(function () {
    login();
    return false;
});

// Evento click para el boton salir y deslogueo
$('#salir').click(function () {
    logout();
});

function showPage(name) {
    $('body').children().each(function () {
        $(this).hide();
    });
    $('#' + name).show();
};

// Función de login
function login() {

    // obtener los datos de los campos del formulario
    var usuario = $('#login-username').val();
    var contrasena = $('#login-password').val();

    // llamada a la funcion de parse para login
    Parse.User.logIn(usuario, contrasena, {

        // en caso de que el login con esas credenciales sean correctas
        success: function (user) {
            console.log('login-success');

            // mostrar la ventana correspondiente para usuario autenticado
            showPage('nickname');
            //Hago aparecer el form para elegir personaje y jugar con él
            $('div#form').fadeIn(5000);
            unlockDog(user);
            $("#perro").show();


            





            // limpiar el formulario de login
            $('#login-username').val('');
            $('#login-password').val('');
        },

        // en caso de que el login sea erróneo
        error: function (user, error) {
            console.log('login-error');
            // mostrar popup de error
            alert('Error en inicio de sesión: ' + error.message);
        }
    });
};

// Función logout



function unlockDog(userData) {
    
    //var user = new Parse.User();
    //user.set('id',userData.get('id'));
    var sculpture = new (Parse.Object.extend('Sculture'));
    sculpture.set('id', "Sx1Y7ACXd4");

    var relation = userData.relation("unlockedSculture");
    relation.add(sculpture);
    userData.save();
    
    
}