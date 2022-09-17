import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const StarsRating = ({Rating,HandleClick}) => {
  return (
    <>
      {
          [...Array(5)].map((_, i)=>{
            console.log(i)
            return <span onClick={()=>HandleClick(i)}>
                    {
                        Rating > i ? (<AiFillStar fontSize={'20px'}/>):(<AiOutlineStar fontSize={'20px'}/>)
                    }
                   </span>
          }
          )
      }
    </>
  )
}
export default StarsRating
