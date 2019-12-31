'use strict'

class PacienteController {

  async index ({ request, response, view }) {

    return view.render('pacientes.lista')
  }

  async create ({ request, response, view, params }) {

    console.log(params)
    return view.render('pacientes.create', {params})
  }

  
  async store ({ request, response }) {

    console.log(request.post())
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

module.exports = PacienteController
