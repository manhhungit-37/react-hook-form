import React from 'react'
import { Controller, useForm } from 'react-hook-form'

function ControllerLogin() {
  const { handleSubmit, control } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller 
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => {
            return <input {...field} />
          }}
        />
        <Controller 
          control={control}
          name="password"
          defaultValue=""
          render={({ field }) => {
            return <input {...field} />
          }}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ControllerLogin
