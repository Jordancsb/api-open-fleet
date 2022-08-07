import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Shipping extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public origem: string

  @column()
  public destino: string

  @column()
  public distancia: string

  @column()
  public remetente: string

  @column()
  public destinatario: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
