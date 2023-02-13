import React from 'react';
import SecreteRow from './SecreteRow';

export default function NemesisRow(props) {
    const hasNemesis = props.nemesisData;
    if (hasNemesis === undefined) {
        return <></>
    }

    const nemesisData = hasNemesis.records.map((data) => (
        <tbody key={data.data.ID}>
            <tr>
                <th scope='row'></th>
                <td>{data.data.ID}</td>
                <td>{data.data['Character ID']}</td>
                <td>{data.data['Is alive?']}</td>
                <td>{data.data.Years}</td>
                <td>X</td>
            </tr>
            <SecreteRow secreteData={data.children.has_secrete} />
        </tbody>
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
                        {nemesisData}
                    </table>
                </td>
            </tr>
        </>
    )
}
