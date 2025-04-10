import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function DarkExample() {
    return (
        <div className="p-4">
            <h1>Bootstrap</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Плюсы</th>
                    <th>Bootstrap</th>
                    <th>Material UI</th>
                    <th>Ant Design</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Простота</td>
                    <td>Гибкость</td>
                    <td>Бизнес-дизайн</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Быстрый старт</td>
                    <td>Много компонентов</td>
                    <td>Удобство форм</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Bootstrap-опыт</td>
                    <td>Красивый UI</td>
                    <td>Профессиональный вид</td>
                </tr>
                </tbody>
            </Table>


            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default DarkExample;
