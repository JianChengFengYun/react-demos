/**
 * 路由页面
 */

import * as React from 'react'
import { Route, Router, Switch } from 'react-router-dom'


import * as styles from './style.less'

// import TestDetail from '@/components/TestDetail'
import TestDetail from '@/components/TestDetail'
import TestList from '@/components/TestList'

interface Props {
  history: any
}
export default class extends React.Component<Props, {}> {

  componentWillMount() {
    // this.props.history.replace('list')
  }
  render() {
    return (
      <Router history={this.props.history}>
        <Route render={({ location }) => {
          return (
            <Switch>
              <Route component={TestList}
                exact
                path='/'
              />
              <Route component={TestDetail}
                path='/detail'
              />
            </Switch>
          )
        }}
        />
      </Router>
    )
  }
}
