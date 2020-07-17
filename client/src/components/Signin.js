import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {login,logout} from '../slices/auth'

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({email,password}))
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => onChange(e)}
          name="email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="signin" name="" id="" />
      </form>
    </div>
  );
};

export default Signin;
