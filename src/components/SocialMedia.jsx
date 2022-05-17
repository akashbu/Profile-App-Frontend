import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/akashbu"> <FaGithub /> </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/akash-butala-501760170/"> <FaLinkedin /> </a>
    </div>
    <div>
      <a href="https://www.instagram.com/a.k.a.s.h.02/"> <FaInstagram /> </a>
    </div>
  </div>
);

export default SocialMedia;
