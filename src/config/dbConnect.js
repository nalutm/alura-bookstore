import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://nalu:123@devnalu.runkdcj.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;
