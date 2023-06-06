import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Jailson',
      tipoContato: 'familia',
      telefone: '99999',
      email: 'jjs2@hotmail.com'
    },
    {
      id: 2,
      nome: 'Renata',
      tipoContato: 'trabalho',
      telefone: '99999',
      email: 'jjs2@hotmail.com'
    },
    {
      id: 3,
      nome: 'Tiago',
      tipoContato: 'amigos',
      telefone: '99999',
      email: 'jjs2@hotmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
