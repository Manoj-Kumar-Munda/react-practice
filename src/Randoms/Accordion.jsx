import React, { useState } from 'react'


function Panel({ title, children, isActive, onShow }) {
    
    return (
      <section className="border px-2 my-2 py-2">
        <h3 className='text-lg font-semibold'>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button 
            className='border px-4 bg-slate-500 text-white py-1 rounded-lg'
            onClick={() => onShow()}
          >
            Show
          </button>
        )}
      </section>
    );
  }

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
      <>
        <h2 className='text-xl font-bold'>Almaty, Kazakhstan</h2>
        <Panel title="About" isActive={ activeIndex === 0} onShow= {() => setActiveIndex(0)}>
          With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel title="Etymology" isActive={ activeIndex === 1} onShow={() => setActiveIndex(1)}>
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
        </Panel>
      </>
    );
  }

export default Accordion;