import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img-container'>
      <div className='hero-img-text'>
        <h1 className='handwritten-style'>Joy</h1>
        <p>\'joi\ noun</p>
        <h2 className='handwritten-style'>Definition of 'joy':</h2>
        <ul >
          <li>1: the emotion evoked by well-being,
            <br/><span>success, or good fortune or by</span>
            <br/><span>the prospect of possessing what one</span>
            <br/><span>desires.</span>
          </li>
          <li>
            2: a source or cause of delight.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero