import React from 'react';

export default function SecreteRow(props) {
    const hasSecrete = props.secreteData
    if (hasSecrete === undefined) {
        return <></>
    }

    const secreteData = hasSecrete.records.map((data) => (
        <tr className='table-light' key={data.data.ID}>
            <th scope='row'></th>
            <td>{data.data.ID}</td>
            <td>{data.data['Nemesis ID']}</td>
            <td>{data.data['Secrete Code']}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg delete" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </td>
        </tr>
    ))

    return (
        <>
            <tr>
                <td colSpan='5'>
                    <table className='table align-middle'>
                        <thead className='table-dark'>
                            <tr>
                                <th scope='col'></th>
                                <th scope='col'>ID</th>
                                <th scope='col'>Nemesis ID</th>
                                <th scope='col'>Secrete Code</th>
                                <th scope='col'>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {secreteData}
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}
