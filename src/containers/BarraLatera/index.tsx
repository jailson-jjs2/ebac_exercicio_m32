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
          <FiltroCard criterio="familia" legenda="familia" />
          <FiltroCard criterio="amigos" legenda="amigos" />
          <FiltroCard criterio="trabalho" legenda="trabalho" />
          <FiltroCard criterio="todos" legenda="todos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
