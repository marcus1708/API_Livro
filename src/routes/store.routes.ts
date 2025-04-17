import { Router } from 'express';
import {
  cadastrarLoja,
  listarLojas,
  buscarLojaPorId,
  atualizarLoja,
  atualizarParcialLoja,
  deletarLoja,
} from '../controllers/store.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Lojas
 *   description: Endpoints para gerenciamento de lojas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Loja:
 *       type: object
 *       required:
 *         - nome
 *         - localizacao
 *       properties:
 *         nome:
 *           type: string
 *         localizacao:
 *           type: string
 */

router.post('/', cadastrarLoja);

/**
 * @swagger
 * /stores:
 *   post:
 *     summary: Cadastra uma nova loja
 *     tags: [Lojas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Loja'
 *     responses:
 *       201:
 *         description: Loja cadastrada com sucesso
 */
router.get('/', listarLojas);

/**
 * @swagger
 * /stores:
 *   get:
 *     summary: Lista todas as lojas
 *     tags: [Lojas]
 *     responses:
 *       200:
 *         description: Lista de lojas
 */

router.get('/:id', buscarLojaPorId);

/**
 * @swagger
 * /stores/{id}:
 *   get:
 *     summary: Busca uma loja por ID
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Loja encontrada
 *       404:
 *         description: Loja não encontrada
 */

router.put('/:id', atualizarLoja);

/**
 * @swagger
 * /stores/{id}:
 *   put:
 *     summary: Atualiza uma loja por ID
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Loja atualizada com sucesso
 */

router.patch('/:id', atualizarParcialLoja);

/**
 * @swagger
 * /stores/{id}:
 *   patch:
 *     summary: Atualiza parcialmente uma loja
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Loja atualizada parcialmente
 */

router.delete('/:id', deletarLoja);

/**
 * @swagger
 * /stores/{id}:
 *   delete:
 *     summary: Deleta uma loja
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Loja deletada com sucesso
 */

export default router;
