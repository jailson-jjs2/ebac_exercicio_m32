import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = itens.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'amigos') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipoContato === criterio
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>2 contatos como: categoria e {termo}</p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
      </ul>
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
