import { Request, Response } from 'express';
import Cart from '../models/Cart';

export const cadastrarCarrinho = async (req: Request, res: Response) => {
  const { usuarioId, livros, lojaId } = req.body;

  try {
    const novoCarrinho = await Cart.create({ usuarioId, livros, lojaId });
    res.status(201).json({ mensagem: 'Carrinho criado com sucesso', id: novoCarrinho._id });
  } catch {
    res.status(500).json({ mensagem: 'Erro ao criar carrinho' });
  }
};

export const listarCarrinhos = async (_req: Request, res: Response) => {
  const carrinhos = await Cart.find();
  res.json(carrinhos);
};

export const buscarCarrinhoPorId = async (req: Request, res: Response) => {
  const carrinho = await Cart.findById(req.params.id);
  if (!carrinho) {
    return res.status(404).json({ mensagem: 'Carrinho não encontrado' });
  }
  res.json(carrinho);
};

export const atualizarCarrinho = async (req: Request, res: Response) => {
  const carrinho = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!carrinho) {
    return res.status(404).json({ mensagem: 'Carrinho não encontrado' });
  }
  res.json({ mensagem: 'Carrinho atualizado com sucesso' });
};

export const atualizarParcialCarrinho = atualizarCarrinho;

export const deletarCarrinho = async (req: Request, res: Response) => {
  const carrinho = await Cart.findById(req.params.id);
  if (!carrinho) {
    return res.status(404).json({ mensagem: 'Carrinho já excluído' });
  }

  await Cart.findByIdAndDelete(req.params.id);
  res.json({ mensagem: 'Carrinho excluído com sucesso' });
}; 
export const adicionarAoCarrinho = async (req: Request, res: Response) => {
  const { usuarioId, livroId, lojaId, quantidade } = req.body;

  try {
    const novoItem = await Cart.create({ usuarioId, livroId, lojaId, quantidade });
    res.status(201).json({ mensagem: 'Item adicionado ao carrinho com sucesso', id: novoItem._id });
  } catch {
    res.status(500).json({ mensagem: 'Erro ao adicionar item ao carrinho' });
  }
};
