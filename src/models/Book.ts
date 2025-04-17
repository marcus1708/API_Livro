import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
  titulo: string;
  autor: string;
  ano: number;
  paginas: number;
  tema: string;
  criadoEm: Date;
}

const BookSchema: Schema = new Schema({
  titulo: { type: String, required: true, unique: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
  paginas: { type: Number, required: true },
  tema: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now }
});

export default mongoose.model<IBook>('Book', BookSchema);
