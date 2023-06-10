import React from 'react'
import Header from './Header'
import TaskList from '../Pages/TaskList/TaskList'

export default function Home() {
  return (
    <div id='main'>
        <Header/>
        <TaskList />
    </div>
  )
}
