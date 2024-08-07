import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from './data/data'

function App() {
  // console.log(data);
  let i =0;

  const cards = data.map(
    (item) =>{
      return (
        <Section 
          key={i++}
          {...item}
          />
      )
    }
  )

  return (
    <div>
      <Header />
      <div className="list-items">
        {cards}
        
      </div>
    </div>
  );
}

export default App;




/* <Section
          countery="Japan"
          location="Mount Fuji"
          coverImg="/japan.png"
          mapLink="https://maps.app.goo.gl/Ao4FRXomBBuqwF1L6"
          startDate="12 Jan, 2024"
          endDate="24 Jan, 2024"
          placeSummary="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        /> */