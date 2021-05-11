const { Post } = require('../db.js');
/* cambié Post por proeperty porque Posts esta vacia hay que definir bien como es el flow
  porque creo que tenemos un problema de que mmostrar @rennyGalindez
*/
async function getPostById(req, res) {
  const { id } = req.params;

  const regex = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );
  if (regex.test(id)) {
    const post = await Post.findByPk(id, {
      include: { all: true, nested: true },
    });
    res.json(post);
  } else {
    res.send({ message: 'El Id pasado no es válido' });
  }
}

module.exports = {
  getPostById,
};
