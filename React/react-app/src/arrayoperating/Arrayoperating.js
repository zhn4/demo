import React, { Component } from 'react';

import './arrayoperating.css'

/*
round,group,team,person
*/
import data from './data.js'
// let data = [
//   [// round
//     [// group
//       [// team
//         {// person
//           name: 'Jenny',
//           score: 3,
//           win: false
//         },
//         {// person
//           name: 'Ben',
//           score: 4,
//           win: false
//         }
//       ],
//       [// team
//         {// person
//           name: 'Alen',
//           score: 0,
//           win: false
//         },
//         {// person
//           name: 'Cherry',
//           score: 0,
//           win: false
//         }
//       ]
//     ],
//     [// group
//       [// team
//         {// person
//           name: 'Jude',
//           score: 0,
//           win: false
//         },
//         {// person
//           name: 'Peter',
//           score: 0,
//           win: false
//         }
//       ],
//       [// team
//         {// person
//           name: 'Alen',
//           score: 0,
//           win: false
//         },
//         {// person
//           name: 'Tony',
//           score: 0,
//           win: false
//         }
//       ]
//     ]
//   ],
//   [// round
//     [// group
//       [// team
//         {// person
//           name: 'Jenny2',
//           score: 12,
//           win: false
//         },
//         {// person
//           name: 'Ben2',
//           score: 22,
//           win: false
//         }
//       ],
//       [// team
//         {// person
//           name: 'Alen2',
//           score: 10,
//           win: false
//         },
//         {// person
//           name: 'Cherry2',
//           score: 0,
//           win: false
//         }
//       ]
//     ],
//     [// group
//       [// team
//         {// person
//           name: 'Jude2',
//           score: 0,
//           win: false
//         },
//         {// person
//           name: 'Peter2',
//           score: 0,
//           win: false
//         }
//       ],
//       [// team
//         {// person
//           name: 'Alen2',
//           score: 0,
//           win: false
//         },
//         {// person
//           name: 'Tony2',
//           score: 0,
//           win: false
//         }
//       ]
//     ]
//   ]
// ]

let round = [// round
  [// group
    [// team
      {// person
        name: 'Jenny',
        score: 3,
        win: false
      },
      {// person
        name: 'Ben',
        score: 4,
        win: false
      }
    ],
    [// team
      {// person
        name: 'Alen',
        score: 0,
        win: false
      },
      {// person
        name: 'Cherry',
        score: 0,
        win: false
      }
    ]
  ],
  [// group
    [// team
      {// person
        name: 'Jude',
        score: 0,
        win: false
      },
      {// person
        name: 'Peter',
        score: 0,
        win: false
      }
    ],
    [// team
      {// person
        name: 'Alen',
        score: 0,
        win: false
      },
      {// person
        name: 'Tony',
        score: 0,
        win: false
      }
    ]
  ]
]

let group = [// group
  [// team
    {// person
      name: 'Jenny',
      score: 0,
      win: false
    },
    {// person
      name: 'Ben',
      score: 0,
      win: false
    }
  ],
  [// team
    {// person
      name: 'Andy',
      score: 0,
      win: false
    },
    {// person
      name: 'Jeck',
      score: 0,
      win: false
    }
  ]
]

let team = [// team
  {// person
    name: 'Jenny',
    score: 0,
    win: false
  },
  {// person
    name: 'Ben',
    score: 0,
    win: false
  }
]

let person = {// person
  name: 'Ben',
  score: 0,
  win: false
}

let people_list = [
  {
    name: 'Wang',
    score: 0,
    win: false
  },
  {
    name: 'Zhou',
    score: 0,
    win: false
  },
  {
    name: 'Guo',
    score: 0,
    win: false
  },
  {
    name: 'Chen',
    score: 0,
    win: false
  },
  {
    name: 'Jiang',
    score: 0,
    win: false
  }
]

