import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispath = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispath(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard criterio="familia" legenda="Familia" />
          <FiltroCard criterio="amigos" legenda="Amigos" />
          <FiltroCard criterio="trabalho" legenda="Trabalho" />
          <FiltroCard criterio="todos" legenda="Todos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
