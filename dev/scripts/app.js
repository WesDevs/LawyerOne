import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Components/Header/TopNav';
import HeroText from './Components/Header/HeroText';
import Menu from './Components/menus/menu';
import QuoteSection from './Components/QuoteSection/QuoteSection';
import LawSection from './Components/LawsSection/LawSection';


class App extends React.Component {
  constructor() {
    super();
    this.statList = [{
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
    ];
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
      style: 'banner-stats',
    },
    laws: [
        {
          icon: 'fas fa-gavel',
          h3: 'Civil Law',
          p: 'Tempor invidunt ut labore dolore magna aliquyam.'
        },
        {
          icon: 'fas fa-balance-scale',
          h3: 'Criminal Law',
          p: 'Tempor invidunt ut labore dolore magna aliquyam.'
        },
        {
          icon: 'fas fa-suitcase',
          h3: 'Business Law',
          p: 'Tempor invidunt ut labore dolore magna aliquyam.'
        },
      ]
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
        <LawSection laws = {this.state.laws} />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
