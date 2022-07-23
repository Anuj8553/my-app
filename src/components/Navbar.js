import React from 'react'
// import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutUs}</a>
                        </li>

                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-light`}>
                        <input className="form-check-input justify-content-end" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
                    </div>
                </div>
            </nav>
        </>

    )
}
//to ensure we send correct properties like here we have set it to string if we will send int it will throw error on cosnole
Navbar.propTypes = {
    title: PropTypes.string.isRequired,//reqd.
    aboutText: PropTypes.string
}
//Default properties, if we don't send our props
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
};