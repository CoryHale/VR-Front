import React from 'react';
import Styled from 'styled-components';

import RegisterForm from '../components/Register/RegisterForm';

function Register() {
  return (
    <FormCont>
      <RegisterForm />
    </FormCont>
  ) 
}

const FormCont = Styled.div`
  width: 33%;
  margin: 0 auto;
`;

export default Register;