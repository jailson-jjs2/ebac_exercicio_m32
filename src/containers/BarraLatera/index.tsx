import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispath = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispath(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="familia" contador={3} />
          <FiltroCard legenda="amigos" contador={2} />
          <FiltroCard legenda="trabalho" contador={7} />
          <FiltroCard legenda="todos" contador={12} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral