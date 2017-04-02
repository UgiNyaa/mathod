import { addPoint } from '../../actions'

const regex = /(\s*\d+\s*,\s*\d+\s*)/i
export const tryParse = (c) => {
  return regex.test(c)
}

export const parse = (c, dispatch) => {
  var x,y;
  [x, y] = c.substr(1, c.length - 1).split(',').map((n) => { return parseFloat(n) })

  dispatch(addPoint('P', x, y))
}

export default { parse, tryParse }
