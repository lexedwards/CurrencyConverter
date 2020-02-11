import React from 'react'
import PropTypes from 'prop-types'
import { StateProvider } from './src/components/helpers/Context'
import { Reducer } from './src/components/helpers/Reducer'
import initState from './src/components/helpers/initState'
import './src/styles/Main.css'

export const onClientEntry = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export const wrapRootElement = ({ children }) => (
  <StateProvider initialState={initState} reducer={Reducer}>
    {children}
  </StateProvider>
)

wrapRootElement.propTypes = {
  children: PropTypes.element.isRequired,
}
