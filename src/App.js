import { Button, Table } from 'react-bootstrap';
import './App.css';
import Verb from './components/Verb';
import { verbs } from './verbs';

function App() {
    const currentRandomVerbs = verbs.sort(() => Math.random() - 0.5).slice(0, 5);
    console.log(currentRandomVerbs);
    return (
        <div className="">
            <div className="tw-flex tw-justify-between tw-m-4">
                <div>
                    <h1 className="tw-text-xl">Mixed Verb Forms Quiz</h1>
                    <small className="tw-text-gray-300">by Noah Emmenegger</small>
                </div>
                <Button className="bg-primary">Generate new quiz</Button>
            </div>
            <div className="tw-p-5">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>Infinitive</th>
                            <th>Present</th>
                            <th>Past</th>
                            <th>Participle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRandomVerbs.map((verb) => (
                            <Verb key={verb.infinitive} verb={verb} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default App;
