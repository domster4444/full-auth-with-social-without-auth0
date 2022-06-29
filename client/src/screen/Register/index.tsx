import React from 'react';

import { RegisterContainer, FormBox } from './Register.style';
import Text from 'components/Text';

import Input from 'components/Input';
import { PrimaryButton } from 'components/Button/Button';

const index = (): React.ReactElement => {
  const submitHandler = () => {};
  return (
    <main>
      <RegisterContainer>
        <FormBox onSubmit={submitHandler}>
          <Text>Register</Text>
          <label htmlFor="name">
            <Input
              elementSize="small"
              placeholder="Enter your name"
              name="name"
              type="name"
            />
          </label>
          <label htmlFor="email">
            <Input
              elementSize="small"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </label>
          <label htmlFor="password">
            <Input
              elementSize="small"
              placeholder="Enter your password"
              name="password"
              type="password"
            />
          </label>

          <PrimaryButton> Submit</PrimaryButton>
        </FormBox>
      </RegisterContainer>
    </main>
  );
};

export default index;
