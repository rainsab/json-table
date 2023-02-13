import React from 'react';
import MainRow from './components/MainRow';

export default function App() {
  return (
    <div className='table-responsive'>
      <table className='table align-middle'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'></th>
            <th className='align-middle' scope='col'>ID</th>
            <th className='align-middle' scope='col'>Name</th>
            <th className='align-middle' scope='col'>Gender</th>
            <th className='align-middle' scope='col'>Ability</th>
            <th className='align-middle' scope='col'>Minimal distance</th>
            <th className='align-middle' scope='col'>Weight</th>
            <th className='align-middle' scope='col'>Born</th>
            <th className='align-middle' scope='col'>In space since</th>
            <th className='align-middle' scope='col'>Beer consumption (l/y)</th>
            <th className='align-middle' scope='col'>Knows the answer?</th>
            <th className='align-middle' scope='col'>delete</th>
          </tr>
        </thead>
        <MainRow />
      </table>
    </div>
  )
}
