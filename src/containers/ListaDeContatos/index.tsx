import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 contatos como: categoria e {termo}</p>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              tipoContato={c.tipoContato}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
