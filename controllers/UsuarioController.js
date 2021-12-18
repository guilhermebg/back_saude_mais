const Usuario = require("../models/usuarios");

exports.list = (req, res) => {
  Usuario.findAll().then((usuario) => {
    if (usuario) {
      // estou armazenando tudo dentro do objeto usuário
      return res.json(usuario);
    } else {
      res.status(404).send();
    } // estou solicitando que ele seja mostrado em forma de json.
  });
};

exports.find = (req, res) => {
  let { id } = req.params; // sempre que precisar passar parametros por url {} instrução de JS igual passamos props em react

  Usuario.findByPk(id).then((usuario) => {
    //.findByPk estou fazendo uma busca no Pk(primary key)
    if (usuario) {
      //Condicional para verificar se o id passado é nulo
      res.json(usuario);
    } else {
      res.status(404).send(); // Caso não exista ele utilizara .status do express para imprimir a tela 404
      //Verficar com a professora a possíbilidade de em vez da tela 404 eu redirecionar o usuário para tela principal ou de busca com uma flash mensage informando que o cadastro não foi localizado
    }
  });
};

exports.add = (req, res) => {
  const { name, sobrenome, email, cpf } = req.body;
  if (!name || !email || !cpf) {
    res
      .status(200)
      .json({ message:"Usuário Não Cadastrado algum dos campos obrigatórios não foram preenchidos",});
  } else {
    Usuario.findOne({ where: { cpf: cpf } }).then((newusuario) => {
      if (newusuario) {
        res
          .status(404)
          .json({
            message: `CPF já cadastrado no sistema para o usuário: ${newusuario.name}`,
          });
      } else {
        Usuario.findOne({ where: { email: email } }).then((newusuario) => {
          if (newusuario) {
            res
              .status(404)
              .json({
                message: `Email já cadastrado no sistema para o usuário: ${newusuario.name}`,
              });
          } else {
            const newUsuario = Usuario.create({ name, sobrenome, email, cpf });
            res.status(201).json({ message: "Usuário Criado com Sucesso " });
          }
        });
      }
    });
  }
};

exports.update = async (req, res) => {
  let { id } = req.params;
  const { name } = req.body;
  const vrusuario = await Usuario.findByPk(id);
  if (!vrusuario) {
    res.status(404).json({ message: "Usuário Não Cadastrado" });
  } else {
    const test = await Usuario.update({ name }, { where: { id } });
    res.status(200).json({ message: "Usuário Alterado com Sucesso " });
  }
};

exports.delete = (req, res) => {
  let { id } = req.params;
  Usuario.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({ message: "Usuário deletado com Sucesso " });
};
