import { useEffect } from 'react'

export function StyleGuide({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <main>
      <section className='text-styles'>
        <div className='header-w-content'>
          <h1>Header 1 / Title Style 1</h1>
          <p>In America, whisky was used as currency during the American Revolution; George Washington operated a large distillery at Mount Vernon. Given the distances and primitive transportation network of colonial America, farmers often found it easier and more profitable to convert corn to whisky and transport it to market in that form. It also was a highly coveted sundry and when an additional excise tax was levied against it in 1791, the Whiskey Rebellion erupted.</p>
          <p>The drinking of Scotch whisky was introduced to India in the nineteenth century. The first distillery in India was built by Edward Dyer at Kasauli in the late 1820s. The operation was soon shifted to nearby Solan (close to the British summer capital Shimla), as there was an abundant supply of fresh spring water there.</p>
          <p>In 1823, the UK passed the Excise Act, legalizing the distillation (for a fee), and this put a practical end to the large-scale production of Scottish moonshine.</p>
          <p>In 1831, Aeneas Coffey patented the Coffey still, allowing for a cheaper and more efficient distillation of whisky. In 1850, Andrew Usher began producing a blended whisky that mixed traditional pot still whisky with that from the new Coffey still. The new distillation method was scoffed at by some Irish distillers, who clung to their traditional pot stills. Many Irish contended that the new product was, in fact, not whisky at all.</p>
          <p>By the 1880s, the French brandy industry was devastated by the phylloxera pest that ruined much of the grape crop; as a result, whisky became the primary liquor in many markets.</p>
        </div>
      </section>
    </main>
  )
}
