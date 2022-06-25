import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    usersDetailsList: initialTodosList,
  }

  Delete = id => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(each => each.id !== id)
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    const {usersDetailsList} = this.state
    return (
      <div className="list-container">
        <div className="list-container-2">
          <h1 className="title">Simple Todos</h1>
          <ul>
            {usersDetailsList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                userDetails={eachItem}
                Delete={this.Delete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
