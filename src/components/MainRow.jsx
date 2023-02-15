import React from 'react';
import NemesisRow from './NemesisRow';

export default function MainRow(props) {
    const rowData = props.exampleData.map((exampleData) => (
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
                <td>
                    <svg onClick={(event) => props.deleteRow(event, exampleData.data.ID)} className="bi bi-x-lg delete" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </td>
            </tr>
            <NemesisRow nemesisData={exampleData.children.has_nemesis} deleteRow={props.deleteRow} />
        </tbody>
    ))

    return (
        <>
            {rowData}
        </>
    )
}
