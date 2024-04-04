import { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Context'

function Main() {
    const { input, onSent,
        recentPrompt, showResult, loading, resultData,
        setInput,
    } = useContext(Context)
    const context = useContext(Context)
    console.log('context', context)
    return (
        <div
            className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/woman.png?alt=media&token=3a82f1c4-cbf6-4c54-bbb4-bbe5658e77df' alt='' />
            </div>
            <div className='container'>
                {!showResult ? <>
                    <div className='greet'>
                        <p><span>Hello, Dev.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <p>Suggest beautiful places to see on upcoming road</p>
                            <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/compass_icon.png?alt=media&token=d2542ed5-0758-4db7-9055-d562373dbc1a' alt='compass_icon' />
                        </div>
                        <div className='card'>
                            <p>Briefly summarize places to see an upcoming road trip </p>
                            <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/bulb_icon.png?alt=media&token=0600c78a-50ae-4707-83b3-e152e9cc29aa' alt='bulb_icon' />
                        </div>
                        <div className='card'>
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/message_icon%20(2).png?alt=media&token=259b9fcd-7c0f-46f8-b070-8013a0396968' alt='message_icon' />
                        </div>
                        <div className='card'>
                            <p>Improve the readability of the following code</p>
                            <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/code_icon.png?alt=media&token=72ec87fa-2601-445d-968e-8480186a2d03' alt='code_icon' />
                        </div>
                    </div>
                </> : <div className='result'>
                    <div className='result-title'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/woman.png?alt=media&token=3a82f1c4-cbf6-4c54-bbb4-bbe5658e77df" alt='user_icon' />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className='result-data'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/Gemini_clone_logo.png?alt=media&token=71a4e421-47f8-4a05-9983-42e1c9f6ccf3" alt='gemini_logo' />
                    {loading ? <div className='loader'>
                        <hr/>
                        <hr/>
                        <hr/>
                    </div>: <div dangerouslySetInnerHTML={{ __html: resultData }} /> }                   
                </div>
                </div>}
            
                <div className='bottom'>
                    <div className='search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            {input?<img onClick={() => onSent()}
                                src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/send_icon.png?alt=media&token=f085d438-86c5-4d20-a048-e2d4220c2de7' alt='send_icon' /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
