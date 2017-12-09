class Hello extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}

// Gets turned to

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello world`);
  }
}