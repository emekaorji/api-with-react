import React from 'react';

export default function Divider(props) {
  const divider = {
    main: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '1em 0'
    },
    hr: {
      width: '40%',
      height: '1px',
      backgroundColor: '#fff7'
    }
  }

  return (
    <div style={divider.main}>
      <div className='hr' style={divider.hr}></div>
      <div>{props.children}</div>
      <div className='hr' style={divider.hr}></div>
    </div>
  )
}
