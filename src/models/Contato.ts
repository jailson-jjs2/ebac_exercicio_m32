class Contato {
  nome: string
  tipoContato: string
  email: string
  telefone: string
  id: number

  constructor(
    nome: string,
    tipoContato: string,
    email: string,
    telefone: string,
    id: number
  ) {
    this.nome = nome
    this.tipoContato = tipoContato
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
