import mongoose, { Document, Schema } from 'mongoose';

export interface ICart extends Document {
  usuarioId: mongoose.Types.ObjectId;
  livroId: mongoose.Types.ObjectId;
  lojaId: mongoose.Types.ObjectId;
  quantidade: number;
  criadoEm: Date;
}

const CartSchema: Schema = new Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  livroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  lojaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  quantidade: { type: Number, required: true },
  criadoEm: { type: Date, default: Date.now }
});

export default mongoose.model<ICart>('Cart', CartSchema);
