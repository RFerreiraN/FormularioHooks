import {useState} from 'react'

export const Formulario = () => {
  return (
   <form>
  <div className="form-group">
    <label htmlForfor="username">User Name</label>

    <input type="email" 
           className="form-control" 
           name="username" 
           placeholder="Enter Username"/>

  </div>

  <div className="form-group">
    <label htmlForfor="password">Password</label>

    <input type="password" 
           className="form-control" 
           id="password" 
           placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
