import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './App.css';
import Verb from './components/Verb';
import { verbs } from './verbs';

export default function App() {
    const [currentRandomVerbs, setCurrentRandomVerbs] = useState(generateRandomVerbs());
    return (
        <div className="">
            <div className="tw-flex tw-justify-between tw-m-4">
                <div>
                    <h1 className="tw-text-xl">Mixed Verb Forms Quiz</h1>
                    <small className="tw-text-gray-300">by Noah Emmenegger</small>
                </div>
                <Button className="bg-primary" onClick={() => setCurrentRandomVerbs(generateRandomVerbs())}>
                    Generate new quiz
                </Button>
            </div>
            <div className="tw-p-5">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>German</th>
                            <th>English - 3rd Person</th>
                            <th>Simple Past/Preterit</th>
                            <th>Past Perfect</th>
                            <th>Progressive/Continuous</th>
                        </tr>
                    </thead>
                    <tbody className="tw-w-52">
                        {currentRandomVerbs.map((verb) => (
                            <Verb key={verb.infinitive} verb={verb} />
                        ))}
                    </tbody>
                </Table>
                <Button className="bg-success">Check answers</Button>
            </div>
        </div>
    );
}

const generateRandomVerbs = () => {
    return verbs.sort(() => Math.random() - 0.5).slice(0, 5);
};
