export const ADD_POINT = 'ADD_POINT'

export const addPoint = (name, x, y) => {
  return {
    type: ADD_POINT,
    name,
    x,
    y
  }
}
