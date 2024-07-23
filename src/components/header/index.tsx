import { Content, HeaderContainer, NewTransactionButton } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <img src={logo} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Content>
    </HeaderContainer>
  )
}
