 export class ControladorHabitaciones{
    constructor(){}
    resgistrarHabitacion(peticion,respuesta){
      try{
        //1.esculcar los datos q quieren usar para el registro
        let datosHabitacionRegistrar=peticion.body
        //.2 validar los datos
        //.3 intentar guardar los datos
        //.4 responder
        respuesta.status(200).json({
          "mensaje":"exito en la operacion de guardado",
          "datos":"aca van los datos q se guardaron"
        })

      }catch(error){
        respuesta.status(400).json({
          "mensaje":"fallo en la operacion de guardado"+error
         
        })
      }
    }
    buscarHabitaciones(peticion,respuesta){
      try{
        //.1 intentar buscar los datos en BD
        //.2 Responder
        respuesta.status(200).json({
          "mensaje":"exito en la operacion de guardado",
          "datos":"aca van los datos q se buscaron"
        })

      }catch(error){
        respuesta.status(400).json({
          "mensaje":"fallo en la operacion de guardado"+error
         
        })
      }
    }
    buscarHabitacionId(peticion,respuesta){
      try{
        //.1 Esculcar los parametros de la peticion
        let idHabitacionBuscar=peticion.params.id
        //.2 Validar el dato
        //.3 Intento buscar el dato en BD
        respuesta.status(200).json({
          "mensaje":"exito en la operacion de guardado",
          "datos":"aca van los datos q se buscaron"
        })

      }catch(error){
        respuesta.status(400).json({
          "mensaje":"fallo en la operacion de guardado"+error
         
        })
      }
    }
    modificarHabitacion(peticion,respuesta){
      try{
        //.1Traigo el id a editar de la peticion
        let idHabitacionModificar=peticion.params.id
        let datosHabitacionModificar=peticion.body
        //.2validar los datos
        //.3 intentar buscar y modificar Bd
        respuesta.status(200).json({
          "mensaje":"exito en la operacion de Edicion",
          "datos":"aca van los datos q se editaron"
        })

      }catch(error){
        respuesta.status(400).json({
          "mensaje":"fallo en la operacion de editar"+error
         
        })
      }
    }
    borrarHabitacion(peticion,respuesta){
      try{
        let idHabitacionBorrar=peticion.params.id
        //validar
        //intento borrar la habitacion BD
        respuesta.status(200).json({
          "mensaje":"exito en la operacion de Borrado",
          
        })

      }catch(error){
        respuesta.status(400).json({
          "mensaje":"fallo en la operacion de borrado"+error
         
        })
      }
    }
  }