import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../firebaseConnection'

const Change = () => {
    const [recebido, setRecebido] = useState('')
    const [senha, setSenha] = useState('')
    const [subtraido, setSubtraido] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (senha !== 'Bv759236') return
        const request = await (await firebase.firestore().collection('teste').doc('aP71qRdItWXxmnamo2Fj').get()).data()
        const oldValue = request.valor

        const newValue = Number(oldValue) + Number(recebido) - Number(subtraido)
        await firebase.firestore().collection('teste').doc('aP71qRdItWXxmnamo2Fj').update({
            valor: newValue
        })
        window.alert('alterado')
    }
    return (
        <div>
            <h1>403 FORBIDDEN - GET OUT</h1>

            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>valor recebido</Form.Label>
                    <Form.Control type="text" placeholder="valor recebido" value={recebido} onChange={(e) => setRecebido(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>correcao</Form.Label>
                    <Form.Control type="text" placeholder="valor recebido" value={subtraido} onChange={(e) => setSubtraido(e.target.value)} />
                    <Form.Text className="text-muted">
                        Esse valor sera subtraido
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Change