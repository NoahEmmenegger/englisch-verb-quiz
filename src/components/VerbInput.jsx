import React from 'react';

export default function VerbInput({ string, isShown }) {
    return (
        <td>
            <input disabled={isShown} className="tw-w-full" type="text" value={isShown ? string : null} />
        </td>
    );
}
