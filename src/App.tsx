import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={2}>
        <MenuItem index={0}>link1</MenuItem>
        <MenuItem index={1}>link2</MenuItem>
        <MenuItem index={2}>link3</MenuItem>
      </Menu>
      <Menu defaultIndex={1}>
        <MenuItem index={0}>link1</MenuItem>
        <MenuItem index={1}>link2</MenuItem>
        <MenuItem index={2}>link3</MenuItem>
      </Menu>
      <Button>Default</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Disabled Link</Button>
    </div>
  );
}

export default App;
