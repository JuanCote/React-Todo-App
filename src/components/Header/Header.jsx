import { Row, Col } from 'react-bootstrap'
import s from './Header.module.css'

export function Header() {
    return (
        <Row className=''>
            <Col>
                <div className={s.title}>React Todo App</div>
            </Col>
        </Row>
    )
}