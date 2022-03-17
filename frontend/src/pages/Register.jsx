import {FaUser} from 'react-icons/fa';
import {useState, useEffect } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password, password2} = formData;

  const onChange = ()=>{
    
  }

  return (
    <>
    <section className="heading">
      <h1> <FaUser /> Register</h1>
      <p>Please Create an account</p>
    </section>

    <section className="form">
      <form>
        <div className="form-group">
          <input type="text" className="form-control" 
            id="name" name="name" value={name}
            placeholder="enter your name" onChange={onChange}/>
        </div>
      </form>
    </section>
    </>
  )
}

export default Register