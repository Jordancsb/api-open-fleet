import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Carriage extends BaseModel {
  		/**
		* @swagger
		* components:
			* schemas:
			*      User:
			*        type: object
			*        properties:
			*          name:
			*            type: string
			*          email:
			*            type: string
			*
		*/
  @column({ isPrimary: true })
  public id: number

  @column()
  public CNPJ: number

  @column()
  public razao: string

  @column()
  public fantasia: string

  @column()
  public endereco: string

  @column()
  public contato: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
