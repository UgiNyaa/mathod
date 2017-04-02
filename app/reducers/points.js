import { ADD_POINT } from '../actions'

const point = (state = {}, action) => {
  switch (action.type) {
    case ADD_POINT:
      return {
        name: action.name,
        x: action.x,
        y: action.y
      }

    default:
      return state
  }
}

const points = (state = [], action) => {
  switch (action.type) {
    case ADD_POINT:
      return [
        ...state,
        point(undefined, action)
      ]

    default:
      return state
  }
}

export default points
