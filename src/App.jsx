import React from 'react'
import Navbar from './Navbar'
import Rnavbar from './Rnavbar'
import Body from './Body'
import Bbody from './Bbody'
import  Card  from './Card'
import Mbody from './Mbody'
import Marquee from './Marquee'
import Imarquee from './Imarquee'








const App = () => {
  const cards = [{
    id: 1,
    image: "https://wsrv.nl/?w=560&url=https://cdn2.blanxer.com/uploads/693e481542c36b29ab709e5d/product_image-screenshot-2026-01-06-at-120217-8102.webp",
    Name: "NEPAL CRICKET WORLD CUP AUTHENTIC FANS JERSEY",
    Rating: "⭐4.7",
    Price: "Rs799",
  }, {
    id: 2,
    image: "https://wsrv.nl/?w=560&url=https://cdn2.blanxer.com/uploads/693e481542c36b29ab709e5d/product_image-screenshot-2026-01-06-at-120217-8102.webp",
    Name: "NEPAL CRICKET WORLD CUP AUTHENTIC FANS JERSEY",
    Rating: "⭐4.3",
    Price: "Rs3499",
  }, {
    id: 3,
    image: "https://wsrv.nl/?w=560&url=https://cdn2.blanxer.com/uploads/693e481542c36b29ab709e5d/product_image-screenshot-2026-01-06-at-120217-8102.webp",
    Name: "NEPAL CRICKET WORLD CUP AUTHENTIC FANS JERSEY",
    Rating: "⭐3.5",
    Price: "Rs3499",
  }, {
    id: 4,
    image: "https://wsrv.nl/?w=560&url=https://cdn2.blanxer.com/uploads/693e481542c36b29ab709e5d/product_image-screenshot-2026-01-06-at-120217-8102.webp",
    Name: "NEPAL CRICKET WORLD CUP AUTHENTIC FANS JERSEY",
    Rating: "⭐2.9",
    Price: "Rs3499",
  },]

  return (
    <div className="App">
      <Navbar />
      <Rnavbar />
      <Body />
      <Bbody />
      <Mbody/>

    
      {/*Move Marquee down*/}
      <h1 className="text-4xl font-bold text-black mt-10 bg-orange-500 p-4">Our Finest Selections</h1>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols=3 md:grid-cols-2">
        {/* {cards.map((card) => (
          <Card key={card.id} po={card} />
        ))} */}

        {
          cards.map((p)=>{
            return(
              <Card key={p.id} po={p} />
            )
          })
        }
        
      </div>
            <Marquee/>
      <Imarquee/>
    </div>
  )
}

export default App