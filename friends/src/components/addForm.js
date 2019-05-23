import React from 'react';

import './addForm.css';

import ErrorMessage from './error';
import SuccessMessage from './success';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends,
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    e.persist();

    this.setState( prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }

    }));
  };

  postFriend = e => {
    e.preventDefault();

    this.props.postFriend(this.state.friend);

  };

  render() {
    return (
      <form onSubmit={this.postFriend} className="add-form">
        <h1>Add a friend</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.friend.name}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
          value={this.state.friend.age}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.friend.email}
        />


        {this.props.postErrorMessage ? (
          <ErrorMessage message={this.props.postErrorMessage} />
        ) : null}
        {this.props.postSuccessMessage ? (
          <SuccessMessage message={this.props.postSuccessMessage} />
        ) : null}

        <button onClick={this.postFriend} > Add </button>
      </form>
    );
  }
}

export default AddForm;
