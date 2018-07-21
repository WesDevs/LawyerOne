import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Components/Header/TopNav';
import HeroText from './Components/Header/HeroText';
import Menu from './Components/menus/menu';
import QuoteSection from './Components/QuoteSection/QuoteSection';
import PracticeSection from './Components/PracticesSection/PracticeSection';
import AboutSection from './Components/AboutSection/AboutSection';
import RecentPostSection from './Components/RecentPostSection/RecentPostSection';
import Section from './Components/Section/Section'

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
            h4: 'Happy Clients',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae non ad alias veniam corporis beatae nisi ex praesentium molestias!',
            
          },
          {
            h3: '95%',
            h4: 'Case Success',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae non ad alias veniam corporis beatae nisi ex praesentium molestias!',
          },
          {
            h3: '$250k+',
            h4: 'Recovered',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae non ad alias veniam corporis beatae nisi ex praesentium molestias!',
          },
          {
            h3: '500+',
            h4: 'Cases Done',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae non ad alias veniam corporis beatae nisi ex praesentium molestias!',
          },
        ],
        style: 'banner-stats',
      },
      quoteSection: {
        h1a: 'We are ',
        span: 'Passionate About Helping',
        h1b: 'Clients Achieve Their Goals',
        p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae amet, praesentium eveniet deleniti quas dicta, nesciunt aliquam, quo at ad culpa iure fugit est possimus cum non numquam laudantium!',
        p2: '- Jason Willis, Judge -'
      },
      laws: {
        sectionClass: 'laws-section',
        data: [
          {
            icon: 'fas fa-gavel',
            h3: 'Civil Law',
            p: 'Tempor invidunt ut labore dolore magna aliquyam.',
            a: 'Know More'
          },
          {
            icon: 'fas fa-balance-scale',
            h3: 'Criminal Law',
            p: 'Tempor invidunt ut labore dolore magna aliquyam.',
            a: 'Know More'
          },
          {
            icon: 'fas fa-suitcase',
            h3: 'Business Law',
            p: 'Tempor invidunt ut labore dolore magna aliquyam.',
            a: 'Know More'
          },
        ]
      },
      imgGallery: {
        sectionClass: 'image-gallery',
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
            image: 'public/assets/wallet.png',
            h3: 'Money Laundering'
          },
          {
            image: 'public/assets/hold.png',
            h3: 'Sexual Offences'
          },
          {
            image: 'public/assets/diamond.png',
            h3: 'Insurance Services'
          },
          {
            image: 'public/assets/flask.png',
            h3: 'Drug Offences'
          },
          {
            image: 'public/assets/beer.png',
            h3: 'Drinking & Driving'
          },
          {
            image: 'public/assets/criminal.png',
            h3: 'Shoplifting'
          },
          {
            image: 'public/assets/fire.png',
            h3: 'Fire Accident'
          },
        ]
      },
      PracticesMain: {
        data: [
          {
            image: 'public/assets/maps-and-flags.png',
            p: 'Ut wisi enim ad minim veniam',
          },
          {
            image: 'public/assets/maps-and-flags.png',
            p: 'Duis autem vel eum iriure dolor',
          },
          {
            image: 'public/assets/maps-and-flags.png',
            p: 'Quis nostrud exerci ton ullamcorper suscipit',
          },
          {
            image: 'public/assets/maps-and-flags.png',
            p: 'Hendrerit in vulputate velit esse molestie',
          },
          {
            image: 'public/assets/maps-and-flags.png',
            p: 'Lobortis nisl aliquip ex ea commodo',
          },
          {
            image: 'public/assets/maps-and-flags.png',
            p: 'Consequat vel illum dolore eu feugiat',
          },
        ]
      },
      Process: {
        sectionClass: 'process-section',
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
          image: 'public/assets/medal.png',
          p: 'At vero eos et accusam',
        },
        {
          image: 'public/assets/medal.png',
          p: 'Stet clita kasd gubergren no sea',
        },
        {
          image: 'public/assets/medal.png',
          p: 'Takimata sanctus',
        },
        {
          image: 'public/assets/medal.png',
          p: 'Lorem ipsum dolor sit amet',
        },
        {
          image: 'public/assets/medal.png',
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
        sectionClass: 'attorneys-section',
        h1: 'Our Attorneys',
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
        sectionClass: 'consultation-section',
        span: 'Get ',
        h1: 'Free Consultation!',
        form: {
          fullName: true,
          email: true,
          phone: true,
          text: true,
        }

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
        sectionClass: 'contact-section',
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
        sectionClass: 'writeus-section',
        h1: 'Write to Us',
        h3: 'Contact Us via Contact Form',
        form: {
          fullName: true,
          email: true,
          phone: true,
          text: true,
          subject: true,
          title: 'Write to Us',
          subheading: 'Contact Us via Contact Form'
        }
 
      },
      footer: {
        sectionClass: 'footer-section',
        data: [
          {
            h1: 'Law Practice',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt assumenda asperiores modi quo quod dolore, aut alias similique, voluptas, accusamus culpa! Debitis sequi repellat error. Perspiciatis est, illum veniam qui.',
            a: 'Purchase',
            href: '#'
          },
          {
            h1: 'Subscribe',
            form: true, 
            inputId: 'subtscribeInput',
            placeholder: 'Your Email',
            submit: '+',
            p: 'Subscribe to Our Newsletter to be updated. We promise not to spam You!',
          },
          {
            h1: 'Latest Tweets',
            tweet: [
              {
                text: 'Our interview with #Disney lead designer Ryan Terry has just been published ',
                href: 'http://enva.to.n-QkkH',
                ahref: '#',
                tweetName: 'Envato',
                tweetDate: '2 Days Ago'
              },
              {
                text: "The Web's Grain - A view on designing for the web by Frank Chimero",
                href: 'http://enva.to/GnJEy',
                ahref: '#',
                tweetName: 'Envato',
                tweetDate: '5 Days Ago'
              }
            ]
          },
        ],
      },
      endnote: {
        sectionClass: 'endnote',
        h3: 'Made by Wesley Ho',
        p: '© Justice 2015 | Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY | Images by Tamarcus Brown/Giammarco Boscaro/William Stitt from www.unsplash.com'
      }
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
        <QuoteSection data = {this.state.quoteSection}/>
        <Section data = {this.state.laws} />
        <Section data = {this.state.imgGallery}/>
        <PracticeSection aside = {this.state.PracticesAside} main = {this.state.PracticesMain} />
        <Section data = {this.state.Process}/>
        <AboutSection whyus = {this.state.WhyUsList} onClick = {this.whyUsOnClick} services = {this.state.Services} advantages = {this.state.Advantages} advantagesOnClick = {this.advantagesOnClick}/>
        <Section data = {this.state.Attorneys}/>  
        <Section data = {this.state.consultationForm} />
        <RecentPostSection data = {this.state.posts} sponsorList = {this.state.sponsorList}/>
        <Section data = {this.state.contact}/>
        <Section data = {this.state.writeUs}/>
        <Section data = {this.state.footer}/>
        <Section data = {this.state.endnote}/>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
