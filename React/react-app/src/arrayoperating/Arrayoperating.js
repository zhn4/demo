import React, { Component } from 'react';

import './arrayoperating.css'

/*
round,group,team,person
*/
// import data from './data.js'
let data = [
  [// round
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
  ],
  [// round
    [// group
      [// team
        {// person
          name: 'Jenny2',
          score: 12,
          win: false
        },
        {// person
          name: 'Ben2',
          score: 22,
          win: false
        }
      ],
      [// team
        {// person
          name: 'Alen2',
          score: 10,
          win: false
        },
        {// person
          name: 'Cherry2',
          score: 0,
          win: false
        }
      ]
    ],
    [// group
      [// team
        {// person
          name: 'Jude2',
          score: 0,
          win: false
        },
        {// person
          name: 'Peter2',
          score: 0,
          win: false
        }
      ],
      [// team
        {// person
          name: 'Alen2',
          score: 0,
          win: false
        },
        {// person
          name: 'Tony2',
          score: 0,
          win: false
        }
      ]
    ]
  ]
]

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

export default class Arrayoperating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array_data: data,
      person: person,
      team: team,
      group: group,
      round: round
    }
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
              <Round key={i} round={data} round_index={i}     handleDeleteRound={this.handleDeleteRound.bind(this, i)} handleDeleteGroup={this.handleDeleteGroup.bind(this, i)} handleDeleteTeam={this.handleDeleteTeam.bind(this, i)}
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
            <Group key={i} group={data} group_index={i} handleDeleteGroup={this.props.handleDeleteGroup} handleDeleteTeam={this.props.handleDeleteTeam} />
          ))
        }
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
            <Team key={i} team={data} team_index={i} handleDeleteTeam={this.props.handleDeleteTeam} group_index={this.props.group_index}/>
          ))
        }
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
            <Person key={i} name={data.name} score={data.score}/>
          ))
        }
      </div>
    )
  }
}

const Person = (props) => (
  <div className="person">{props.name} - {props.score}</div>
)
