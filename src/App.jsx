import { useState } from "react";
import FaqItem2 from "./components/faq/FaqItem2";

function App() {
  const [data] = useState({
  "info": [
    {
      "title": "How much does it cost to use this service",
      "content": "We simply take a transaction fee when you withdraw money off of the platform. This helps us keep the platform running. Besides that we want to focus on helping creators so we won't ever try to sell you any packages or monthly subscriptions!"
    },
    {
      "title": "How is this different from Patreon or Ko-fi?",
      "content": "The most successful Patreon pages today serve basically as content behind a paywall, and many creators steer away from Patreon because they would need to create more content in order to keep their page alive."
    },
    {
      "title": "How do payments work?",
      "content": "Right now we take payments using credit card, although if there's demand for it we can implement using crypto, which would offer significantly lower fees."
    },
    {
      "title": "How do I get in contact with you?",
      "content": "asddas"
    },
    {
      "title": "I have a new feature idea for you",
      "content": "We'd love to talk with you! Get in contact with us"
    }
  ]
}
);

  console.log(data.info)

  return (
    <div className="App">
      <h1>FAQ</h1>
      {data.info.map(item => {
        return <FaqItem2 title={item.title} content={item.content}/>
      })}
    </div>
  );
}

export default App;
