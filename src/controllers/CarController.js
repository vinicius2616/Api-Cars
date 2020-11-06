const db = require('../database/connection');

module.exports = class CarController {
  async index(request, response) {
    const Cars = await db('Cars').select('*');

    response.json(Cars);
  }

  async create(request, response) {
    const {
      nome,
      marca,
      cor,
      ano,
      descricao,
    } = request.body;

    const carro = {
      nome,
      marca,
      cor,
      ano,
      descricao,
    };

    const [insertedId] = await db('Cars').insert(carro);

    return response.json({
      id: insertedId,
      ...carro,
    });
  }

  async show(request, response) {
    const { id } = request.params;

    const carro = await db('Cars').where('id', id).first();

    if (!carro) {
      return response.status(404).json({ message: 'Nenhum carro foi encontrado' });
    }

    return response.json(carro);
  }

  async delete(request, response) {
    const { id } = request.params;

    const carro = await db('Cars').where('id', id).first();

    if (!carro) {
      return response.status(404).json({ message: 'Nenhum carro encontrado com esse nome' });
    }

    await db('Cars').where('id', id).del();

    return response.json({ message: 'Carro removida com sucesso!' });
  }
}
