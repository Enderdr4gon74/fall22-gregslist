import { generateId } from '../Utils/generateId.js'


export class Car {
  /**
   * The data needed to make a car
   * @param {{make: string, model: string, year: number, price: number, engineLitre: number, engineCylinder: number, description: string, imgUrl: string, id?:string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.engineLitre = data.engineLitre
    this.engineCylinder = data.engineCylinder
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl || 'https://www.autolist.com/assets/listings/default_car.jpg'
  }



  get CarCardTemplate() {
    return /*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card rounded">
        <img src="${this.imgUrl}" alt="${this.make}-${this.model}" class="img-fluid rounded-top">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.year} - ${this.make} ${this.model} - ${this.engineLitre} Liter ${this.engineCylinder} Cylinder
          </h5>
          <p class="text-success">
            <strong>$ ${this.price}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }






}




/**
 * <div class="card">
    <img src="https://i.pinimg.com/originals/9c/8a/5a/9c8a5a35c2581fa4502dc019b9bbefab.jpg" alt="" class="img-fluid">
    <div class="card-body">
      <h5 class="text-uppercase">
        Honda | Accord 1985
      </h5>
      <p>
        <strong>$ 1000</strong>
      </p>
      <p>Zoom Zoom</p>
    </div>
  </div>
 */

