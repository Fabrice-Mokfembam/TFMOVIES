import './Hero.scss'
import { movieContext } from '../../../context/movie'
import { useContext } from 'react'
import Swipper from '../../SwiperComponent/Swipper';
import { titleIdContext } from '../../../context/titleId';
import { playbutton } from '../../../assets';

function Hero() {
  const { movies } = useContext(movieContext);
  const {titleId} = useContext(titleIdContext)

  return (
    <div className="Hero">
      <h1 className="title">{titleId.title}</h1>
      <div className='button-wrapper'>
        <button>
          <img src={playbutton} alt={playbutton} />
        </button>
        <strong>Watch Triller</strong>
      </div>

      <Swipper movies={movies} />
    </div>
  );
}

export default Hero