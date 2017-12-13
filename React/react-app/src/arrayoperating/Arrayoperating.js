import React, { Component } from 'react';

import './arrayoperating.css'

/*
round,group,team,person
*/
var data = [
  [// round
    [// group
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
          name: 'AJ',
          score: 0,
          win: false
        },
        {// person
          name: 'Marry',
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
          name: 'Mike',
          score: 0,
          win: false
        },
        {// person
          name: 'Penny',
          score: 0,
          win: false
        }
      ],
      [// team
        {// person
          name: 'Alex',
          score: 0,
          win: false
        },
        {// person
          name: 'Janet',
          score: 0,
          win: false
        }
      ]
    ]
  ]
]

var round = [// round
  [// group
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

var group = [// group
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

var team = [// team
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

var person = {// person
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
              <Round key={i} round={this.state.round}/>
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


// class Person extends Component {
//   render() {
//     return (
//       <div>{this.props.name}</div>
//     )
//   }
// }
