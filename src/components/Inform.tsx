import React, { useEffect, useState } from 'react'
import Star from '../assets/icon-star.svg' 
import { IProps } from './Interface'


const Inform = (props: IProps) => {

  const [isClicked, setIsClicked] = useState({
    oneClicked: false,
    twoClicked: false,
    threeClicked: false,
    fourClicked: false,
    fiveClicked: false,    
  })


  return (
    <div>
      <div className='bg-black-mid rounded-2xl w-96 h-96 p-5'>
        <div className='bg-[#242f3a] w-11 grid place-items-center h-11 rounded-full'>
          <img src={Star} alt="star icon" />
        </div>

        <h1 className='text-white text-2xl mt-9'>How did we do?</h1>

        <p className='text-gray-deep w-96 mt-3'>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
      
        <div className='flex justify-start w-96 mt-7'>
          <p className={isClicked.oneClicked? 'rating-container clicked': 'rating-container'}
            onClick={() => {
              setIsClicked({
                oneClicked: true,
                twoClicked: false,
                threeClicked: false,
                fourClicked: false,
                fiveClicked: false,   
              })
              props.setScore?.(1)
            }}
          >1</p>
          <p className={isClicked.twoClicked? 'rating-container clicked': 'rating-container'}
            onClick={() => {
              setIsClicked({
                oneClicked: false,
                twoClicked: true,
                threeClicked: false,
                fourClicked: false,
                fiveClicked: false,   
              })
              props.setScore?.(2)
            }}
          >2</p>
          <p className={isClicked.threeClicked? 'rating-container clicked': 'rating-container'}
            onClick={() => {
              setIsClicked({
                oneClicked: false,
                twoClicked: false,
                threeClicked: true,
                fourClicked: false,
                fiveClicked: false,   
              })
              props.setScore?.(3)
            }}
          >3</p>
          <p className={isClicked.fourClicked? 'rating-container clicked': 'rating-container'}
            onClick={() => {
              setIsClicked({
                oneClicked: false,
                twoClicked: false,
                threeClicked: false,
                fourClicked: true,
                fiveClicked: false,   
              })
              props.setScore?.(4)
            }}
          >4</p>
          <p className={isClicked.fiveClicked? 'rating-container clicked': 'rating-container'}
            onClick={() => {
              setIsClicked({
                oneClicked: false,
                twoClicked: false,
                threeClicked: false,
                fourClicked: false,
                fiveClicked: true,   
              })
              props.setScore?.(5)
            }}
          >5</p>

        </div>
        <button className='rounded-3xl my-8 h-10 w-full bg-orange hover:bg-white text-white hover:text-orange outline-none'
          onClick={() => {
            props.setIsSubmitted?.(true)
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Inform
