import { StateProvider } from './src/components/helpers/Context'
import './src/styles/Main.css'

import React from 'react'
import PropTypes from 'prop-types'

export const onClientEntry = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
