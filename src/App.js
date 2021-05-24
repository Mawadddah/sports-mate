import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

import{Button, Container, Menu, Icon} from "semantic-ui-react";


function App() {
  return (
  
      <Menu>
        <Container className='navBar'>
        <Menu.Item><Icon fitted name='sidebar' size='large'/></Menu.Item>
        <Menu.Item><Icon fitted name='home' size='large'/></Menu.Item>
        <Menu.Item><Icon fitted name='user circle' size='large'/></Menu.Item>
    </Container>
    </Menu>
   
  );
}
export default App;
