import React from 'react';
import exampleData from './example-data.json';
import NemesisRow from './NemesisRow';

export default function MainRow() {
    const rowData = exampleData.map((exampleData) => (
        <tbody key={exampleData.data.ID}>
            <tr className='table-light'>
                <th scope='row'></th>
                <td>{exampleData.data.ID}</td>
                <td>{exampleData.data.Name}</td>
                <td>{exampleData.data.Gender}</td>
                <td>{exampleData.data.Ability}</td>
                <td>{exampleData.data['Minimal distance']}</td>
                <td>{exampleData.data.Weight}</td>
                <td>{exampleData.data.Born}</td>
                <td>{exampleData.data['In space since']}</td>
                <td>{exampleData.data['Beer consumption (l/y)']}</td>
                <td>{exampleData.data['Knows the answer?']}</td>
                <td>X</td>
            </tr>
            <NemesisRow nemesisData={exampleData.children.has_nemesis} />
        </tbody>
    ))

    return (
        <>
            {rowData}
        </>
    )
}
