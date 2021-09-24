import { useState } from "react";
import FaqItem from "./components/faq/FaqItem";

function App() {

  const [data] = useState([
    ["How much does it cost to use this service",
    "We simply take a transaction fee when you withdraw money off of the platform. This helps us keep the platform running. Besides that we want to focus on helping creators so we won't ever try to sell you any packages or monthly subscriptions!"],
    ["How is this different from Patreon or Ko-fi?",
    "The most successful Patreon pages today serve basically as content behind a paywall, and many creators steer away from Patreon because they would need to create more content in order to keep their page alive."],
    ["How do payments work?",
    "Right now we take payments using credit card, although if there's demand for it we can implement using crypto, which would offer significantly lower fees."],
    ["How do I get in contact with you?","no way lmao"],
    ["I have a new feature idea for you",
    "We'd love to talk with you! Get in contact with us"]
  ]);

  return (
    <div className="App">
      <h1>FAQ</h1>
      {data.map(item => {
        return <FaqItem title={item[0]} content={item[1]}/>
      })}
    </div>
  );
}

export default App;
