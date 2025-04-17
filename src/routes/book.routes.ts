import { Router } from 'express';
import {
  createBook,
  listarLivros,
  getBookById,
  updateBookPut,
  updateBookPatch,
  deleteBook
} from '../controllers/book.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: CRUD de livros
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Cadastrar um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [titulo, autor, ano, paginas, tema]
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               ano:
 *                 type: integer
 *               paginas:
 *                 type: integer
 *               tema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Livro cadastrado com sucesso
 */
router.post('/', createBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Listar todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros
 */
router.get('/', listarLivros);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Buscar livro por ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro não encontrado
 */
router.get('/:id', getBookById);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Atualizar livro (completo)
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string*/
export default router;