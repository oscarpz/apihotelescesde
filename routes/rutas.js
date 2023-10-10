import express from 'express'
import { ControladorHabitaciones } from '../controlers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controlers/ControladorReservas.js'

//para poder llamar al controlador debo llamar un objeto de la clase controladorhabitacion
let controladorHabitacion=new ControladorHabitaciones();
let controladorReservas= new ControladorReservas();
export let rutas= express.Router()

rutas.post('/api/habitaciones',controladorHabitacion.resgistrarHabitacion )
rutas.get('/api/habitacion/:id',controladorHabitacion.buscarHabitacionId)
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id',controladorHabitacion.modificarHabitacion )
rutas.delete('/api/habitaciones/:id',controladorHabitacion.borrarHabitacion )
//////////////////Habitaciones//////////////////////////////////
rutas.post('/api/reservas',controladorReservas.resgistrarReservas)
rutas.get('/api/reservas/:id',controladorReservas.buscarReservaId)
rutas.get('/api/reservas',controladorReservas.buscarReserva )
rutas.put('/api/reservas/:id',controladorReservas.modificarReserva)
rutas.delete('/api/reservas/:id',controladorReservas.borrarReserva )