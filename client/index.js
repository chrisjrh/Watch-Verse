import React from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import store from './store'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <Auth0Provider
      domain={'dev-o4s-crt6.au.auth0.com'}
      clientId={'QxoQxN6xPc8nNYI5feTjbJugEvA81tX0'}
      redirectUri={window.location.origin}
      audience='https://cuview/api'
    >

      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
