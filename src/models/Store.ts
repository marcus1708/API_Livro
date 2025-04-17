import mongoose, { Document, Schema } from 'mongoose';

export interface IStore extends Document {
  nome: string;
  endereco: string;
  cep: string;
  telefone: string;
  criadoEm: Date;
}

const StoreSchema: Schema = new Schema({
  nome: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
  cep: { type: String, required: true },
  telefone: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now }
});

export default mongoose.model<IStore>('Store', StoreSchema);
