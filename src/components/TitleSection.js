import React from 'react'

const TitleSection = ({text}) => {
  return (
    <>
      <div className="title-section">
        <h2 className="text-center">{text}</h2>
      </div>
    </>
  );
}

export default TitleSection