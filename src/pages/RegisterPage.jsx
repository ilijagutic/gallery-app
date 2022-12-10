import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../store/auth/slice'

const RegisterPage = () => {
const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  terms_and_conditions: false
})
const dispatch = useDispatch();


const onChangeHandler = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }))
}
const onSubmitHandler = (e) => {
  e.preventDefault()
  const userData = {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    terms_and_conditions
  }
  dispatch(register(formData))
}
const { first_name, last_name, email, password, password_confirmation, terms_and_conditions } = formData;
return (
  <>
  <h1>Registracija</h1>
  <div className='containter m-3 text-center'>
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
      <label>Ime : </label>
        <input
          className='form-control'
          type="text"
          name="first_name"
          id="first_name"
          placeholder='Unesite ime'
          value={first_name}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
      <label>Prezime : </label>
        <input
          className='form-control'
          type="text"
          name="last_name"
          id="last_name"
          placeholder='Unesite prezime'
          value={last_name}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
      <label>e-mail : </label>
        <input
          className='form-control'
          type="email"
          name="email"
          id="email"
          placeholder='Unesite email'
          value={email}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
      <label>Sifra : </label>
        <input
          className='form-control'
          type="password"
          name="password"
          id="password"
          placeholder='Unesite sifru'
          value={password}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
      <label>Potvrdite sifru : </label>
        <input
          className='form-control'
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder='Potvrdite sifru'
          value={password_confirmation}
          onChange={onChangeHandler}
        />
      </div>
      <div className='form-group form-check'>
        <input
          type='checkbox'
          required
          className='form-check-input'
          name='terms_and_conditions'
          checked={terms_and_conditions}
          onChange={(e) =>
            setFormData({
              ...formData,
              terms_and_conditions: e.target.checked,
            })
          }
          id='terms_and_conditions'
        />
        <label htmlFor='terms_and_conditions' className='form-check-label'>
          Slazem se sa opstim uslovima
        </label>
      </div>
      <div className="form-group">
        <button type="submit" className='btn btn-primary'>Registracija</button>
      </div>
    </form>
  </div>
</>  
)
}

export default RegisterPage;