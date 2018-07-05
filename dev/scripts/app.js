import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Components/Navs/TopNav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: ['home', 'pages', 'features', 'gallery', 'blog', 'contact']
    };
  }

  render() {
    return (
      <main>
        <header>
          <TopNav menuItems = {this.state.menuItems}/>
        </header>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
