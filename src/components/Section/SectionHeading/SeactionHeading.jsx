import React from 'react'
import propTypes from 'prop-types'

const SeactionHeading = ({title}) => {
  return (
    <div className='flex flex-wrap'>
        <div>

        </div>
        <p className='text-3xl'>{title}</p>
    </div>
  )
}

SeactionHeading.defaultProps = {

}

SeactionHeading.propTypes = {
    title:String
}

export default SeactionHeading