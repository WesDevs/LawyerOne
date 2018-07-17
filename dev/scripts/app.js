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
import AttorneysSection from './Components/AttorneysSection/AttorneysSection';
import ConsultationSection from './Components/ConsultationSection/ConsultationSection';
import RecentPostSection from './Components/RecentPostSection/RecentPostSection';
import ContactSection from './Components/ContactSection/ContactSection';
import WriteUsSection from './Components/WriteUsSection/WriteUsSection';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: ['home', 'pages', 'features', 'gallery', 'blog', 'contact'],
      socialMedias: [
        {
          icon:'fab fa-facebook-f',
          url: '#',
        }, 
        {
          icon:'fab fa-twitter',
          url: '#',
        },
        {  
          icon:'fab fa-google-plus',
          url: '#',
        }, 
        {
          icon:'fab fa-linkedin',
          url: '#'
        },
        { 
          icon:'fab fa-pinterest',
          url:'#'
        }
      ],
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
          buttonId: 'text2Button',
          textId: 'text1',
          appear: 'hide'
        },
        {
          title: 'Proven Cases',
          button: '+',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text3Button',
          textId: 'text2',
          appear: 'hide'
        },
        {
          title: 'Awards',
          button: '+',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text4Button',
          textId: 'text3',
          appear: 'hide'
        },
        {
          title: 'Experienced',
          button: '+',
          img: 'public/assets/photo-1496389395181-e5fdd5c0315e.jpg',
          text: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit.',
          buttonId: 'text5Button',
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
              buttonId: 'listButton1',
              listClass: 'advantage-buttons'
            },
            {
              button: 'Services',
              buttonId: 'listButton2',
              listClass: 'advantage-buttons'
            },
            {
              button: 'Results',
              buttonId: 'listButton3',
              listClass: 'advantage-buttons'

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
              listClass: 'list-content hide'
            },
            {
              image: 'public/assets/photo-5e.jpg',
              p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, tenetur voluptatem ad minus maiores voluptatibus aliquam voluptas distinctio rem.',
              listId: 'item3',
              listClass: 'list-content hide'
            },
          ]
        }
      },
      Attorneys: {
        title: 'Our Attorneys',
        h3: 'Meet Our Talented Team',
        data: [
          {
            image: 'public/assets/lawyer1.jpg',
            h5: 'Bobbi Bobberton',
            p: 'Civil Law',
            
            socials: [
            {
              url: '#',
              icon:'fab fa-facebook-f',
            } ,
            {
              url: '#',
              icon:'fab fa-twitter',
            },
            {
              url: '#',
              icon: 'fab fa-google-plus',
            }
          ]
          },
          {
            image: 'public/assets/lawyer2.jpg',
            h5: 'Bobbi Bobberton',
            p: 'Criminal Law',
            
            socials: [
            {
              url: '#',
              icon:'fab fa-facebook-f',
            },
            {
              url: '#',
              icon:'fab fa-twitter',
            },
            {
              url: '#',
              icon: 'fab fa-google-plus',
            }
          ]
          },
          {
            image: 'public/assets/lawyer3.jpg',
            h5: 'Bobbi Bobberton',
            p: 'Business Law',
            
            socials: [
            {
              url: '#',
              icon:'fab fa-facebook-f',
            },
            {
              url: '#',
              icon:'fab fa-twitter',
            },
            {
              url: '#',
              icon: 'fab fa-google-plus',
            }
          ]
          },
          {
            image: 'public/assets/lawyer4.jpg',
            h5: 'Bobbi Bobberton',
            p: 'Civil Law',
            
            socials: [
            {
              url: '',
              icon:'fab fa-facebook-f',
            },
            {
              url: '',
              icon:'fab fa-twitter',
            },
            {
              url: '',
              icon: 'fab fa-google-plus',
            }
          ]
          },
        ],
      },
      consultationForm: {
        fullName: true,
        email: true,
        phone: true,
        text: true,
        titleColored: 'Get ',
        title: 'Free Consultation!'
      },
      posts: [
        {
          src: 'public/assets/lawyer1.jpg',
          date: "January 06'15",
          name: 'Jen Anderson',
          title: 'Ut wisi enim ad minim veniam',
          postSrc: 'public/assets/photo-1e.jpg',
          likes: '8',
          url: '#'
        },
        {
          src: 'public/assets/lawyer2.jpg',
          date: "January 06'15",
          name: 'Jun Anderson',
          title: 'Ut wisi enim ad minim veniam',
          postSrc: 'public/assets/photo-3e.jpg',
          likes: '16',
          url: '#'
        },
      ],
      sponsorList: {
          data: [
            {
              image: 'public/assets/5887c551bc2fc2ef3a18604e.png',
            },
            {
              image: 'public/assets/image_gallery.png',
            },
            {
              image: 'public/assets/NASA-Logo-002.png',
            },
            {
              image: 'public/assets/logo-red-bull.png',
            },
            {
              image: 'public/assets/tropicana-new-logo.png',
            },
          ],
          style: 'sponsor-list'
      },
      contact: {
        data: [
          {
            image: 'public/assets/phone.png',
            h6: 'Phone: 9 (800) 695-2686',
            p: 'Fax: 8 (800) 659-2684'
          },
          {
            image: 'public/assets/mapmarker.png',
            p: 'PO Box 97845 Baker st. 567, Los Angeles, California, United States'
          },
          {
            image: 'public/assets/mailme.png',
            p: 'Email:justice@support.com'
          }
        ]
      },
      writeUs: {
        fullName: true,
        email: true,
        phone: true,
        text: true,
        subject: true,
        title: 'Write to Us',
        subheading: 'Contact Us via Contact Form'
      },
    };

    this.whyUsOnClick = this.whyUsOnClick.bind(this);
    this.advantagesOnClick = this.advantagesOnClick.bind(this);
  }

  whyUsOnClick(e) {
    let key = e.target.attributes[2].value;
    const text = document.getElementById(`text${key}`);
    const textArray = [];
    const buttonArray = [];
    this.state.WhyUsList.map((items) => {
      textArray.push(items.textId),
      buttonArray.push(items.buttonId)
    })

    if (e.target.innerHTML == '-') {
      textArray.map((items) => {
        document.getElementById(`${items}`).classList.add('hide');
      })
      buttonArray.map((items) => {
        document.getElementById(`${items}`).innerHTML = '+'
      })
      text.classList.remove('show')
    } else {
      textArray.map((items) => {
        document.getElementById(`${items}`).classList.add('hide');
      })
      buttonArray.map((items) => {
        document.getElementById(`${items}`).innerHTML = '+'
      })
      e.target.innerHTML = '-',
      text.classList.remove('hide'),
      text.classList.add('show')
    }
  }

  advantagesOnClick(e) {
    const advOne = document.getElementById('item1');
    const advTwo = document.getElementById('item2');
    const advThree = document.getElementById('item3');
    const contentArray = [];

    this.state.Advantages.content.data.map((id) => {
      contentArray.push(id.listId);
    })

    contentArray.map((id) => {
      document.getElementById(`${id}`).classList.add('hide');
    })

    if (e.target.id == 'listButton1') {
      advOne.classList.remove('hide');
      advOne.classList.add('show');
    } else if (e.target.id == 'listButton2') {
      advTwo.classList.remove('hide');
      advTwo.classList.add('show');
    } else if (e.target.id == 'listButton3') {
      advThree.classList.remove('hide');
      advThree.classList.add('show');
    }
  }

  render() {
    return (
      <main>
        <TopNav 
          menuItems = {this.state.menuItems}
          socialMedias = {this.state.socialMedias}
        />
        <header>
          <HeroText />
          <Menu data = {this.state.statList} />
        </header>
        <QuoteSection />
        <LawSection data = {this.state.laws} />
        <ImageGallery data = {this.state.imgGallery}/>
        <PracticeSection aside = {this.state.PracticesAside} main = {this.state.PracticesMain} />
        <ProcessSection data = {this.state.Process}/>
        <AboutSection whyus = {this.state.WhyUsList} onClick = {this.whyUsOnClick} services = {this.state.Services} advantages = {this.state.Advantages} advantagesOnClick = {this.advantagesOnClick}/>
        <AttorneysSection data = {this.state.Attorneys}/>
        <ConsultationSection data = {this.state.consultationForm} />
        <RecentPostSection data = {this.state.posts} sponsorList = {this.state.sponsorList}/>
        <ContactSection data= {this.state.contact}/>
        <WriteUsSection data = {this.state.writeUs}/>

      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
