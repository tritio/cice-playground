import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

interface Props {
  label: string
  value: string
  required?: boolean
  onChange(value: string): void
}

export const TextInput: React.FunctionComponent<Props> = ({ label, value, onChange, required }) => {
  return (
    <label>
      {label}
      <br/>
      <input
        required
        className={cx('input', { required : required })}
        onChange={event => onChange(event.target.value)}
        value={value}
      />
    </label>
  )
}
