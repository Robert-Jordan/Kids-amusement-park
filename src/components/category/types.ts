export interface CategoryState {
  appliedFilters: string[],
  services: Service[],
  filteredServices: Service[] | null,
  filteredCategory: string,
  filteredCity: string,
}

export interface SortByPricePayload {
  direction: string
}

export interface FilterByCityPayload {
  value: string
}

export interface FilterByCategoryPayload {
  value: string
}

export interface Service {
  id: number,
  title: string,
  desc: string,
  category: {
    name: string
  }[],
  price: {
    minimalPrice: number,
    adultPrice: number,
    childrenPrice: number
  },
  city: {
    name: string
  },
  img: string,
  time?: {
    startTime: string,
    endTime: string
  }[],
  cookery?: Array<Cookery>,
  animators?: Array<Animators>,
  additionalServices?: Array<AdditionalServices>,
}

export interface Cookery {
  name: string,
  portion: string,
  price: number
}

export interface Animators {
  name: string,
  price: number
}

export interface AdditionalServices {
  name: string,
  price: number
}

export type Services = Service[];