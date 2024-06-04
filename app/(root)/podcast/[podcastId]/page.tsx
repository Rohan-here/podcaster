import React from 'react'

const PodCastDetails = ({params} : {params : {podcastId : string}}) => {
  return (
    <p className='text-white-1'>PodCastDetails for {params.podcastId}</p>
  )
}

export default PodCastDetails