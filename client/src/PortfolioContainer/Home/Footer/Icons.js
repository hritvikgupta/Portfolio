import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Crousel } from './Crousel';
import './Icons.css';

const Icons = () => {
    const iconLinkPairs = [
        [<Icon.Mailbox className="icons" color="black" size={50} />, 'mailto:hritvik7654@gmail.com'],
        [<Icon.Instagram className="icons" color="black" size={50}/>, 'https://www.instagram.com/_hritvikgupta/'],
        [<Icon.Linkedin className="icons" color="black" size={50}/>, 'https://www.linkedin.com/in/hritvik-gupta-link/'],
        [<Icon.Github className="icons" color="black" size={50}/>, 'https://github.com/hritvikgupta'],
      ];
      
      const icons = iconLinkPairs.map(pair => pair[0]); // Changed from 'images' to 'icons'
      const links = iconLinkPairs.map(pair => pair[1]);
      
    return (
    <div className="Icons-container">
      <div className="icon-carousel">
            {icons.map((icon, index) => (
                <a href={links[index]} key={index} className="icon-link">
                    {icon}
                </a>
            ))}
        </div>
    </div>
  )
}

export default Icons
