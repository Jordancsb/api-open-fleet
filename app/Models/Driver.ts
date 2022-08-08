import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Driver extends BaseModel {
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
  public nome: string

  @column()
  public CNH: string

  @column()
  public categoria: string

  @column()
  public contato: string

  @column()
  public CEP: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
