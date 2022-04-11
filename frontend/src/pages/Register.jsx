import {FaUser} from 'react-icons/fa';
import {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register, reset} from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password, password2} = formData;

  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState, [e.target.name]: e.target.value,
    }))

  }
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <section className="heading">
      <h1> <FaUser /> Register</h1>
      <p>Please Create an account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" 
            id="name" name="name" value={name}
            placeholder="enter your name" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" 
            id="email" name="email" value={email}
            placeholder="enter your email" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" 
            id="password" name="password" value={password}
            placeholder="enter your password" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" 
            id="password2" name="password2" value={password2}
            placeholder="Comfirm your password" onChange={onChange}/>
        </div>
        <div className="form-group">
          <button type="submit" className='btn btn-block'>Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Register