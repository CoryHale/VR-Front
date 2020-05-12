import React from 'react';
import Styled from 'styled-components';

import LoginForm from '../components/Login/LoginForm';

function Register() {
  return (
    <FormCont>
      <LoginForm />
    </FormCont>
  ) 
}

const FormCont = Styled.div`
  width: 33%;
  margin: 0 auto;
`;

export default Register;