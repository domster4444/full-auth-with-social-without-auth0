import React from 'react';

import { LoginContainer, FormBox } from './Login.style';
import Text from 'components/Text';

import Input from 'components/Input';
import { PrimaryButton } from 'components/Button/Button';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Alert from 'components/Alert';

const Index = (): React.ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.number().min(6).required('Required'),
    }),
    onSubmit: (values) => {
      toast('Logged In Successfully');
      console.log(values);
    },
  });

  return (
    <main>
      <LoginContainer>
        <FormBox onSubmit={formik.handleSubmit}>
          <Text>Login</Text>
          <label htmlFor="email">
            <Input
              {...formik.getFieldProps('email')}
              elementSize="small"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
            {formik.errors.email && formik.touched.email ? (
              <Alert type="error">{formik.errors.email}</Alert>
            ) : null}
          </label>
          <label htmlFor="password">
            <Input
              {...formik.getFieldProps('password')}
              elementSize="small"
              placeholder="Enter your password"
              name="password"
              type="password"
            />
            {formik.errors.password && formik.touched.password ? (
              <Alert type="error">{formik.errors.password}</Alert>
            ) : null}
          </label>

          <PrimaryButton> Submit</PrimaryButton>
        </FormBox>
      </LoginContainer>
    </main>
  );
};

export default Index;
