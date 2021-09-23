import { useRoute } from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const {params} = useRoute();

  useEffect(() => {
    if(params?.data) {
      console.log('params:>>', params);
      setJustSignedUp(true);
      setForm({...form, userName: params.data.username})
    }
  }, [params])

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});

    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is require'};
      });
    }
  };
  const onSubmit = () => {
    // validation
    // console.log('Form:>>', form);
    if (form.userName && form.password) {
      console.log("Submitting");
      loginUser(form)(authDispatch);
    }

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
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
