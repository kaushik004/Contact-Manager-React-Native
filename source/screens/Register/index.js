import React, {useState} from 'react';
import RegisterComponet from '../../components/SignUp';
import envs from '../../config/env';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {BACKEND_URL} = envs;

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'Please enter minimun 6 character'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is require'};
      });
    }
  };

  const onSubmit = () => {
    // validation
    console.log('Form:>>', form);
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please enter a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please enter a last name'};
      });
    }
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please enter a user name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter a password'};
      });
    }
  };

  return (
    <RegisterComponet
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default SignUp;
