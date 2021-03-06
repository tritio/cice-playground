import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props extends React.HTMLProps<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  submit?: boolean
}

export const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  submit
}) => {
  return (
    <button
      className={cx('button', theme, className)}

      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}


/* import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props {
  className?: string
  onClick?(): void
  theme?: 'primary' | 'secondary'
  submit?: boolean
}

export const Button: React.FunctionComponent<Props> = ({
  children,
  onClick,
  theme,
  className,
  submit = false
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={cx('button', theme, className)}
    >
      {children}
    </button>
  )
} */
