import './App.css'
import Select, { SelectOptions } from './Select'
function App() {

  const options = [
    {label : "first", value :1},
    {label : "second", value :2},
    {label : "third", value :3},
    {label : "fourth", value :4},
    {label : "fifth", value :5},
    {label : "sixth", value :6},

    
  ]
  const onChange = (value : SelectOptions | undefined) =>{
    return 
  }
  return (
  <><Select options={options } onChange={onChange}/></>
  )
}

export default App
