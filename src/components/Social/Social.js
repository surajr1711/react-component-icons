import React from 'react'
import './social.scss'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import codepen from '../../assets/images/codepen.svg'
import youtube from '../../assets/images/youtube.svg'

const Social = () => {
	return (
		<div className="social">
			<div className="container">
				<div className="icon-wrapper">
					<img src={linkedin} alt="linkedin"/>
					<img src={github} alt="github"/>
					<img src={codepen} alt="codepen"/>
					<img src={youtube} alt="youtube"/>
				</div>
			</div>
		</div>
	)
}

export default Social
