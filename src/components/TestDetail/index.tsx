import * as React from 'react'
import { Route, Router, Switch, HashRouter, Link, match } from 'react-router-dom'
import * as styles from './style.styl'
import * as PropTypes from 'prop-types'
import setRem from './rem'

interface Props {
  match?: match<any>,
  history?: any,
  location?: any
}
interface State {

}
/**
 * 组件demo
 */
export default class extends React.Component<Props, State> {
  static contextTypes = {
    match: PropTypes.any
  }
  constructor(props) {
    super(props)
  }
  dataList = []

  render() {
    return <div className={styles['anonymous-list-wrap']}>
      <Header />
      <Main />
    </div>
  }
}

const Header = () => (
  <header>
    <nav>
      <ul className={styles['nav']}>
        <li><Link to='/detail/roster'>Roster</Link></li>
        <li><Link to='/detail/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route path='/detail/roster' component={Roster} />
      <Route path='/detail/schedule' component={Schedule} />
    </Switch>
  </main>
)

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const PlayerAPI = {
  players: [
    { number: 1, name: 'Ben Blocker', position: 'G' },
    { number: 2, name: 'Dave Defender', position: 'D' },
    { number: 3, name: 'Sam Sweeper', position: 'D' },
    { number: 4, name: 'Matt Midfielder', position: 'M' },
    { number: 5, name: 'William Winger', position: 'M' },
    { number: 6, name: 'Fillipe Forward', position: 'F' }
  ],
  all: function () { return this.players },
  get: function (id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/detail/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/detail/roster'>Back</Link>
    </div>
  )
}

const Roster = () => (
  <Switch>
    <Route exact path='/detail/roster' component={FullRoster} />
    <Route path='/detail/roster/:number' component={Player} />
  </Switch>
)
