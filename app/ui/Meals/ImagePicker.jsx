"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Style from "./imagePicker.module.css";

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState(null);
    const imageInput = useRef();

    function handlePickImageClick() {
        imageInput.current.click();
    }

    function handleImageChange(e) {
        //* 1-) Obtain the selected file from the event object using e.target.files[0].
        const file = e.target.files[0];

        //* 2-) Check if the file is not selected; if so, update the state variable pickedImage to null and exit the function.
        if (!file) return setPickedImage(null);

        //* 3-) Create a new FileReader object to handle reading the file content.
        const fileReader = new FileReader();

        //* 4-) Set up an event listener for the onload event of the fileReader object. When the file is successfully loaded, 
        //* the function inside this event will be executed.
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        //* 5-) Use the readAsDataURL method of the fileReader object to asynchronously read the content of the file and convert it to a data URL
        fileReader.readAsDataURL(file);

        // console.log(file);
    }

    return (
        <div className={Style.picker}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={Style.controls}>
                <div className={Style.preview}>
                    {pickedImage ? <Image src={pickedImage} alt="The image selected by the user." fill />
                        : <p>No image picket yet.</p>}
                </div>

                <input
                    className={Style.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required />

                <button className={Style.button} type="button" onClick={handlePickImageClick}>Pick an Image</button>
            </div>
        </div>
    )
}
