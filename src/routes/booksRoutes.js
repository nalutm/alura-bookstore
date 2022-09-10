import express from 'express';
import BookController from '../controllers/booksController.js';

const router = express.Router();

router
  .get('/livros', BookController.listBooks)
  .get('/livros/busca', BookController.listBookByPublisher)
  .get('/livros/:id', BookController.listBookById)
  .post('/livros', BookController.registerBook)
  .put('/livros/:id', BookController.updateBook)
  .delete('/livros/:id', BookController.deleteBook);

export default router;
