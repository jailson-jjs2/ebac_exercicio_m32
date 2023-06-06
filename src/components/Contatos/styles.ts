import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagProps = {
  tipoContato?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if ('tipoContato' in props) {
    if (props.tipoContato === 'familia') return variaveis.azul
    if (props.tipoContato === 'trabalho') return variaveis.verde
  }
  return '#4B0082'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const NomeContato = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  border: none;
  resize: none;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
`
export const dadosInput = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  margin-right: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
