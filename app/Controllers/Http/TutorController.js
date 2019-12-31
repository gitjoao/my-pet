'use strict'

class TutorController {
  

  async index ({ request, response, view }) {
  }

 
  async create ({ request, response, view }) {

    return view.render('tutores.create')
  }


  async store({ request, response, view }) {

    const tutor = request.post()
    // response.route('pacientes.create', { id: 1 } )
    response.route('PacienteController.create', { id: 1 })
    // return view.render('pacientes.create', { tutor })

  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = TutorController
