import { useState } from 'react'
import styles from './App.module.css'
import { Cards } from './components'

function App() {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  )
}

export default App
