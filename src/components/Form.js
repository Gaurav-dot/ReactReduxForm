import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addFormData} from '../actions/action';
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    const saveFormData = () => {

        if(name == "" && email == "" && phone.length != 10 && image.length == 0){
            alert("Form is invalid")
        } else{
            let records = {
                name: name,
                email: email,
                phone: phone
            }
            dispatch(addFormData(records))
        }
    }

    return (
        <div>
            <div className="w-full max-w-xs mx-auto mt-12">
                <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-5">
                    <div className="mb-4">
                        <p className="block text-gray-700 text-sm font-semibold">Name</p>
                        <input onChange={(e=>{setName(e.target.value)})} type="text" className="shadow border rounded w-full focus:shadow-outline mt-2"></input>
                    </div>
                    <div className="mb-4">
                        <p className="block text-gray-700 text-sm font-semibold">Email</p>
                        <input onChange={(e=>{setEmail(e.target.value)})} type="email" className="shadow border rounded w-full focus:shadow-outline mt-2"></input>
                    </div>
                    <div className="mb-4">
                        <p className="block text-gray-700 text-sm font-semibold">Phone Number</p>
                        <input onChange={(e=>{setPhone(e.target.value)})} type="number" className="shadow border rounded w-full focus:shadow-outline mt-2"></input>
                    </div>
                    <div className="overflow-hidden w-full">
                            <span className="p-2">Upload Image</span>
                        <input onChange={(e=>{setImage(e.target.files)})} className="mt-2 cursor-pointer block w-full" type="file" accept="image/*"></input>
                    </div>
                    <div className="flex items-center justify-between mt-10">
                        <button onClick={saveFormData} className="bg-red-500 hover:bg-red-600 p-3 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
