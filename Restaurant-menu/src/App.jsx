import Header from "./components/Header";
import Card from "./components/Card";
import places from "./components/Data"
import "./App.css"

export default function App(){
  const cards = places.map(cardsRetrival);

  function cardsRetrival(item){
      return(
        <Card 
        key={item.id}
        image={item.image}
        name={item.name}
        category={item.category}
        price={item.price}
        description={item.description}
        />

      )
    }
  return(
    <>
    <Header />
    <div className="container">
      {cards}
    </div>
    </>
  )
}