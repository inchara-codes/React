import Header from "./components/Header";
import Card from "./components/Card";
import places from "./components/Data"
import "./App.css"
// import Goa from "./assets/Goa.jpg"

export default function App(){
  const cards = places.map(cardsRetrival);

  function cardsRetrival(item){
      return(
        <Card 
        key={item.id}
        image={item.image}
        place={item.place}
        country={item.country}
        description={item.description}
        />

      )
    }

  //When you want to call single card 
  //  function CardsRetrival(){
  //     return(
  //       <Card 
  //       key={1}
  //       image= {Goa}
  //       place= "Goa"
  //       country= "India"
  //       description= "Goa is famous for its beautiful beaches, seafood, and nightlife."
  //       />

  //     )
  //   }

  return(
    <>
    <Header />
    <Greet greet={Welcome}/>
    <div className="container">
      {cards}
      {/* <CardsRetrival /> */}
    </div>
    </>
  )
}

function Welcome(){
  alert("Welcome to my page");
}

function Greet({greet}){
  return(
     <button onClick={greet}>Click here</button>
  )
}