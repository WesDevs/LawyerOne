import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Components/Header/TopNav';
import HeroText from './Components/Header/HeroText';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: ['home', 'pages', 'features', 'gallery', 'blog', 'contact'],
      socialMedias: ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-pinterest']
    };
  }

  render() {
    return (
      <main>
        <header>
          <TopNav 
          menuItems = {this.state.menuItems}
          socialMedias = {this.state.socialMedias}
          />
          <HeroText />
        </header>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
