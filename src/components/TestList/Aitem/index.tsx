import * as React from 'react'
import * as style from './style.less'
import * as classnames from 'classnames'
import { Link, match } from 'react-router-dom'
import * as PropTypes from 'prop-types'

interface State {

}
interface Props {
  data: any,
  match?: match<any>,
  history?: any,
  location?: any
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

  componentWillMount() {
    console.log(this.props.match)
    console.log(this.props.location)
  }

  isEmpty = (obj) => {
    return obj === null || obj === undefined
  }

  getName = () => {
    let { data } = this.props
    let name = '', dec = '', cn = ''
    switch ((this.isEmpty(data.type) ? '' : data.type).toString()) {
      case '1':
        name = data.companyName + '公司的评价'
        dec = '根据你在88的浏览行为推荐'
        cn = 'comment'
        break
      case '2':
        name = '匿名动态精选'
        dec = '精选88用户发布的匿名动态'
        cn = 'danamic'
        break
      case '3':
        name = '88问答智能推荐'
        dec = '根据你在88的浏览行为推荐'
        cn = 'wenda'
        break
    }
    return { name, dec, cn }
  }

  link = () => {
    this.props.history.push('detail/:ccc')
  }

  render() {
    let { name, dec, cn } = this.getName()
    let { data } = this.props
    let classn = classnames(style['info-logo'], style[cn])

    return <li className={style['list-item']} onClick={this.link} >
      <div className={style['info-head']} >
        <div className={classn}>
        </div>
        <div className={style['info-name-dec']}>
          <h3 className={style['info-name']}>{name}</h3>
          <span className={style['info-dec']}>{dec}</span>
        </div>
      </div>
      <div className={style['list-content-wrap']} ref='content'>
        <p className={style['item-content clip']} >{data.content}</p>
        <p className={style['item-show-more']} >全文</p>
      </div>
    </li>
  }
}


