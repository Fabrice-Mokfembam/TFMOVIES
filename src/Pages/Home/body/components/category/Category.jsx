import './Category.scss'

function Category({category}) {
  return (
    <div className='category active'>
      {category}
    </div>
  )
}

export default Category