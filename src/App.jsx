import React from 'react';
import MainRow from './components/MainRow';

function App() {
  return (
    <div className='table-responsive'>
      <table className="table table-striped">
        <thead className='table-dark'>
          <tr>
            <th scope='col'></th>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Ability</th>
            <th scope='col'>Minimal distance</th>
            <th scope='col'>Weight</th>
            <th scope='col'>Born</th>
            <th scope='col'>In space since</th>
            <th scope='col'>Beer consumption (l/y)</th>
            <th scope='col'>Knows the answer?</th>
            <th scope='col'>delete</th>
          </tr>
        </thead>
        <tbody>
          {/*components*/}
          <MainRow />
        </tbody>
      </table>
    </div>

  )
}

export default App;
