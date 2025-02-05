import { useState } from 'react'
import { Toaster, toast } from 'sonner'

const RegisterPage = () => {
  const [users, setUsers] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password, confirmPassword } = users

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.error('Por favor todos los campos deben estar llenos')
      return
    }

    if (password !== confirmPassword) {
      toast.error('las contraseñas no coinciden')
      return
    }
    toast.success('Registro Exitoso')
    setUsers({ email: '', password: '', confirmPassword: '' })
    // comentario
  }

  return (
    <main className='container my-5 py-5 h-100'>
      <section className='row justify-content-center  h-100'>
        <article className='col-10 col-sm-8 col-md-6'>
          <div className='card shadow-sm bg-dark text-light border-light mb-3 p-3'>
            <div className='card-body'>
              <h1 className='card-title text-center fw-bold'>Register</h1>
              <Toaster position='top-center' richColors expand />
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={users.email}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Enter your email'
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    value={users.password}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Enter your password'
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='confirmPassword' className='form-label'>
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    name='confirmPassword'
                    value={users.confirmPassword}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Confirm your password'
                  />
                </div>

                <button
                  type='submit'
                  className='btn btn-success w-100 mt-3 fw-bold fs-5'
                // disabled={!users.email || !users.password || !users.confirmPassword}
                >
                  Create account
                </button>
              </form>

            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
export default RegisterPage
