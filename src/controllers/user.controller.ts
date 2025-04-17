import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

export const cadastrarUsuario = async (req: Request, res: Response) => {
  const { nome, email, profissao, idade, senha } = req.body;

  if (!senha) {
    return res.status(400).json({ mensagem: 'Senha é obrigatória' });
  }

  // Convertendo a senha para string, caso seja passada como número
  const senhaString = String(senha);

  const usuarioExistente = await User.findOne({ $or: [{ nome }, { email }] });
  if (usuarioExistente) {
    return res.status(400).json({ mensagem: 'Usuário já existe' });
  }
  // Criptografando a senha
  const senhaCriptografada = await bcrypt.hash(senhaString, 10);

  const novoUsuario = await User.create({
    nome,
    email,
    profissao,
    idade,
    senha: senhaCriptografada,
  });

  return res.status(201).json({ id: novoUsuario._id, mensagem: 'Usuário cadastrado com sucesso' });
};

export const loginUsuario = async (req: Request, res: Response) => {
  const { nome, senha } = req.body;

  const usuario = await User.findOne({ nome });
  if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
    return res.status(404).json({ mensagem: 'Dados inválidos' });
  }

  const token = jwt.sign({ id: usuario._id, nome: usuario.nome }, JWT_SECRET, { expiresIn: '1h' });

  return res.status(201).json({ token, mensagem: 'Usuário logado com sucesso' });
};

export const buscarUsuarioPorId = async (req: Request, res: Response) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário nao encontrado' });
    }
    res.json(usuario);
  } catch {
    return res.status(404).json({ mensagem: 'Usuário nao encontrado' });
  }
};

export const atualizarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuario com ID inválido' });
    }
    res.status(200).json({ mensagem: 'Usuário atualizado com sucesso' });
  } catch {
    return res.status(404).json({ mensagem: 'Usuario com ID inválido' });
  }
};

export const atualizarParcialUsuario = async (req: Request, res: Response) => {
  return atualizarUsuario(req, res); // Mesmo tratamento do PUT
};

export const deletarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuario já excluído' });
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensagem: 'Usuário excluido com sucesso' });
  } catch {
    return res.status(400).json({ mensagem: 'Usuario com ID inválido' });
  }
};
