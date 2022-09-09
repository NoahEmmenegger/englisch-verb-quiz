import VerbInput from './VerbInput';

export default function Verb({ verb }) {
    const randomNumberBetween1And5 = Math.floor(Math.random() * 5) + 1;
    return (
        <tr>
            <VerbInput string={verb.german} isShown={randomNumberBetween1And5 === 1} />
            <VerbInput string={verb.thirdPerson} isShown={randomNumberBetween1And5 === 2} />
            <VerbInput string={verb.simplePast} isShown={randomNumberBetween1And5 === 3} />
            <VerbInput string={verb.pastPerfect} isShown={randomNumberBetween1And5 === 4} />
            <VerbInput string={verb.progressive} isShown={randomNumberBetween1And5 === 5} />
        </tr>
    );
}
