import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Components/Header/TopNav';
import HeroText from './Components/Header/HeroText';
import Menu from './Components/menus/menu';
import QuoteSection from './Components/QuoteSection/QuoteSection';
import LawSection from './Components/LawsSection/LawSection';
import ImageGallery from './Components/ImageGallerySection/ImageGallery';
import PracticeSection from './Components/PracticesSection/PracticeSection';


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
      style: 'banner-stats',
      },
      laws: {
      data: [
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
      },
      imgGallery: {
        data:[
        {
          image:'public/assets/photo-1e.jpg',
        },
        {
          image:'public/assets/photo-2e.jpg',
        },
        {
          image:'public/assets/photo-3e.jpg',
        },
        {
          image:'public/assets/photo-4e.jpg',
        },
        {
          image:'public/assets/photo-5e.jpg',
        },
        ]
      },
      PracticesAside: {
        data: [
          {
            h3: 'Money Laundering'
          },
          {
            h3: 'Sexual Offences'
          },
          {
            h3: 'Insurance Services'
          },
          {
            h3: 'Drug Offences'
          },
          {
            h3: 'Drinking & Driving'
          },
          {
            h3: 'Shoplifting'
          },
          {
            h3: 'Fire Accident'
          },
        ]
      },
      PracticesMain: {
        data: [
          {
            p: 'Ut wisi enim ad minim veniam',
          },
          {
            p: 'Duis autem vel eum iriure dolor',
          },
          {
            p: 'Quis nostrud exerci ton ullamcorper suscipit',
          },
          {
            p: 'Hendrerit in vulputate velit esse molestie',
          },
          {
            p: 'Lobortis nisl aliquip ex ea commodo',
          },
          {
            p: 'Consequat vel illum dolore eu feugiat',
          },
        ]
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
          <Menu data = {this.state.statList} />
        </header>
        <QuoteSection />
        <LawSection data = {this.state.laws} />
        <ImageGallery data = {this.state.imgGallery}/>
        <PracticeSection aside = {this.state.PracticesAside} main = {this.state.PracticesMain} />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
