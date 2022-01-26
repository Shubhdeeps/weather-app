import { useRef } from 'react';
import './stylesheet/App.css';
import data from './data/cities.json'
import day from './assets/day.jpg'
import Body from './components/Body';
import Layout from './components/Layout';

function App() {
  



  const ref = useRef(null)

  const handleChange = () => {
    const val = ref.current.value.toLowerCase()
    let arr = []
    data.some(x => {
      if(x.name.toLowerCase().charAt(0) == (val.charAt(0))){
        if(x.name.toLowerCase().match(val)){
          arr.push(x)
        }
      }

      if(arr.length === 5){
        return true
      }
    })
  }

 

  return (
    <div className="App">
      <Layout>
       <Body />
      </Layout>
    </div>
  );
}

export default App;
