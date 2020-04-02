import React, {Component} from 'react' 
import axios from 'axios'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaBeer } from 'react-icons/fa';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'; 

library.add(fab, faCoffee)


const tweetUrl = "https://twitter.com/intent/tweet?text="

// component setup 
class RandomQuote extends Component { 
  constructor(props) { 
    super() 
    this.state = { 
      quote: '', 
      author: ''
    }
  } 

  componentDidMount(){ 
    this.getQuote()
  }

    getQuote() { 
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'


      axios.get(url)
        .then(res => {
          let data = res.data.quotes 
          let quoteNum = Math.floor(Math.random() * data.length) 
          let randomQuote = data[quoteNum] //actual quote

          this.setState({ 
            quote: randomQuote['quote'], 
            author: randomQuote['author']
          })
        })
    }

    getNewQuote = () => {  //will be called on clicking the New Quote button OR updated every day! setInterval
      this.getQuote()
    }


  render() { 
    const { quote, author} = this.state
    return( 
      <div className='quote-wrapper'> 

        <div id='quote-body'> 
          <div id='text'><p>"{quote}"</p></div>
        </div>

        <div className="quote-box">
          <span className="author">{author}  </span>
            <a className="bird"
              href={tweetUrl + this.state.quote + " -" + this.state.author}
              target="_blank"  
            >
            <FontAwesomeIcon icon={['fab', 'twitter']} /> 
            </a>
          </div>
        </div>
    )
  }
}

export default RandomQuote