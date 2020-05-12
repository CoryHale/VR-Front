import React from 'react';
import { withRouter } from 'react-router';
import Styled from 'styled-components';
import axios from 'axios';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      type_id: null,
      message: null
    };
  }

  formHandler = e => {
    e.preventDefault();

    // check fields if filled in
    if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0 && this.state.type_id !== null) {
      // sends data to server
      axios
        .post('https://lambdavrfunding.herokuapp.com/register', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          type_id: this.state.type_id
        })
        .then(res => {
          // update message for UI          
          this.setState({
            message: res.data.message
          });

          // redirect after successful login
          setTimeout(() => {
            this.props.history.push('/login');
          }, 4000);
        })
        .catch(err => {
          // displays error in UI, not console
          this.setState({
            message: err.message
          });
        });

    } else {
      alert('Please fill out all fields.');
    }

    this.clearInputs();
  }

  inputHandler = e => {    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearInputs = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      type_id: null
    })
  }

  render() {
    return (
      <Form>
        <Message>{this.state.message}</Message>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.inputHandler}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.inputHandler}
          placeholder="Email"
        ></input>
        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.inputHandler}
          placeholder="Password"
        ></input>
        <div>
            <label>Dreamer</label>
            <input type="radio" name="type_id" value="1" onChange={this.inputHandler}></input>
        </div>
        <div>
            <label>Investor</label>
            <input type="radio" name="type_id" value="2" onChange={this.inputHandler}></input>
        </div>
        <button type="submit" onClick={this.formHandler}>Submit</button>
      </Form>
    )
  }
}

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: column no-wrap;
  justify-content: center;
`;

const Message = Styled.p`
  border: 2px solid #000;
  padding: 10px;
  border-radius: 5px;
`;

export default withRouter(RegisterForm);