import React, {useState} from 'react';
import LoginComponent from '../../components/Login';

const Login = () => {
  // const [value, onChangeText] = React.useState("");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please enter a user name'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter a password'};
      });
    }
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Login;
