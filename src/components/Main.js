import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import xbox from '../img/xboxseriesx.jpeg'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import bruno from '../img/Screen Shot 2022-12-07 at 22.48.49.png'
import Modal from './Modal'
import copy from "copy-to-clipboard";
import firebase from '../firebaseConnection'


function App() {
    const [actualDonation, setActualDonation] = useState(0)

    useEffect(() => {
        const handleRequest = async () => {
            const request = await (await firebase.firestore().collection('teste').doc('aP71qRdItWXxmnamo2Fj').get()).data()
            setActualDonation(request.valor)
        }
        handleRequest()
    }, [])

    const handleCopy = (e) => {
        copy('https://xboxbruno.netlify.app/')

    }

    return (
        <div>
            <Container>
                <h1>COMPRAR XBOX SERIES X</h1>

                <Row>
                    <Col sm={6} className="imageRow">
                        <Image fluid src={xbox} rounded />
                        <p>
                            Gente estou juntando dinheiro para comprar um xbox series x. Como
                            esta chegando natal, amigos secretos, quem quiser me presentear,
                            e quiser colaborar com minha vaquinha, ao inves de um presente,
                            eu aceito um dinheiro aqui para compor minha aplicacao e conseguir
                            conquistar meu sonho de 2023.
                        </p>
                        <Button type="null" onClick={e => handleCopy(e)} variant="outline-secondary ">Copy Link For Share</Button>
                    </Col>

                    <Col sm={4} className="arrecadadoRow">
                        <ProgressBar variant="success" max={4299} now={actualDonation} label={`${actualDonation}%`} visuallyHidden />

                        <h2>Arrecadado</h2>
                        <p className="arrecadado">{actualDonation.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                        <Modal />
                        <hr />
                        <p className="metaTitle">Meta</p>
                        <p className="meta">R$ 4.299,00</p>

                        <Image src={bruno} rounded fluid />
                    </Col>
                </Row>
            </Container>

            <footer class="footer">
                <div class="legal">
                    <span>Made with <span class="heart">♥</span> by Bruno Volpe</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
