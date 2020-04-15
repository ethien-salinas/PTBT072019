import React from 'react'

const Tour = props => {
  const { title, featuredThumbnail, summary } = props.tour
  return (
    <div>
      <h2>{title}</h2>
      <img src={featuredThumbnail} alt={title} />
      <p>{summary}</p>
    </div>
  );
}

export default Tour