import React from 'react'

const dummy = ({ params }: { params: { ProductID: String } }) => {
  const { ProductID } = params;
  return (
    <div>{ProductID}</div>
  )
}

export default dummy