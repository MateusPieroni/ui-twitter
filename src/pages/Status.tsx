import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'


export function Status(){

    const [answer /* variável que vai ser alterada */ , setAnswer /* função utilizada para alterar a variável tweets */] = useState([
        'Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso!'
      ])

      const [newAnswer, setNewAnswer] = useState('') 

    function createNewAnswer(event: FormEvent /* O FormEvent é necessário pq a função está fora do HTML, e precisa dizer qual o tipo de evento, nesse caso é um evento de formulário, tipo "submit" */){
        event.preventDefault()

        setAnswer([...answer,newAnswer])/* setTweets é usado para atualizar o valor da variável tweets (lá em cima). Criar novas versões daquela informação */
        setNewAnswer('')
    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
            setAnswer([...answer,newAnswer])/* setTweets é usado para atualizar o valor da variável tweets (lá em cima). Criar novas versões daquela informação */
            setNewAnswer('')
        }
    }

    return(
        <main className='status'>

            <Header title="Tweet"/>

            <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nesciunt dolores ad ducimus velit sunt modi at libero animi voluptatibus laborum quibusdam ipsa, consectetur quidem! Aut ea beatae iste odio!"/>

            <Separator/>

            <form onSubmit={createNewAnswer} className='answer-tweet-form'>
                <label htmlFor="tweet">
                    <img src="https://github.com/MateusPieroni.png" alt="Mateus Pieroni" />
                    <textarea 
                    id='tweet'
                     placeholder="Tweet your answer" 
                     value={newAnswer}
                     onKeyDown = {handleHotkeySubmit}
                     onChange = {(event) => {
                        setNewAnswer(event.target.value)
                     }}
                     />
                </label>

                <button type='submit'>
                    <PaperPlaneRight/>
                   <span>Answer</span>
                    </button>
            </form>

            {answer.map(answer => {
                return <Tweet key={answer} content={answer}/>
                })
                }

    </main>
    )
}