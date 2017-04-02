import React from 'react'

import CoordinateSystemContainer from './containers/CoordinateSystemContainer'
import CommandlineContainer from './containers/CommandlineContainer'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <CoordinateSystemContainer />
        <CommandlineContainer />
      </div>
    )
  }
}
