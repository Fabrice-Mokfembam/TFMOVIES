import Category from '../components/category/Category'
import './Categories.scss'

const categories = [
    "All","Tv shows","Action","Series","Romantic"
]

function Categories() {
  return (
    <section className="categories">
      <strong>Categories</strong>
      <div className="category-wrapper">
        {categories.map((category) => (
          <Category category={category} key={category}/>
        ))}
      </div>
    </section>
  );
}

export default Categories