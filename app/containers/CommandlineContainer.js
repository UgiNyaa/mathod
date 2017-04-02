import { connect } from 'react-redux'
import Commandline from '../components/Commandline'

import PointParser from './parsing/PointParser'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEnter: (c) => {
      if (PointParser.tryParse(c)) {
        PointParser.parse(c, dispatch)
      }
    }
  }
}

const CommandlineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Commandline)

export default CommandlineContainer
