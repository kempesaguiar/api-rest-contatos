import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://dbmongo:dbmongo@mongodb-l0cq2.mongodb.net/contatos?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default mongoose;