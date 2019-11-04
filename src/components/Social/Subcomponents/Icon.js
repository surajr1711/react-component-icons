import React from 'react'

import Linkedin from './Linkedin'
import Github from './Github'
import Codepen from './Codepen'
import Youtube from './Youtube'


const Icon = props => {
	switch (props.name) {
		case "linkedin":
			return <Linkedin {...props}/>;
		case "github":
			return <Github {...props}/>;
		case "codepen":
			return <Codepen {...props}/>;
		case "youtube":
			return <Youtube {...props}/>;
		default:
			return;
	}
	
}

export default Icon
