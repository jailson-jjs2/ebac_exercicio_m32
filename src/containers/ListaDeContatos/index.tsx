import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import { MainContainer, Titulo } from '../../styles'
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
      } else if (criterio === 'familia') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipoContato === criterio
        )
      } else if (criterio === 'trabalho') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipoContato === criterio
        )
      }
    }
    return contatosFiltrados
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Titulo as="p">
        {contatos.length} Contato(s) de: {criterio}
      </Titulo>
      <ul>
        {contatos.map((c) => (
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
    </MainContainer>
  )
}

export default ListaDeContatos
