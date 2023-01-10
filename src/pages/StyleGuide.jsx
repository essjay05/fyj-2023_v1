import { useEffect } from 'react'

import Header from '../components/global/Header/Header'
import Footer from '../components/global/Footer/Footer'

export function StyleGuide({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <>
      <NavBar currentPageName={pageName} />
      <main>
        <h1 className='handwritten-style'>{pageName}</h1>
        <section className='text-styles'>
          <div className='header-w-content'>
            <div>
              <h1>Header 1 / Title Style 1</h1>
              <p>In America, whisky was used as currency during the American Revolution; George Washington operated a large distillery at Mount Vernon. Given the distances and primitive transportation network of colonial America, farmers often found it easier and more profitable to convert corn to whisky and transport it to market in that form. It also was a highly coveted sundry and when an additional excise tax was levied against it in 1791, the Whiskey Rebellion erupted.</p>
            </div>
            <div>
              <h2>Header 2 / Title Style 2</h2>
              <p>The drinking of Scotch whisky was introduced to India in the nineteenth century. The first distillery in India was built by Edward Dyer at Kasauli in the late 1820s. The operation was soon shifted to nearby Solan (close to the British summer capital Shimla), as there was an abundant supply of fresh spring water there.</p>
            </div>
            <div>
              <h3>Header 3 / Title Style 3</h3>
              <p>In 1823, the UK passed the Excise Act, legalizing the distillation (for a fee), and this put a practical end to the large-scale production of Scottish moonshine.</p>
            </div>
            <div>
              <h4>Header 4 / Title Style 4</h4>
              <p>In 1831, Aeneas Coffey patented the Coffey still, allowing for a cheaper and more efficient distillation of whisky. In 1850, Andrew Usher began producing a blended whisky that mixed traditional pot still whisky with that from the new Coffey still. The new distillation method was scoffed at by some Irish distillers, who clung to their traditional pot stills. Many Irish contended that the new product was, in fact, not whisky at all.</p>
            </div>
            <div>
              <h5>Header 5 / Title Style 5</h5>
              <p>By the 1880s, the French brandy industry was devastated by the phylloxera pest that ruined much of the grape crop; as a result, whisky became the primary liquor in many markets.</p>
            </div>
            <div>
              <h6>Header 6 / Title Style 6</h6>
              <p>In America, whisky was used as currency during the American Revolution; George Washington operated a large distillery at Mount Vernon. Given the distances and primitive transportation network of colonial America, farmers often found it easier and more profitable to convert corn to whisky and transport it to market in that form. It also was a highly coveted sundry and when an additional excise tax was levied against it in 1791, the Whiskey Rebellion erupted.</p>
            </div>
            <p>The drinking of Scotch whisky was introduced to India in the nineteenth century. The first distillery in India was built by Edward Dyer at Kasauli in the late 1820s. The operation was soon shifted to nearby Solan (close to the British summer capital Shimla), as there was an abundant supply of fresh spring water there.</p>
          </div>
        </section>
        <section className='handwritten-styling'>
        <div className='header-w-content'>
            <div>
              <h1 className='handwritten-style'>Header 1 / Title Style 1</h1>
              <p>In America, whisky was used as currency during the American Revolution; George Washington operated a large distillery at Mount Vernon. Given the distances and primitive transportation network of colonial America, farmers often found it easier and more profitable to convert corn to whisky and transport it to market in that form. It also was a highly coveted sundry and when an additional excise tax was levied against it in 1791, the Whiskey Rebellion erupted.</p>
            </div>
            <div>
              <h2 className='handwritten-style'>Header 2 / Title Style 2</h2>
              <p>The drinking of Scotch whisky was introduced to India in the nineteenth century. The first distillery in India was built by Edward Dyer at Kasauli in the late 1820s. The operation was soon shifted to nearby Solan (close to the British summer capital Shimla), as there was an abundant supply of fresh spring water there.</p>
            </div>
            <div>
              <h3 className='handwritten-style'>Header 3 / Title Style 3</h3>
              <p>In 1823, the UK passed the Excise Act, legalizing the distillation (for a fee), and this put a practical end to the large-scale production of Scottish moonshine.</p>
            </div>
            <div>
              <h4 className='handwritten-style'>Header 4 / Title Style 4</h4>
              <p>In 1831, Aeneas Coffey patented the Coffey still, allowing for a cheaper and more efficient distillation of whisky. In 1850, Andrew Usher began producing a blended whisky that mixed traditional pot still whisky with that from the new Coffey still. The new distillation method was scoffed at by some Irish distillers, who clung to their traditional pot stills. Many Irish contended that the new product was, in fact, not whisky at all.</p>
            </div>
            <div>
              <h5 className='handwritten-style'>Header 5 / Title Style 5</h5>
              <p>By the 1880s, the French brandy industry was devastated by the phylloxera pest that ruined much of the grape crop; as a result, whisky became the primary liquor in many markets.</p>
            </div>
            <div>
              <h6 className='handwritten-style'>Header 6 / Title Style 6</h6>
              <p>In America, whisky was used as currency during the American Revolution; George Washington operated a large distillery at Mount Vernon. Given the distances and primitive transportation network of colonial America, farmers often found it easier and more profitable to convert corn to whisky and transport it to market in that form. It also was a highly coveted sundry and when an additional excise tax was levied against it in 1791, the Whiskey Rebellion erupted.</p>
            </div>
            <p>The drinking of Scotch whisky was introduced to India in the nineteenth century. The first distillery in India was built by Edward Dyer at Kasauli in the late 1820s. The operation was soon shifted to nearby Solan (close to the British summer capital Shimla), as there was an abundant supply of fresh spring water there.</p>
          </div>
        </section>
        <Footer/>
      </main>
    </>
  )
}
