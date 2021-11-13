import {
  EXAMINATION_SET_EXAMINATIONS,
  EXAMINATION_SET_EXAMINATIONS_COUNT,
} from "../types/types";

const initialState = {
  examinations: [],
  examinationsCount: null,
};

export const examinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMINATION_SET_EXAMINATIONS:
      return Object.assign({}, state, {
        examinations: action.recipes,
      });
    case EXAMINATION_SET_EXAMINATIONS_COUNT:
      return Object.assign({}, state, {
        examinationsCount: action.examinationsCount,
      });
    default:
      return state;
  }
};
