import React from 'react'

const Example = ({ params }: { params: { ProductID: String } }) => {
    const { ProductID } = params;
  return (
    <div>hellooo: {ProductID}</div>
  )
}

export default Example