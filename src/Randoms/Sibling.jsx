import React from 'react'

const Sibling = () => {
    console.log("Sibling");
  return (
    <div>Sibling</div>
  )
}

export default React.memo(Sibling)