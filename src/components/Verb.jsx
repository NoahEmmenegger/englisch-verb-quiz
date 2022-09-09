import { useState } from 'react';
import VerbInput from './VerbInput';

export default function Verb({ verb, isChecking }) {
    const [randomNumberBetween1And5] = useState(Math.floor(Math.random() * 5) + 1);
    return (
        <tr>
            <VerbInput string={verb.german} isShown={randomNumberBetween1And5 === 1} isChecking={isChecking} />
            <VerbInput
                string={verb.thirdPerson}
                isShown={randomNumberBetween1And5 === 2}
                isChecking={isChecking}
                before="It"
            />
            <VerbInput string={verb.simplePast} isShown={randomNumberBetween1And5 === 3} isChecking={isChecking} />
            <VerbInput
                string={verb.pastPerfect}
                isShown={randomNumberBetween1And5 === 4}
                isChecking={isChecking}
                before="has/had"
            />
            <VerbInput string={verb.progressive} isShown={randomNumberBetween1And5 === 5} isChecking={isChecking} />
        </tr>
    );
}
