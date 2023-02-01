import React from 'react';

export default function NemesisRow(props) {
    const hasNemesis = props.id;
    if (hasNemesis === undefined) {
        return <></>
    }

    const nemesisData = hasNemesis.records.map((data) => (
        <tr key={data.data.ID}>
            <th scope='row'>$</th>
            <td>{data.data.ID}</td>
            <td>{data.data['Character ID']}</td>
            <td>{data.data['Is alive?']}</td>
            <td>{data.data.Years}</td>
            <td>X</td>
        </tr>
    ))

    return (
        <>
            <tr>
                <td colSpan='6'>
                    <table className='table'>
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
                        <tbody>
                            {nemesisData}
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}
