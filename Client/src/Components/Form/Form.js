import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {

    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [file, setFile] =useState('')
    const [loading, setLoading] = useState('')



    const submitHandler = async (e) => {
        e.preventDefault();
        if(!date || !file || !location){
            return toast.error('Please fill all fields!')
        }
        try {
            setLoading(true)

            const { data } = await axios.post(`/api/posts`, {
                location,
                date,
                file
            });
            setLoading(false);
            toast.success(data.message)
        } catch (err) {
            setLoading(false)
            toast.error(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            )
        }
    }


  return (
    <div>
        <h2>Add a memory</h2>

        <ToastContainer position="bottom-center" limit={1} />

        <form  onSubmit={submitHandler}>
        <div>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" value={location} onChange={(e)=> setLocation(e.target.value)} />
        </div>

        <div>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" value={date} onChange={(e)=> setDate(e.target.value)} />
        </div>
        <div> 
            <FileBase type='file' multiple={false} onDone={(base64) => setFile({base64})} />
        </div>

        <div>
        <button className="submit" disabled={loading} type="submit">
                    {loading ? 'Sending...' : 'Submit'}
                </button>
        </div>
        </form>
        
    </div>
  )
}  

export default Form