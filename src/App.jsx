import { useFetch } from './useFetch'

import './App.css'

function App() {
  const { data, loading } = useFetch('https://localhost:7196/api/User/GetUsers')

  return (
    <div>
      <h2>PRUEBAA</h2>
      <div className="card">
        <ul>
          {loading && <li>loading...</li>}
          {data?.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
