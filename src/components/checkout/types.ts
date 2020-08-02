import { Service } from '../category/types';

export interface CheckoutState {
  serviceData: Service | undefined,
  receiptOpen: string,
  adultsCount: number,
  childrenCount: number,
  total: number,
  cookery: UpdateCookeryPayload["cookery"],
  decorations: UpdateDecorationsPayload["decorations"],
  animator: UpdateAnimatorPayload["animator"],
  successfullOrders: SuccessfulOrder[],
  selectedDate: string | null,
  selectedTime:
  {
    startTime: string | null,
    endTime: string | null,
  }
}

export interface SuccessfulOrder {
  title: string ,
  selectedDate: string | null,
  selectedTime: {
    startTime: string | null,
    endTime: string | null
  }
  total: number
}

export type Cookery = UpdateCookeryPayload["cookery"];
export type Decorations = UpdateDecorationsPayload["decorations"];
export type Animator = UpdateAnimatorPayload["animator"];

export interface GetServiceDataPayload {
  serviceId: string,
}

export interface SetSelectedTimePayload {
  startTime: string,
  endTime: string,
}

export interface SetSelectedDatePayload {
  selectedDate: string,
}

export interface UpdateVisitorsPayload {
  visitorType: string
}

export interface UpdateCookeryPayload {
  cookery: {
    name: string,
    count: number
  }[]
}

export interface UpdateDecorationsPayload {
  decorations: {
    name: string,
    count: number
  }[]
}

export interface UpdateAnimatorPayload {
  animator: {
    name: string,
    price: number
  }
}
