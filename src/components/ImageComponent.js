import React, {useState, useRef} from 'react'
import { UilTimes, UilCloudUpload } from '@iconscout/react-unicons'

const ImageComponent = ({image64, setImage64}) => {
    const inputRef = useRef(null)
    const [imageName, setImageName] = useState('')
    const imageSelectHandler = (e) =>{
        setImageName(e.target.files[0].name)
        encodeFileBase64(e.target.files[0])
    }
    const clickInput = e =>{
        e.preventDefault()
        inputRef.current.click()
    }
    const cancelSelectedImage = e =>{
        e.preventDefault()
        setImage64("")
    }
    const encodeFileBase64 = (file) => {
      var reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          var Base64 = reader.result;
          console.log(Base64);
          setImage64(Base64);
        };
        reader.onerror = (error) => {
          console.log("error: ", error);
        };
      }
    };
    const doNothing = () =>{}
    return (
        <div className="imageContainer">
            <div className="imageDisplay" onClick={image64? doNothing:clickInput}>
                {
                    image64 ? (
                        <img src={image64} />
                    ) : (
                        <div className="noImageDiv">
                            <UilCloudUpload />
                            No file Selected.
                        </div>
                    )
                }{
                    image64 && (
                        <>
                            <div className="fileName">{imageName}</div>
                            <button onClick={cancelSelectedImage}><UilTimes /></button>
                        </>
                    )
                }
            </div>
            <div className="imageUploader">
                <input type="file" onChange={imageSelectHandler} accept="image/*" hidden ref={inputRef}/>
                <button onClick={clickInput}>Select an Image</button>
            </div>
        </div>
    )
}

export default ImageComponent
