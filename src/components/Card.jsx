import React, { Children } from 'react'

const Card = ({children, title}) => {
  return (
	<div className='hub-card'>
		{title && <div className="card-title"><h4>{title}</h4></div>}
		{children}
	</div>
  )
}

export default Card
