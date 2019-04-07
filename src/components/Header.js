import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item><Link to='/'>React Places</Link></Menu.Item>
    </Menu>
  );
};