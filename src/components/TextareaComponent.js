import React, {useState, useRef} from 'react'
import {UilHistory, UilCopy } from '@iconscout/react-unicons'

const TextareaComponent = ({image64, setImage64}) => {
    const textareaRef = useRef('null')
    const [text, setText] = useState('')
    const textAreaHandler = e =>{
        setText(e.target.value)
    }
    const copy64Handler = e =>{
        e.preventDefault()
        if(image64){
            navigator.clipboard.writeText(image64)
            alert("Copied to clipboard")
        }
    }
    const resetHandler = e =>{
        e.preventDefault()
        setText('')
        setImage64('')
    }
    const imageGeneratorHandler = e =>{
        e.preventDefault()
        if(text.substr(0,10)==="data:image"){
            setImage64(text)
        }
        else{
            alert("Invalid Base64 format")
        }
    }
    return (
        <div className="textareaContainer">
            <textarea onChange={textAreaHandler} value={text ? text : image64} ref={textareaRef} placeholder="Upload an image to automatically generate its Base64 value or paste a Base64 value here to generate an image."></textarea>
            <div className="textareabtns">
                <button onClick={imageGeneratorHandler}>Generate Image</button>
                <button onClick={copy64Handler}><UilCopy /> Copy</button>
                <button onClick={resetHandler}><UilHistory /> Reset</button>
            </div>
        </div>
    )
}

export default TextareaComponent
