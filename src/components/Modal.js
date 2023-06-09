import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import qrCode from '../img/code.png'
import Image from 'react-bootstrap/Image'

const popover = (
    <Popover id="popover-basic">
        <Popover.Body>
            <strong>Telefone: (11) 98897-6505</strong>
            <hr />
            <Image src={qrCode} fluid />
        </Popover.Body>
    </Popover>
);

const Example = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button variant="success">PIX - click para ver</Button>
    </OverlayTrigger>
);

export default Example