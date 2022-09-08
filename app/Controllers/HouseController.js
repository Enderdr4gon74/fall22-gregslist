import { setHTML } from "../Utils/Writer.js"
import { appState } from "../AppState.js"
import { getFormData } from "../Utils/FormHandler.js"
import { housesService } from "../Services/HousesService.js"
import { House } from "../Models/House.js"

function drawHouses() {
  let template = ''
  appState.houses.forEach(House => template += House.houseCardTemplate)
  setHTML('listings', template)

}

export class HousesController {
  constructor() {
    appState.on('houses', drawHouses)
  }

  showHouses() {
    drawHouses()
  }

  addHouse() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      housesService.addHouse(formData)
      
      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error('addHouse', error)
    }
  }
}