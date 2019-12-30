'use strict'

class AnimalController {

  async index ({ request, response, view }) {

    return view.render('animais.lista')
  }

  async create ({ request, response, view }) {
  }

  
  async store ({ request, response }) {
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

module.exports = AnimalController
