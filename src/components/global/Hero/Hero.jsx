import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img-container w-100'>
      <div className='hero-img-text'>
        <h1 className='handwritten-style'>Joy</h1>
        <p>\'joi\ noun</p>
        <h2 className='handwritten-style'>Definition of 'joy':</h2>
        <ul >
          <li>1: the emotion evoked by well-being,
            <br/><span className='ml-5'>success, or good fortune or by</span>
            <br/><span className='ml-5'>the prospect of possessing what one</span>
            <br/><span className='ml-5'>desires.</span>
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