export interface Search {
  from: any,
  to: any,
  depart: Date
}

export interface State {
  currency: string,
  flights: any[],
  search: Search
}