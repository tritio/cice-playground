import { bind } from '../../../../utils/bind'
import styles from './todo.module.css'
import React from 'react'
import { Todo as TodoModel } from '../../domain/todo'
import { Card } from '../../../../core/components/card/card'

const cx = bind(styles)

interface Props {
  onClick(): void
  todo: TodoModel
}

export const Todo: React.FunctionComponent<Props> = ({ onClick, todo }) => (
  <Card>
    <div onClick={onClick}>
      <li className={cx({ completed: todo.completed })}>{todo.title}</li>
    </div>
  </Card>
)
