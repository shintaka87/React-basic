import React from 'react'

const CounDisplay = ({name, count}) => {
    console.log(`display ${name}`)
  return (
    <div>
        {count}
    </div>
  )
}

export default React.memo(CounDisplay)