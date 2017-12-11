/**
 * 程序的入口
 */
import '@/common/main.less'
import '@/vendors'
import * as  React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

//解决移动端300毫秒延迟
import * as  fastClick from 'fastclick'
fastClick.attach(document.body)

import TestList from '@/routes/TestList'
// import TestList from '@/routes/Detail'
const rootEl = document.getElementById('root')

//history
import createHistory from 'history/createHashHistory'
const history = createHistory()

render(
  <AppContainer>
    <TestList history={history} />
  </AppContainer>
  , rootEl
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@/routes/Demo', () => {
    const NextApp = require<{ default: typeof TestList }>('@/routes/Demo').default
    render(
      <AppContainer>
        <NextApp history={history} />
      </AppContainer>
      ,
      rootEl
    )
  })
}
