import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {

    return (
        <div className='full-container'>
            <div className='background-unit b0'></div>
            <div className='background-unit b1'></div>
            <div className='background-unit b2'></div>
            <div className='background-unit b3'></div>
            <div className='background-unit b4'></div>
            <div className='background-unit b5'></div>
            <div className='background-unit b6'></div>
            <div className='background-unit b7'></div>
            <div className='background-unit b8'></div>
            <div className='background-unit b9'></div>
            <div className='background-unit b10'></div>

            <div className='container'>
                <div className='back-left'>
                    <div className='nom-prenom'>
                        <div className='my-name'><p>Laurent</p></div>
                        <div className='my-name'>Simon</div>
                    </div>
                </div>
                <div className='back-right'>
                    <div className='back-nav about'><Link to="/about"><p className='p-nav-about'>Présentation</p></Link></div>
                    <div className='back-nav works'><Link to="/works"><p className='p-nav-works'>Projets</p></Link></div>
                    <div className='back-nav skills'><Link to="/skills"><p className='p-nav-skills'>Compétences</p></Link></div>
                </div>
            </div>
        </div>
    );
}

export default Nav;