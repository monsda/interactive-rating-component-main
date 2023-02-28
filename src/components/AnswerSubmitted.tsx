import React from 'react'
import ThankImg from '../assets/illustration-thank-you.svg'
import { IProps } from './Interface'

const AnswerSubmitted = (props:IProps) => {
  return (
    <div>
      <div className='bg-black-mid rounded-2xl w-96 h-96 p-3 text-center'>
        <div className='grid place-items-center my-6'>
          <img src={ThankImg} alt="Thank you" />
        </div>
        <div className='grid place-items-center my-6'>
          <p className='bg-[#262f38] w-44 text-center rounded-3xl text-[#ab5d24]'>You selected {props.Score} out of 5</p>
        </div>
        <p className='text-3xl text-white my-4'>Thank you!</p>
        <p className='text-gray-deep h-28'>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default AnswerSubmitted
