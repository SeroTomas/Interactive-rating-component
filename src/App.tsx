import { useEffect, useState } from "react"
import { HowDidWeDo } from "./templates";

const howDidWeDoData = {
  icon: "images/icon-star.svg",
  title: "How did we do?",
  text: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  data: [{ value: "1", id: 1 }, { value: "2", id: 2 }, { value: "3", id: 3 }, { value: "4", id: 4 }, { value: "5", id: 5 }],
}

function App() {

  const [valueSelected, setValueSelected] = useState("");
  const [changeContent, setChangeContent] = useState(false);

  const handleChange = () => {
    setChangeContent(true);
  }

  const handleClick = (value: string) => {
    setValueSelected(value);
  }

  return (
    <main className="bg-n-veryDarkBlue h-screen grid place-items-center">
      {
        changeContent ? null : <HowDidWeDo {...howDidWeDoData} handleChange={handleChange} handleClick={handleClick} />
      }
    </main>
  )
}

export default App
