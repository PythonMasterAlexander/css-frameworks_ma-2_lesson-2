import React from 'react';

function Footer(props) {
  return(
    <footer>
      <section>
        <h5>{props.content}</h5>
      </section>
    </footer>
  );
}

export default Footer;