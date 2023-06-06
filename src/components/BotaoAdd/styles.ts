import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: blue;
  color: #fff;
  cursor: pointer;
  position: fixed;
  top: 250px;
  left: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  font-weight: bold;
`
