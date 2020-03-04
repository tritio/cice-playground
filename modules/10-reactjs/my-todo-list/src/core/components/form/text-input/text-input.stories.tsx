import React,  { useState } from 'react'
import { TextInput } from './text-input'

export default {
  title: 'TextInput',
  component: TextInput
}



const WithState: React.FC<{ isRequired: boolean, name: string }> = ({ isRequired, name }) => {
  const [value, setValue] = useState('')

  return (
    <>
      <TextInput
          required={isRequired}
          value={value}
          label={name}
          onChange={setValue}>
      </TextInput>
      {value}
    </>
  )
}

export const base = () => <WithState isRequired={false} name='Nombre y apellidos' />
export const required = () => <WithState isRequired= {true} name='Nombre y apellidos **'/>
