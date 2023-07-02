import { useState } from 'react'
import styles from './App.module.css'
import { Cards, Chart, Picker } from './components'

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <Picker />
      <Chart />
    </div>
  )
}

export default App
