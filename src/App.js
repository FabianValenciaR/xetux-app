import React from 'react'

import { Provider } from 'react-redux'
import LoaderWrapper from './LoaderWrapper'
import { store } from './store/store'


const App = () => {

  return (
    <Provider store={store}>
      <LoaderWrapper />
    </Provider>
  )
}

export default App