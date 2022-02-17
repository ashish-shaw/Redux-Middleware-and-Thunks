import { INC_COUNT, DEC_COUNT } from "./actionTypes";

export const incCount = (payload) => ({
  type: INC_COUNT,
  payload,
});

export const decCount = (payload) => ({
  type: DEC_COUNT,
  payload,
});
