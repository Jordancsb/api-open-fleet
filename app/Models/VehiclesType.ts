import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VehiclesType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public capacidade: number

  @column()
  public altura: number

  @column()
  public largura: number

  @column()
  public comprimento: number

  @column()
  public peso: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
