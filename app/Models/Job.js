export class Job {

  /**
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description?: string}} data 
   */
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || ""
  }

  get jobCardTemplate() {
    return /* html */ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card rounded">
        <div class="card-body">
          <h4 class="text-primary">${this.company}</h4>
          <h6 class="text-warning">${this.jobTitle}</h6>
          <h6 class="text-success"><strong>$${this.rate}</strong> an Hour</h6>
          <h6 class="text-dark">${this.hours} hours a week</h6>
          <p class="text-dark">${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}