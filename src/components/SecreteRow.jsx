import React from 'react';

export default function SecreteRow(props) {
    const hasSecrete = props.secreteData
    if (hasSecrete === undefined) {
        return <></>
    }
    
    const secreteData = hasSecrete.records.map((data) => (
        <tr key={data.data.ID}>
            <th scope='row'></th>
            <td>{data.data.ID}</td>
            <td>{data.data['Nemesis ID']}</td>
            <td>{data.data['Secrete Code']}</td>
            <td>X</td>
        </tr>
    ))

    return (
        <>
            <tr>
                <td colSpan='5'>
                    <table className='table'>
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
