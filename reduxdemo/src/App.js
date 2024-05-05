

import { useSelector,useDispatch } from 'react-redux';
import { addItem, incrementAsync } from './store/slice';
function App() {
  const count=useSelector(store=>store.cart.item)
  console.log("final count",count)
  const dispatch= useDispatch()
   const hanldeAsync=()=>{
    dispatch(incrementAsync(20))
}
const handleSync=()=>{
  dispatch(addItem(10))
}
  return (
    <div className="App">
      <header className="App-header">
        This is main component {count}
      </header>
      <button onClick={hanldeAsync}>Click to asyncly increment</button>
      <button onClick={handleSync}>Click to sync count</button>
    </div>
  );
}

export default App;
