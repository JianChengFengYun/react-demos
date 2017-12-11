/**
 * 程序的入口
 */
import '@/vendors'
import * as  React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

//解决移动端300毫秒延迟
import * as  fastClick from 'fastclick'
fastClick.attach(document.body)

import App from '@/routes/Demo2'
const rootEl = document.getElementById('root')

//history
import createHistory from 'history/createHashHistory'
const history = createHistory()

render(
  <AppContainer>
    <App history={history} />
  </AppContainer>
  , rootEl
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@/routes/Demo2', () => {
    const NextApp = require<{ default: typeof App }>('@/routes/Demo2').default
    render(
      <AppContainer>
        <NextApp history={history} />
      </AppContainer>
      ,
      rootEl
    )
  })
}
