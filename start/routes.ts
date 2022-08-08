/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
  return { hello: 'world' }
  })
  Route.resource('/drive', 'DriversController').apiOnly()
}).prefix('/api')

Route.get('/api/drivers', 'DriversController.index')
Route.post('/api/drivers', 'DriversController.store')
Route.put('/api/drivers/:id', 'DriversController.show')
Route.delete('/api/drivers/:id', 'DriversController.destroy')

Route.get('/api/carriages', 'CarriagesController.index')
Route.post('/api/carriages', 'CarriagesController.store')
Route.put('/api/carriages/:id', 'CarriagesController.show')
Route.delete('/api/carriages/:id', 'CarriagesController.destroy')

Route.get('/api/vehicles', 'VehiclesController.index')
Route.post('/api/dvehicles', 'VehiclesController.store')
Route.put('/api/vehicles/:id', 'VehiclesController.show')
Route.delete('/api/vehicles', 'VehiclesController.destroy')

Route.get('/api/shipping', 'ShippingsController.index')
Route.post('/api/shipping', 'ShippingsController.store')
Route.put('/api/shipping/:id', 'ShippingsController.show')
Route.delete('/api/shipping', 'ShippingsController.destroy')
