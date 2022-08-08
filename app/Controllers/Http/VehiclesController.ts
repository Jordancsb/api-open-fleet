import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from "App/Models/Vehicle"

export default class VehiclesController {
  public async index() {
    const vehicle = await Vehicle.all()
    return vehicle
  }
  public async show({ params }: HttpContextContract) {
    const vehicle = await Vehicle.findByOrFail('id', params.id)
    return vehicle
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const vehicle = await Vehicle.create(body)

    response.status(201)

    return {
      message: 'Veiculo cadastrado',
      data: vehicle,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const vehicle = await Vehicle.findByOrFail('id', params.id)
    await vehicle.delete()
    return {
      message: `Veiculo ${vehicle.id} foi excluido com Sucesso!`,
    }
  }
  public async update({ params }: HttpContextContract) {
    const vehicle = await Vehicle.findByOrFail('id', params.id)

    await vehicle.save()

    return {
      message: `${vehicle.id} - Veiculo atualizado com sucesso!`,
    }
  }
}
