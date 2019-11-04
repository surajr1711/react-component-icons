import React from 'react'
import './social.scss'
import Icon from './Subcomponents/Icon'

const Social = () => {
	return (
		<div className="social">
			<div className="container">
				<div className="icon-wrapper">
					<Icon name="linkedin" className="linkedin"/>
					<Icon name="github" className="github"/>
					<Icon name="codepen" className="codepen"/>
					<Icon name="youtube" className="youtube"/>
				</div>
			</div>
		</div>
	)
}

export default Social
