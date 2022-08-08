import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Shipping from 'App/Models/Shipping'

export default class ShippingsController {
  public async index() {
    const shipping = await Shipping.all()
    return shipping
  }
  public async show({ params }: HttpContextContract) {
    const shipping = await Shipping.findByOrFail('id', params.id)
    return shipping
  }

  public async destroy({ params }: HttpContextContract) {
    const shipping = await Shipping.findByOrFail('id', params.id)
    await shipping.delete()
    return {
      message: `Frete ${shipping.id} foi excluido!`,
    }
  }
}
