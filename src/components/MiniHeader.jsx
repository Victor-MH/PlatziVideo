import React from 'react';
import '../assets/styles/components/MiniHeader.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';

const MiniHeader = () => (
    <header className="header_logs">
        <img className="header__img" src={ logo } alt="Platzi Video" />
    </header>
);

export default MiniHeader;