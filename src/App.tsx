import { useState } from 'react'
import './App.css'
import Select, { SelectOption } from './Select'

const options = [
  {label : "first", value :1},
  {label : "second", value :2},
  {label : "third", value :3},
  {label : "fourth", value :4},
  {label : "fifth", value :5},
  {label : "sixth", value :6},

  
]

function App() {

  const [value1, setValue1] = useState< SelectOption |undefined  >(options[0]) ;
  const [value2, setValue2] = useState< SelectOption[] >([options[0]]) ;

  return (
  <>
    <Select multiple={false} options={options } value={value1} onChange={o => setValue1(o)}/>
    <br/>
    <Select multiple={true} options={options } value={value2} onChange={o => setValue2(o)}/>
  </>
  )
}

export default App
