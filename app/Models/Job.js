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
}