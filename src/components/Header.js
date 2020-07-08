import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return <Menu secondary pointing>
        <Menu.Item as={Link} to="/" >Streamy</Menu.Item>
        menu
        <Menu.Menu position='right'>
            <Menu.Item as={Link} to="/" >Right</Menu.Item>
        </Menu.Menu>
    </Menu>
}

export default Header;