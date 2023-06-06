import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  ativo?: boolean
  legenda: string
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
}

const FiltroCard = ({ legenda, criterio }: Props) => {
  const dispath = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio

    return mesmoCriterio
  }

  const contarContatos = () => {
    const { itens } = contatos

    if (criterio === 'todos') {
      return itens.length
    }

    const contatosFiltrados = itens.filter(
      (item) => item.tipoContato === criterio
    )
    return contatosFiltrados.length
  }

  const filtrar = () => {
    dispath(
      alterarFiltro({
        criterio
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
