import React from 'react'
import SeactionHeading from '../Section/SectionHeading/SeactionHeading'
import Card from '../Card/Card'

const Category = ({ title, data }) => {
  return (
    <>
      <SeactionHeading title={title} />
      <div className='flex items-center px-8 flex-wrap'>
        {data && data?.map((item, index) => {
          return (
            <Card key={index} title={item?.title} description={item?.description} imagePath={item?.image}
              actionArrow={true} height={'280px'} width={'220px'}/>
          )
        })}
      </div>
    </>
  )
}

export default Category