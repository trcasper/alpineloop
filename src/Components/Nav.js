import React from 'react';
import {Link} from 'react-router-dom';
import '.Nav.scss';

class Nav extends React.Component {
    constructor() {
        super();

        this.dropdwon = React.createRef();
    }

    render() {
        return (
            <div className="Nav"></div>
        )
    }
}

export default Nav;