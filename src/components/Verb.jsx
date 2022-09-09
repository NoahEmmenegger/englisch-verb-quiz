import VerbInput from './VerbInput';

export default function Verb({ verb }) {
    const randomNumberBetween1And4 = Math.floor(Math.random() * 4) + 1;
    return (
        <tr>
            <VerbInput string={verb.infinitive} isShown={randomNumberBetween1And4 === 1} />
            <VerbInput string={verb.present} isShown={randomNumberBetween1And4 === 2} />
            <VerbInput string={verb.past} isShown={randomNumberBetween1And4 === 3} />
            <VerbInput string={verb.participle} isShown={randomNumberBetween1And4 === 4} />
        </tr>
    );
}
