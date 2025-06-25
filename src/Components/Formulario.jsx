import {useState} from 'react'

export const Formulario = () => {

  const [formState, setFormState] = useState({
    username : '',
    email : '',
    password : ''
  })

  const { username, email, password } = formState;

  const handleForm = ( event ) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name] : value
    })
  }

  const onSubmitForm = (event) => {
      event.preventDefault()
      console.log(formState)
      setFormState({
        username : '',
        password : '',
        email : ''
      })
  }

  return (
   <form onSubmit={ onSubmitForm }>
  <div className="form-group">
    <label htmlFor="username">User Name</label>

    <input type="text" 
           className="form-control" 
           name="username" 
           placeholder="Enter Username"   
           value={ username }
           onChange={ handleForm }
    />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>

    <input type="password" 
           className="form-control" 
           name="password" 
           placeholder="Password" 
           value={ password }
           onChange={ handleForm }      
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>

    <input type="email" 
           className="form-control" 
           name="email" 
           placeholder="Email"
           value={ email }
           onChange={ handleForm }
            
    />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
