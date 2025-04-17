import { Router } from 'express';
import {
  adicionarAoCarrinho,
  listarCarrinhos,
  buscarCarrinhoPorId,
  atualizarCarrinho,
  deletarCarrinho,
} from '../controllers/cart.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Carrinhos
 *   description: Endpoints para gerenciamento de carrinhos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Carrinho:
 *       type: object
 *       required:
 *         - usuarioId
 *         - livros
 *       properties:
 *         usuarioId:
 *           type: string
 *         livros:
 *           type: array
 *           items:
 *             type: string
 */

router.post('/', adicionarAoCarrinho);

/**
 * @swagger
 * /carts:
 *   post:
 *     summary: Adiciona um item ao carrinho
 *     tags: [Carrinhos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Carrinho'
 *     responses:
 *       201:
 *         description: Carrinho atualizado
 */

router.get('/', listarCarrinhos);

/**
 * @swagger
 * /carts:
 *   get:
 *     summary: Lista todos os carrinhos
 *     tags: [Carrinhos]
 *     responses:
 *       200:
 *         description: Lista de carrinhos
 */

router.get('/:id', buscarCarrinhoPorId);

/**
 * @swagger
 * /carts/{id}:
 *   get:
 *     summary: Busca um carrinho por ID
 *     tags: [Carrinhos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carrinho encontrado
 */

router.put('/:id', atualizarCarrinho);

/**
 * @swagger
 * /carts/{id}:
 *   put:
 *     summary: Atualiza um carrinho
 *     tags: [Carrinhos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carrinho atualizado
 */

router.delete('/:id', deletarCarrinho);

/**
 * @swagger
 * /carts/{id}:
 *   delete:
 *     summary: Deleta um carrinho
 *     tags: [Carrinhos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carrinho removido
 */

export default router;
