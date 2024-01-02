import { useState } from "react"
import { HowDidWeDo, ThankYou } from "./templates";

const howDidWeDoData = {
  icon: "images/icon-star.svg",
  title: "How did we do?",
  text: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  data: [{ value: "1", id: 1 }, { value: "2", id: 2 }, { value: "3", id: 3 }, { value: "4", id: 4 }, { value: "5", id: 5 }],
}

const thankYou = {
  image: "images/illustration-thank-you.svg",
  title: "Thank you!",
  text: "We appreciate you taking the time to give a rating. If you ever need more support, don't hesiate to get in touch!"
}

function App() {

  const [valueSelected, setValueSelected] = useState("");
  const [changeContent, setChangeContent] = useState(false);

  const handleChange = () => {
    valueSelected && setChangeContent(true);
  }

  const handleClick = (value: string) => {
    setValueSelected(value);
  }

  const tyProps = {...thankYou, content: `You selected ${valueSelected} out of 5`}

  return (
    <main className="bg-n-veryDarkBlue h-screen grid place-items-center">
      {
        changeContent ? <ThankYou {...tyProps}/> : <HowDidWeDo {...howDidWeDoData} handleChange={handleChange} handleClick={handleClick} />
      }
    </main>
  )
}

export default App
