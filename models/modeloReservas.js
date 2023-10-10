import mongoose from "mongoose";

const Schema=mongoose.Schema

const Reserba=new Schema({
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    personasNumero:{
        type:Number,
        required:true
    },
    nombrePerReserba:{
        type:String,
        required:true
    },
    costo:{
        type:Number,
        required:false
    }
})

export const modeloReservas=mongoose.model('Reserba',Reserba)