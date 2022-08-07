import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Driver from 'App/Models/Driver'

export default class DriversController {
  public async index() {
    const driver = await Driver.all()
    return driver
  }
  public async show({ params }: HttpContextContract) {
    const driver = await Driver.findByOrFail('id', params.id)
    return driver
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const driver = await Driver.create(body)

    response.status(201)

    return {
      message: 'Motorista cadastrado',
      data: driver,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const driver = await Driver.findByOrFail('id', params.id)
    await driver.delete()
    return {
      message: `Motorista ${driver.id} foi excluida com Sucesso!`,
    }
  }
  public async update({ params }: HttpContextContract) {
    const driver = await Driver.findByOrFail('id', params.id)

    await driver.save()

    return {
      message: `Motorista ${driver.id} atualizado com sucesso!`,
    }
  }

}
