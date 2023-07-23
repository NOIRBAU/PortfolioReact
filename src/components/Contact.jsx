import React from 'react'
import "./titles.css"

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[100vh] my-[70px] flex justify-center items-center p-2' >
        <form method='POST' action="https://getform.io/f/f9df8275-1076-4cec-9d58-e30b740a5d2e" className='flex flex-col max-w-[700px] w-full'>
            <div className='pb-2'>
                <h2>Contact</h2>
                <p className='text-xl'>Please let me know if you have any questions or suggestions:</p>
            </div>
            <input className='shadow bg-[#EAF3FC] placeholder-[#2E4771] text-xl font-bold] placeholder:p-2' type='text' placeholder='Name' name='name'></input>
            <input className='shadow my-2 p-1 bg-[#EAF3FC] placeholder-[#2E4771] text-xl font-bold]' type='email' placeholder='Email' name='email'></input>
            <textarea className='shadow my-1 p-1 bg-[#EAF3FC] placeholder-[#2E4771] text-xl font-bold]' name='message' rows='6' placeholder='Message'></textarea>
            <button className='my-1 bg-[#5383C3] hover:bg-[#89C3EB] mx-auto'>SEND</button>
        </form>
      
    </div>
  )
}

export default Contact
