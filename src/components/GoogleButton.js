// src/components/GoogleButton.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  border: 2px solid #4285f4;
  color: #4285f4;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #4285f4;
    color: white;
  }

  img {
    margin-right: 10px;
  }
`;

function GoogleButton() {
  return (
    <Button>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" width="20" />
      Sign in with Google
    </Button>
  );
}

export default GoogleButton;
