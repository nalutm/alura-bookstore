import authors from '../models/Author.js';

class AuthorController {

  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  }

  static listAuthorById = (req, res) => {
    const { id } = req.params;
    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({message: `${err.message} - id do autor não localizado`});
      } else {
        res.status(200).send(authors);
      }
    }); 
  }

  static registerAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar o autor.`});
      } else {
        res.status(201).send(author.toJSON());
      }
    })
  }

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Autor atualizado com sucesso'})
      } else {
        res.status(500).send({messge: err.message});
      }
    });
  }

  static deleteAuthor = (req, res) => {
    const { id } = req.params;
    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: 'Autor removido com sucesso'});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

}

export default AuthorController;
