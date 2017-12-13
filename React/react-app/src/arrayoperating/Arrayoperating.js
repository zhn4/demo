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
          {
            this.state.array_data.map((data, i) => (
              <Round round={data}/>
            ))
          }
        </div>
        :
        <div>没有数据</div>
      }
      </div>
    )
  }
}

class Round extends Component {
  render() {
    return (
      <div className="round">
        <div>Round</div>
        {
          this.props.round.map((data, i) => (
            // <div key={i}>321</div>
            <Group key={i} group={data} />
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
        <div>Group</div>
        {
          this.props.group.map((data, i) => (
            // <div key={i}>123</div>
            <Team key={i} team={data}/>
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
        <div>Team</div>
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
