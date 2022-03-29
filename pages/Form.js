import { useState } from "react"

export default function Form(props) {
  const heroes = ["Batman", "Batman2", "Superman", "Aquaman", "Flash", "Green Lantern"]
  const [checkedValues, setCheckedValues] = useState([])

  const cvProps = {heroes, checkedValues, setCheckedValues}
  return (
    <form>
      <CheckedValues {...cvProps} />
    </form>
  )
}

function CheckedValues(props) {
  const handleChecked = (e) => {
    const hero = props.heroes[e.target.dataset.id]
    let newCheckedValues = props.checkedValues.filter((item) => item !== hero)
    if (e.target.checked) newCheckedValues.push(hero)
    props.setCheckedValues(newCheckedValues)
  }

  return (
    <div className="App">
      {props.heroes.map((hero, id) => (
        <label key={id}>
          <input type="checkbox" data-id={id} onClick={handleChecked} /> {hero}
        </label>
      ))}
      <hr />
      <h3>Results</h3>
      <p>{props.checkedValues.join(", ")}</p>
    </div>
  )
}