export default class Arrayoperating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array_data: [],
      person: person,
      team: team,
      group: group,
      round: round,
      people_list: people_list
    }
  }
  componentWillMount() {
    console.log(this.state.people_list)
  }
  handleNewRound() {
    console.log('增加round')
    let data = this.state.array_data
    let new_round = []
    data.push(new_round)// 增加round
    this.setState({
      array_data: data
    })
  }
  handleDeleteRound(i, e) {
    console.log('删除round')
    console.log('round index ' + i)// i是Round的索引值
    let data = this.state.array_data
    data.splice(i, 1)// 删除round
    this.setState({
      array_data: data
    })
  }
  handleDeleteGroup(i, e) {
    console.log('删除Group')
    console.log('round index ' + i)
    console.log('group index ' + e.target.dataset.group_index)
    let data = this.state.array_data
    let round = data[i]
    round.splice(e.target.dataset.group_index, 1)// 删除group
    this.setState({
      array_data: data
    })
  }
  handleDeleteTeam(i, e) {
    console.log('删除Team')
    console.log('round index ' + i)
    console.log('group index ' + e.target.dataset.group_index)
    console.log('team index ' + e.target.dataset.team_index)
    let data = this.state.array_data
    let round = data[i]
    let group = round[e.target.dataset.group_index]
    group.splice(e.target.dataset.team_index, 1)// 删除team
    this.setState({
      array_data: data
    })
  }
  handleAddGroup(i, e) {
    console.log('增加Group')
    let data = this.state.array_data
    let new_group = []
    data[i].push(new_group)
    this.setState({
      array_data: data
    })
  }
  handleAddTeam(i, e) {
    console.log('增加Team')
    let data = this.state.array_data
    let round = data[i]
    let group = round[e.target.dataset.group_index]
    let team = [
      {// person
        name: '',
        score: 0,
        win: false
      },
      {// person
        name: '',
        score: 0,
        win: false
      }
    ]
    group.push(team)
    this.setState({
      array_data: data
    })
  }
  handleSelectName(i, e) {
    console.log('修改名字')
    let data = this.state.array_data
    let round = data[i]
    let group = round[e.target.dataset.group_index]
    let team = group[e.target.dataset.team_index]
    let person = team[e.target.dataset.person_index]
    person.name = e.target.value
    this.setState({
      array_data: data
    })
  }
  render() {
    return (
      <div className="array">
        <h2>Array</h2>
      {
        this.state.array_data
        ?
        <div>
          <h3>渲染数据</h3>
          {/* <Person name={this.state.person.name}/> */}
          {/* <Team team={this.state.team}/> */}
          {/* <Group group={this.state.group}/> */}
          {/* <Round round={this.state.round}/> */}
          {/* i是Round的索引值 */}
          {
            this.state.array_data.map((data, i) => (
              <Round key={i} round={data} round_index={i} people_list={this.state.people_list} handleDeleteRound={this.handleDeleteRound.bind(this, i)} handleDeleteGroup={this.handleDeleteGroup.bind(this, i)} handleDeleteTeam={this.handleDeleteTeam.bind(this, i)} handleAddGroup={this.handleAddGroup.bind(this, i)} handleAddTeam={this.handleAddTeam.bind(this, i)} handleSelectName={this.handleSelectName.bind(this, i)}
              />
            ))
          }
          <Btn handleFunction={this.handleNewRound.bind(this)} text="增加Round"/>
        </div>
        :
        <div>没有数据</div>
      }
      </div>
    )
  }
}

class Btn extends Component {
  render() {
    return (
      <button onClick={this.props.handleFunction}
              data-round_index={this.props.round_index} data-group_index={this.props.group_index} data-team_index={this.props.team_index}
      >{this.props.text}</button>
    )
  }
}

class Round extends Component {
  render() {
    return (
      <div className="round">
        <div>
          Round {this.props.round_index + 1}
          <Btn text="删除" handleFunction={this.props.handleDeleteRound} />
        </div>
        {
          this.props.round.map((data, i) => (
            // <div key={i}>321</div>
            <Group key={i} group={data} group_index={i} handleDeleteGroup={this.props.handleDeleteGroup} handleDeleteTeam={this.props.handleDeleteTeam} handleAddTeam={this.props.handleAddTeam} people_list={this.props.people_list} handleSelectName={this.props.handleSelectName} />
          ))
        }
        <Btn text="增加Group" handleFunction={this.props.handleAddGroup} />
      </div>
    )
  }
}

class Group extends Component {
  render() {
    return (
      <div className="group">
        <div>
          Group {this.props.group_index + 1}
          <Btn text="删除" handleFunction={this.props.handleDeleteGroup} group_index={this.props.group_index} />
        </div>
        {
          this.props.group.map((data, i) => (
            // <div key={i}>123</div>
            <Team key={i} team={data} team_index={i} handleDeleteTeam={this.props.handleDeleteTeam} group_index={this.props.group_index} people_list={this.props.people_list} handleSelectName={this.props.handleSelectName}/>
          ))
        }
        <Btn text="增加Team" handleFunction={this.props.handleAddTeam} group_index={this.props.group_index} />
      </div>
    )
  }
}

class Team extends Component {
  render() {
    return (
      <div className="team">
        <div>
          Team {this.props.team_index + 1}
          <Btn text="删除" handleFunction={this.props.handleDeleteTeam} group_index={this.props.group_index} team_index={this.props.team_index} />
        </div>
        {
          this.props.team.map((data, i) => (
            <Person key={i} name={data.name} score={data.score} people_list={this.props.people_list} group_index={this.props.group_index} team_index={this.props.team_index} person_index={i} handleSelectName={this.props.handleSelectName}/>
          ))
        }
        {/* {
          this.props.team.length < 2
          ?
          <Btn text="增加参赛者" handleFunction={this.props.handleAddTeam} group_index={this.props.group_index} />
          :
          ''
        } */}
      </div>
    )
  }
}

class Person extends Component {
  render() {
    return (
      <div>
        <Name people_list={this.props.people_list}
              group_index={this.props.group_index}
              team_index={this.props.team_index}
              person_index={this.props.person_index} handleSelectName={this.props.handleSelectName}
        />
      </div>
    )
  }
}

class Name extends Component {
  render() {
    return (
      <select data-round_index={this.props.round_index}
        data-group_index={this.props.group_index}
        data-team_index={this.props.team_index}
        data-person_index={this.props.person_index}
        onChange={this.props.handleSelectName}
      >
        <option key={0} value="">请选择</option>
        {
          this.props.people_list.map((data, i) => (
            <option key={i + 1} value={data.name}>{data.name}</option>
          ))
        }
      </select>
    )
  }
}
