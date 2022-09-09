import React from 'react';

export default function VerbInput({ string, isShown }) {
    return (
        <td>
            <input className="tw-w-full" type="text" value={isShown ? string : null} />
        </td>
    );
}
