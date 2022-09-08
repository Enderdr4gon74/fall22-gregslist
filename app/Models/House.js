export class House {

  /**
   * @param {{bedrooms: number, bathrooms: number, levels: number, imgUrl: string, year: number, price: number, description?: string}} data 
   */
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get houseCardTemplate() {
    return /* html */ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card rounded">
      <img src="${this.imgUrl}" alt="house" class="img-fluid rounded-top">
        <div class="card-body">
          <h4>${this.bedrooms} Bedroom, ${this.bathrooms} Bath, ${this.levels} Story</h4>
          <div class="d-flex justify-content-between">
            <h6>Year: ${this.year}</h6>
            <h6>Cost: $${this.price}</h6>
          </div>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}