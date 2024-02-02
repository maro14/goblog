//import React from 'react';
import { Link } from 'react-router-dom'

export const Card = ({ id, title, author, category }) => {
  const defaultId = id || '';
  const defaultTitle = title || '';
  const defaultAuthor = author || '';
  const defaultCategory = category || '';

  return (
    <div className='card'>
        <Link to={`/${defaultId}`} className='card-link'>
            <h2 className='card-title'>{defaultTitle}</h2>
        </Link>
        <h3 className='card-author'>{defaultAuthor}</h3>
        <h3 className='card-category'>{defaultCategory}</h3>
    </div>
  )
}
