import { Button, Table } from 'react-bootstrap';
import './App.css';

function App() {
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
                        <tr>
                            <td>to be</td>
                            <td>am</td>
                            <td>was</td>
                            <td>been</td>
                        </tr>
                        <tr>
                            <td>to become</td>
                            <td>become</td>
                            <td>became</td>
                            <td>become</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default App;
