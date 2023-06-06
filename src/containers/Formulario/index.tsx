import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [tipoContato, setTipocontato] = useState('')

  const cadastrarCondato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdd = new Contato(contato, tipoContato, email, telefone, 9)

    dispatch(cadastrar(contatoParaAdd))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarCondato}>
        <Campo
          value={contato}
          onChange={(evento) => setContato(evento.target.value)}
          placeholder="Contato"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          placeholder="Telefone"
        />
        <Opcoes>
          <p>Tipo de Contato</p>
          <input
            value="familia"
            onChange={(evento) => setTipocontato(evento.target.value)}
            name="prioridade"
            type="radio"
            id="Familia"
          />{' '}
          <label htmlFor="familia">Familia</label>
          <input
            value="amigos"
            onChange={(evento) => setTipocontato(evento.target.value)}
            name="prioridade"
            type="radio"
            id="Amigos"
          />{' '}
          <label htmlFor="amigos">Amigos</label>
          <input
            value="trabalho"
            onChange={(evento) => setTipocontato(evento.target.value)}
            name="prioridade"
            type="radio"
            id="Trabalho"
          />{' '}
          <label htmlFor="trabalho">Trabalho</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastra</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
