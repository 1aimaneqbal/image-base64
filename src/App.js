import React, {useState} from 'react'
import ImageComponent from './components/ImageComponent'
import TextareaComponent from './components/TextareaComponent'
import { UilExchangeAlt } from '@iconscout/react-unicons'
import './styles/main.css'

const App = () => {
    const [showTab, setShowTab] = useState(true)
    const [image64, setImage64] = useState('')
    const showImgCompHandler= () =>{
        setShowTab(true)
    }
    const showTextCompHandler= () =>{
        setShowTab(false)
    }
    return (
        <>
            <nav>
                <h2>Image</h2>
                <UilExchangeAlt />
                <h2>Base64</h2>
            </nav>
            <div className="switcher">
                <div className={`showComp ${showTab?'activeComp':''}`} onClick={showImgCompHandler}>Image</div>
                <div className={`showComp ${showTab?'':'activeComp'}`} onClick={showTextCompHandler}>Code</div>
            </div>
            <div className="container">
                <form>
                    {
                        showTab ? (
                            <ImageComponent image64={image64} setImage64={setImage64}/>
                        ):(
                            <TextareaComponent image64={image64} setImage64={setImage64} />
                        )
                    }
                </form>
            </div>
        </>
    )
}

export default App
