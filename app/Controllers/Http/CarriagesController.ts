import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Carriage from 'App/Models/Carriage'

export default class CarriagesController {
  public async index() {
    const carriage = await Carriage.all()
    return carriage
  }
  public async show({ params }: HttpContextContract) {
    const carriage = await Carriage.findByOrFail('id', params.id)
    return carriage
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const carriage = await Carriage.create(body)

    response.status(201)

    return {
      message: 'Transportadora cadastrada',
      data: carriage,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const carriage = await Carriage.findByOrFail('id', params.id)
    await carriage.delete()
    return {
      message: `Transportadora ${carriage.id} foi excluida com Sucesso!`,
    }
  }
  public async update({ params }: HttpContextContract) {
    const carriage = await Carriage.findByOrFail('id', params.id)

    await carriage.save()

    return {
      message: `Transportadora ${carriage.id} atualizada com sucesso!`,
    }
  }
}
