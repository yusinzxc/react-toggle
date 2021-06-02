import {useState} from "react";
const Home = () => {
  const [toggle,setToggle] = useState(true)
  return (
    <div className={
      toggle ? 'home-main':'change'
    } onClick={() => setToggle(!toggle)}>
      <div className="content"></div>
    </div>
  )
}
export default Home
