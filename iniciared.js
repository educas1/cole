var arrayfirecanes=[];
var cambiosdecanalesfire=0;
var arrarycanales=[];
var alumnonombre="";
var alumnopass="";
var alumnopregunta="";
var arrayfire=[];
var arrayestudiantesuser=[];

$(document).ready(function(){
 
    inicifireabse();

    
      $('#formID').on('submit', function (event) {
        event.preventDefault();
        octenerdatosregis();
        
});

});

function inicifireabse(){

    var firebaseConfig = {
      apiKey: "AIzaSyCZf9BNc5BZlbWvO61CgMJFSjC9aoOo44E",
      authDomain: "mensajesclases.firebaseapp.com",
      databaseURL: "https://mensajesclases.firebaseio.com",
      projectId: "mensajesclases",
      storageBucket: "mensajesclases.appspot.com",
      messagingSenderId: "831115193606",
      appId: "1:831115193606:web:5c09b14c58aa2cb1b6c287"
    };
  
    
    firebase.initializeApp(firebaseConfig);
  
  
    arrayfire=[];
  
    firebase.database().ref().child("votantes").on("value", function(snapshot) {
      arrayfire=[];
      arrayfire=snapshot.val();
   
      
      
  
      
      
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  
  
    
  
  
    firebase.database().ref().child("estudiantes").on("value", function(snapshot) {
    
      arrayestudiantesuser=[];
    
      
      arrayestudiantesuser=snapshot.val();

      
  
      
      
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  
  
  
  }

var user1=2;
var Xes=100;



  function octenerdatosregis(){

    
    var vname=$("#idname").val();
    var vemail=  $("#idemail").val();
    var vtelefono=  $("#telefono").val();
    var vdepa=   $("#Departamento").val();
    var vmunicipio=   $("#ciudad").val();
    var vcurso=   $("#idcurso").val();

    
    var myNumeroAleatorio = Math.floor(Math.random()*( Xes+1));
   user1= String(vname.substring(0, 4)+String(myNumeroAleatorio));
if(vname && vtelefono){
    alert("Registrado1");
    var objefirest={
        pass:"123456",
        user:user1
    }
    
    nueuser(objefirest);
    alert("Registrado"+"\n"+"user: "+objefirest.user+"\n"+"pass: "+objefirest.pass );
}
  
  }

  

function nueuser(objefirest1){

    firebase.database().ref().child("estudiantes").push(objefirest1);
  
  }