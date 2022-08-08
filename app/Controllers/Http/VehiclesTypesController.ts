import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VehiclesType from "App/Models/VehiclesType"

export default class VehiclesTypesController {
  public async show({ params }: HttpContextContract) {
    const vehicleTypes = await VehiclesType.findByOrFail('id', params.id)
    return vehicleTypes
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const vehicleTypes = await VehiclesType.create(body)

    response.status(201)

    return {
      message: 'Cadastro feito com sucesso!',
      data: vehicleTypes,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const vehicleTypes = await VehiclesType.findByOrFail('id', params.id)
    await vehicleTypes.delete()
    return {
      message: `Exclusão feita com Sucesso!`,
    }
  }
  public async update({ params }: HttpContextContract) {
    const vehicleTypes = await VehiclesType.findByOrFail('id', params.id)

    await vehicleTypes.save()

    return {
      message: `Alteração feita com sucesso!`,
    }
  }
}
