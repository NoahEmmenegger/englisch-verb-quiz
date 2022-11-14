import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './App.css';
import Verb from './components/Verb';
import { verbs } from './file2';

export default function App() {
    const [currentRandomVerbs, setCurrentRandomVerbs] = useState(generateRandomVerbs());
    const [isChecking, setIsChecking] = useState(false);
    return (
        <div className="">
            <div className="tw-flex tw-justify-between tw-m-4">
                <div>
                    <h1 className="tw-text-xl">Mixed Verb Forms Quiz</h1>
                    <small className="tw-text-gray-300">by Noah Emmenegger</small>
                </div>
                <Button
                    className="bg-primary"
                    onClick={() => {
                        setCurrentRandomVerbs(generateRandomVerbs());
                    }}
                >
                    Generate new quiz
                </Button>
            </div>
            <div className="tw-p-5">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>
                                <p>German</p>
                            </th>
                            <th>
                                <p>English - 3rd Person</p>
                            </th>
                            <th>
                                <p>Simple Past/Preterit</p>
                            </th>
                            <th>
                                <p>Past Perfect</p>
                            </th>
                            <th>
                                <p>Progressive/Continuous</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="tw-w-52">
                        {currentRandomVerbs.map((verb) => (
                            <Verb key={verb.infinitive} verb={verb} isChecking={isChecking} />
                        ))}
                    </tbody>
                </Table>
                <div className="tw-flex">
                    <Button className="bg-secondary" onClick={() => setIsChecking(!isChecking)}>
                        {isChecking ? 'Hide' : 'Check'} Answers
                    </Button>
                    <small className="tw-ml-auto">Double click in field for solution</small>
                </div>
            </div>
        </div>
    );
}

const generateRandomVerbs = () => {
    return verbs.sort(() => Math.random() - 0.5).slice(0, 5);
};
