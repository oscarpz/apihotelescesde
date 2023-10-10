import { Api } from "./Api.js"; // no debo olvidar la extensoion .js
import 'dotenv/config'

require('dotenv').config()
// Para usar una clase debo crear un objeto
// Para usar una clase debo crear un objeto/instancia
// Todo objeto es una variable 
let servidor = new Api()
// Levantar o dsperta el servidor
servidor.levantarServidor()

