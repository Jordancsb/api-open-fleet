import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('List users', (group) => {
  test('get a paginated list of users', async ({ client }) => {
    const response = await client.get('/users')

    console.log(response.body())
  })
  group.each.setup(async () => {
    await Database.beginGlobalTransaction('pg')
    return () => Database.rollbackGlobalTransaction('pg')
  })
})
