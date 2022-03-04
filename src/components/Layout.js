import React from 'react'
import { Navbar } from './Navbar'

export function Layout(props) {
  const layout = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <>
      <Navbar />
      <div style={layout}>{props.children}</div>
    </>
  )
}
