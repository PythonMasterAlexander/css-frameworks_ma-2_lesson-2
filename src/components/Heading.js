import React from 'react';

function Heading(props) {
  console.log(props);
  return(
    <heading>
      <nav>
        <a className='navigation__logo-link' href="../public/index.html">{props.content}</a>
      </nav>
    </heading>
  )
}

export default Heading;
