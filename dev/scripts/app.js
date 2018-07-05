import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Components/Header/TopNav';
import HeroText from './Components/Header/HeroText';
import Menu from './Components/menus/menu';
import QuoteSection from './Components/QuoteSection/QuoteSection';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: ['home', 'pages', 'features', 'gallery', 'blog', 'contact'],
      socialMedias: ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-pinterest'],
      statList: {
        data : [
        {
          h3: '900+',
          p: 'Happy Clients',
        },
        {
          h3: '95%',
          p: 'Cases Success',
        },
        {
          h3: '$250k+',
          p: 'Recovered',
        },
        {
          h3: '500+',
          p: 'Cases Done',
        },
      ],
      style: 'banner-stats'
    }
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
          <Menu statList = {this.state.statList} />
        </header>
        <QuoteSection />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
