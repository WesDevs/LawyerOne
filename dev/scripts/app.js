import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Components/Header/TopNav';
import HeroText from './Components/Header/HeroText';
import Menu from './Components/menus/menu';
import QuoteSection from './Components/QuoteSection/QuoteSection';
import LawSection from './Components/LawsSection/LawSection';
import ImageGallery from './Components/ImageGallerySection/ImageGallery';
import PracticeSection from './Components/PracticesSection/PracticeSection';
import ProcessSection from './Components/ProcessSection/ProcessSection';
import AboutSection from './Components/AboutSection/AboutSection';


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
      },
      Process: {
        data: [
          {
            h2: 'Request Quote',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            a: 'Send Request',
            href: '#'
          },
          {
            h2: 'Case Investigation',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            a: 'Know More',
            href: '#'
          },
          {
            h2: 'Case Fight ',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            a: 'View Results',
            href: '#'
          }
        ],
      },
      WhyUsList: [
        {
          title: 'Competitive Pricing', 
          button: '-',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text1Button',
          textId: 'text0',
          appear: 'show'
        },
        {
          title: 'Quality Talent',
          button: '+',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text1Button',
          textId: 'text1',
          appear: 'hide'
        },
        {
          title: 'Proven Cases',
          button: '+',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text1Button',
          textId: 'text2',
          appear: 'hide'
        },
        {
          title: 'Awards',
          button: '+',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text1Button',
          textId: 'text3',
          appear: 'hide'
        },
        {
          title: 'Experienced',
          button: '+',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text1Button',
          textId: 'text4',
          appear: 'hide'
        },
      ],
      Services: {
        data: [
        {
          p: 'At vero eos et accusam',
        },
        {
          p: 'Stet clita kasd gubergren no sea',
        },
        {
          p: 'Takimata sanctus',
        },
        {
          p: 'Lorem ipsum dolor sit amet',
        },
        {
          p: 'Consetetur sadipscing',
        },
        ]
      },
      Advantages: {
        headings:{
          data: [{
              button: 'Quality',
              buttonId: 'listButton1'
            },
            {
              button: 'Services',
              buttonId: 'listButton2'
            },
            {
              button: 'Results',
              buttonId: 'listButton3'
            }
          ]
        },
        content: {
          data: [{
              image: 'public/assets/photo-3e.jpg',
              p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, at delectus eius placeat veritatis mollitia in aperiam fugiat quae! Provide.',
              listId: 'item1',
              listClass: 'list-content'
            },
            {
              image: 'public/assets/photo-4e.jpg',
              p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fuga maxime tempore, consequuntur quis eligendi, assumenda nemo, porro iure er.s.',
              listId: 'item2',
              listClass: 'list-content'
            },
            {
              image: 'public/assets/photo-5e.jpg',
              p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, tenetur voluptatem ad minus maiores voluptatibus aliquam voluptas distinctio rem.',
              listId: 'item3',
              listClass: 'list-content'
            },
          ]
        }
      }
    };

    this.whyUsOnClick = this.whyUsOnClick.bind(this);
  }

  whyUsOnClick(e) {
    let key = e.target.attributes[2].value;
    const text = document.getElementById(`text${key}`);
    const allText = document.querySelectorAll('.whyus-texts');
    console.log(allText);
    if (e.target.innerHTML == '-') {
      e.target.innerHTML = '+',
      text.classList.remove('show'),
      text.classList.add('hide')
    } else {
      e.target.innerHTML = '-',
      text.classList.remove('hide'),
      text.classList.add('show')
    }
  }

  advantagesOnClick(e) {

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
        <ProcessSection data = {this.state.Process}/>
        <AboutSection whyus = {this.state.WhyUsList} onClick = {this.whyUsOnClick} services = {this.state.Services} advantages = {this.state.Advantages}/>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
