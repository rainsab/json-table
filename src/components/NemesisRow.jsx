import React from 'react';
import SecreteRow from './SecreteRow';

export default function NemesisRow(props) {
    const hasNemesis = props.nemesisData;
    if (hasNemesis === undefined) {
        return <></>
    }

    const nemesisData = hasNemesis.records.map((data) => (
        <tbody key={data.data.ID}>
            <tr className='table-light'>
                <th scope='row'></th>
                <td>{data.data.ID}</td>
                <td>{data.data['Character ID']}</td>
                <td>{data.data['Is alive?']}</td>
                <td>{data.data.Years}</td>
                <td>
                    <svg onClick={(event) => props.deleteRow(event, data.data.ID)} className="bi bi-x-lg delete" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </td>
            </tr>
            <SecreteRow secreteData={data.children.has_secrete} deleteRow={props.deleteRow} />
        </tbody>
    ))

    return (
        <>
            <tr>
                <td colSpan='6'>
                    <table className='table align-middle'>
                        <thead className='table-dark'>
                            <tr>
                                <th scope='col'></th>
                                <th scope='col'>ID</th>
                                <th scope='col'>Character ID</th>
                                <th scope='col'>Is alive?</th>
                                <th scope='col'>Years</th>
                                <th scope='col'>delete</th>
                            </tr>
                        </thead>
                        {nemesisData}
                    </table>
                </td>
            </tr>
        </>
    )
}
