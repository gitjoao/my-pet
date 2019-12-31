'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'DashboardController.index')

Route.group(() => {
    Route.get('/lista', 'PacienteController.index').as('pacientes.index')   
    Route.get('/novo/:id', 'PacienteController.create').as('pacientes.create') 
    Route.post('/salvar', 'PacienteController.store').as('pacientes.store') 
}).prefix('pacientes')

Route.group(() => {
    Route.get('/lista', 'TutorController.index').as('tutores.index')
    Route.get('/novo', 'TutorController.create').as('tutores.create')
    Route.post('/salvar', 'TutorController.store').as('tutores.store')
}).prefix('tutores')

