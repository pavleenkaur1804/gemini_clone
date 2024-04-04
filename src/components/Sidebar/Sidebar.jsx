import { useContext, useState } from 'react'
import './Sidebar.css'
import { Context } from '../../context/Context'


const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const { onSent, previousPrompts, newChat, setRecentPrompt } = useContext(Context)
    
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className="sidebar">

            <div className='top'>
                <img onClick={() => setExtended(prev => !prev)}
                    className="menu"
                    src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/Gemini_clone_logo%20(2).png?alt=media&token=9bbe623a-5637-4d65-a0ed-69b0bb0389d6'
                    alt='logo' />
            </div>
            <div className='middle'>
            <div
                onClick={() => newChat}
                className='new-chat'>
                <img alt='chat_icon'
                    src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/Gemini_clone_logo%20(4).png?alt=media&token=fd6df8c3-88e0-44a7-9f02-d32654b0e913' />
                {extended ? <p>New Chat</p> : null}
            </div>
            {extended ? <div className='recent'>
                <p className="recent-title">Recent</p>
                {previousPrompts && previousPrompts.map((item, index) => {
                    return (
                        <div
                            onClick={() => loadPrompt(item)}
                            key={index}
                            className='recent-entry'>
                            <img alt='message_icon'
                                src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/message_icon%20(1).png?alt=media&token=8fd258cd-a810-49d8-85eb-099a8c697bb6' />
                            <p>{item.slice(0,18)} ...</p>
                        </div>
                    )
                })}

            </div> : null}
            </div>
           

            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/question_icon%20(1).png?alt=media&token=fd35637b-854a-4de6-ae0a-5d0c413e84e3'
                        alt='' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/question_icon%20(2).png?alt=media&token=b04c466f-4393-4eae-ac59-6d6d4397cab5'
                        alt='' />
                    {extended ? <p>History</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/gemini-aiclone.appspot.com/o/Gemini_clone_logo%20(6).png?alt=media&token=e62684ab-4995-4c49-9b8c-1dc601f0391a'
                        alt='' />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
