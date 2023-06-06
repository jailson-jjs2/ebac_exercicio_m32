import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo: string
  criterio: 'tipoContato' | 'todos'
  valor?: 'tipoContato'
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions

export default filtroSlice.reducer
