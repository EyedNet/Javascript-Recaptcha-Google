

window.onload=start;
var d = document;

function start()
{
 /*Ponemos un listener al evento click en el submit y llamamos
   a la función */
 d.getElementById('submit').addEventListener('click',Checkrecaptcha,false);
}

/* ------------------------------------- */
     /*   CHEQUEAR CAMPOS NO VACÍOS Y CAPTCHA
     /* ------------------------------------- */
   function Checkrecaptcha (evento)
        {
         //metemos el código de retorno del recaptcha en una variable
         var inrecaptch=grecaptcha.getResponse();
         
         //obtenemos los valores de los campos del formulario por su id
	       var name=d.getElementById('name').value;
         var message=d.getElementById('massage').value;
         
         //Chequeamos campos no vacíos y el email con un regex
         if(name!=""
	       &&checkEmail() 
	       && message!="")
	     { 
         //Chequemos  si ha habido retorno de Google en el recaptcha
		     if(inrecaptch=="")
                {
                 alert("El captcha de google no ha sido activado...");
                 evento.preventDefault();		
		             return false;
                
                }
          else 
	       {
		       alert ("El captcha ha sido activado.... ");
                       evento.preventDefault();		
	               return false;
               }
		 
	 }
		       else {alert("Los campos del formulario deben ser rellenados correctamente...");}
           
		//Función para comprobar el email con un regex
		       function checkEmail()
		{
		       var email=d.getElementById('email').value;
           regex_mail=/@{1}\D{1,}\.{1}[a-zA-Z]{3}$/;
	         if(email!="")
                     {
 	           //compruebo si no tiene las coincidencias del regex
 	            if (!regex_mail.test(email))
 	                {

 	                  alert ('Error....!\nEmail inválido\n    Rectifíquelo...');
		
		          return false;		
 	                 }
 	else return true;
 }
 else
 	{
 		return true;
 	}
		
		}
	 	
        
        }
