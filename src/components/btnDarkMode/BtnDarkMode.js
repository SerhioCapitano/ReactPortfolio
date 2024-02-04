import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/UseLocalStorage'
import sun from './Sun.svg'
import moon from './Moon.svg'

import './style.css'
const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light')

  const btnRef = useRef(null)

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [darkMode])

  const toogleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toogleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode
