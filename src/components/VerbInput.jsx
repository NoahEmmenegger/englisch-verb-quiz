import React, { useState } from 'react';

export default function VerbInput({ string, isShown, isChecking }) {
    const [value, setValue] = useState(isShown ? string : '');
    return (
        <td>
            <input
                disabled={isShown}
                className={`tw-w-full  tw-border-2 tw-rounded-md ${
                    isChecking && !isShown ? (value === string ? 'tw-border-green-500' : 'tw-border-red-500') : ''
                }`}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                value={false ? string : value}
                onDoubleClick={() => setValue(string)}
            />
        </td>
    );
}
