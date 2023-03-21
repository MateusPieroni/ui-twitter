import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps{
    content: string
}

export function Tweet(props:TweetProps){
    return(
        <Link to="/status" className='tweet'>

            <img src="https://github.com/MateusPieroni.png" alt="Mateus Pieroni" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Mateus Pieroni</strong>
                    <span>@MateusPieroni</span>
                </div>

                <p>
                  {props.content}
                </p>

                <div className="tweet-content-footer">
                    <button>
                        <ChatCircle/>
                        20
                    </button>

                    <button>
                        <ArrowsClockwise/>
                        20
                    </button>

                    <button>
                        <Heart/>
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}