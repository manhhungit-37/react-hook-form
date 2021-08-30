import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


function Login() {
  const { register, handleSubmit, reset, setFocus, getValues, formState: { isSubmitSuccessful, errors } } = useForm({
    defaultValues: {
      remember: true
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        password: ""
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful])

  useEffect(() => {
    setFocus("email");
  }, [setFocus])

  console.log(getValues("email"))

  return (
    <div>
      <h1 className="text-center">Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <input 
          type="text"
          id="email"
          placeholder="Email *"
          {...register("email", 
            {
              required: "Please enter your email!",
              minLength: {
                value: 6,
                message: "Please enter your email with at least 6 characters!"
              },
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email address!"
              }
            }            
          )}
        />
        {errors.email && <span className="text-danger">{errors.email.message}</span>}
        <input 
          type="text"
          id="password"
          placeholder="Password *"
          {...register("password", 
            {
              required: "Please enter your password",
              minLength: {
                value: 6,
                message: "Please enter your password at with least 6 characters!"
              }
            },
          )}
        />
        {errors.password && <span className="text-danger">{errors.password.message}</span>}
        <label htmlFor="remember" className="remember">
          <input type="checkbox" id="remember" {...register("remember")}/>
          Remember Me
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
