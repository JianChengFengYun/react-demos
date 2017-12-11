import * as React from 'react'
import { match } from 'react-router-dom'
import * as styles from './style.styl'
import * as PropTypes from 'prop-types'
import Aitem from './Aitem/index'
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
  componentWillMount() {
    setRem()
    this.getData()
  }
  getData = () => {
    //统计
    let data = {
      'data': {
        'query': {
          'evalPageIndex': -1,
          'dynamicOffset': 4
        },
        'list': [
          {
            'type': 1,
            'id': '776710451613696000',
            'content': '要是兴趣变成工作该多好，我愿意累死在工作上',
            'count': 8,
            'companyName': '88同城',
            'commentUserName': '欧阳',
            'comment': '+1',
            'praiseNum': 58,
            'isPraise': false,
            'owner': false
          },
          {
            'type': 2,
            'id': '786251916439166976',
            'content': '18岁女，刚毕业做了两个月会计，因为老板娘一些做法让我对会计失去信心，辞职和朋友待了一个月，后面因为自己一直以来都喜欢健身，所以拿了所有自己攒的钱去办了健身卡买了课，这里花了一万多，后面在附近找工作，劳务派遣的文员，结果黑公司拿过两次几白的工资，后面被骗走手机，被公司同事骗去贷款，她辞职回老家，贷款又坑了一万，为了还贷款到处借钱，而且自己还攒钱交大专学费要九千多，都去借，现在余额为负，因为在外面连生活费都没有只能回家了，快两个月没有工作，整天被家里催看脸色（和家里关系非常不好）',
            'count': 0,
            'praiseNum': 0,
            'isPraise': false,
            'owner': false
          },
          {
            'type': 3,
            'id': '776615252855070720',
            'content': '哎，不知道应该干什么，想学技术，又不知道该学哪行，大家能否给个建议',
            'count': 24,
            'commentUserName': 'u5n845',
            'comment': '和我一样迷茫',
            'praiseNum': 31,
            'isPraise': false,
            'owner': false
          },
          {
            'type': 2,
            'id': '786243857134092288',
            'content': '本人21岁，在北京从事销售工作一年，现大学还没毕业，家居设计专业，有较强的总结沟通能力，文笔不错，心思缜密，不知道从事那个方面的工作好，文员，销售或者是设计。迷茫',
            'count': 0,
            'praiseNum': 0,
            'isPraise': false,
            'owner': true
          },
          {
            'type': 2,
            'id': '776412411435552768',
            'content': '求职时间拖得太久的话，会有想死的心情。因为你既没有收入，还得付出金钱，付出体力，却得不到想得到的，你会怀疑你自己是否一文不值，自己是否无能至极，这样下去，心理承受能力稍微差一点，就会放弃生的愿望。',
            'count': 21,
            'commentUserName': '人性的沉醉',
            'comment': '说到我心里去了，神了',
            'praiseNum': 105,
            'isPraise': true,
            'owner': false
          },
          {
            'type': 2,
            'id': '786242798538067968',
            'content': '这个病态的社会 老员工屁事不干一天拿着高工资 新员工一天累死累活 还背锅 我只想说一句 现在已经不是你们的时代了 迟早滚下来吧 轻视我们的年轻？ 算什么东西 我在同样的年纪才这番作为 我直接自我了断了 我都不知道哪来的自信让你们一天拽的二五八万似的',
            'count': 0,
            'praiseNum': 0,
            'isPraise': false,
            'owner': false
          },
          {
            'type': 2,
            'id': '776407534349193216',
            'content': '年纪小就不能工作吗，瞧不起小女孩啊！\n想找个服务员都没有……',
            'count': 28,
            'commentUserName': 'fzrcd_f2',
            'comment': '我这里要人，电话发过来',
            'praiseNum': 37,
            'isPraise': false,
            'owner': false
          },
          {
            'type': 2,
            'id': '786242307934355456',
            'content': '性格很内向，话也很少，现在在做尚赫，美容养生的，是个直销，觉得自己真心做不来，没人脉，没朋友，坚持不下去了，打算放弃了，决定找个工厂上班了',
            'count': 0,
            'praiseNum': 0,
            'isPraise': false,
            'owner': false
          }
        ]
      },
      'msg': '',
      'code': 0
    }
    if (data.code === 0) {
      let listData = data.data ? data.data.list : []
      this.dataList = this.dataList.concat(listData)

    }
  }

  render() {
    return <div className={styles['anonymous-list-wrap']}>
      <ul className={styles['anonymous-list']}>
        {
          this.dataList.map((item, index) => {
            { return <Aitem key={index} data={item} {...this.props}/> }
          })
        }
      </ul>
    </div>
  }
}


