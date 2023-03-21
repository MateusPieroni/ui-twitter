import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'



export function AulaDoBoi(){

    // estado = variáveis que o react monitora, onde os valores são alterados
     
   
      const [tweets, setTweets] = useState(() => {
        const storagedTweets = localStorage.getItem('@Testes')
        if (storagedTweets) {
          return JSON.parse(storagedTweets)
        }
        return []
      })
      const [newTweet, setNewTweet] = useState('') 

    function createNewTweet(event: FormEvent /* O FormEvent é necessário pq a função está fora do HTML, e precisa dizer qual o tipo de evento, nesse caso é um evento de formulário, tipo "submit" */){
        event.preventDefault()
        localStorage.setItem(
            '@Testes',
            JSON.stringify([...tweets, newTweet])
          )
        setTweets([...tweets,newTweet])/* setTweets é usado para atualizar o valor da variável tweets (lá em cima). Criar novas versões daquela informação */
        setNewTweet('')
    }

    return(
        <main className='timeline'>

            <Header title="Home"/>

            <form onSubmit={createNewTweet} className='new-tweet-form'>
                <label htmlFor="tweet">
                    <img src="https://github.com/MateusPieroni.png" alt="Mateus Pieroni" />
                    <textarea
                     id='tweet' 
                     placeholder="What's Happening?" 
                     value={newTweet}
                     onChange={(event) => {
                        setNewTweet(event.target.value)
                     }}
                     />
                </label>

                <button type='submit'>Tweet</button>
            </form>

            <Separator/>

            {tweets.map((tweet:any) => {
            return <Tweet key={tweet} content={tweet}/>
            })
            }

    </main>
    )
}