function App() {

  return (
    <div className="page">
      <div className="title">UIKIT</div>
      <table className="table-auto w-full hover">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>

      <br />
      <input type="text"/>
      <input type="text" className="error"/>
      <br />

      <button className="btn">Default</button>
      <button className="btn" disabled>Default</button>
      <button className="btn dark">Default</button>
      <button className="btn danger">Default</button>
      <button className="btn primary">Default</button>
      <button className="btn accent">Default</button>
      <button className="btn success">Default</button>
      <button className="btn outline">Default</button>
      <button className="btn lg">Default</button>
    </div>
  )
}

export default App
