import { Container } from './styles'

export function Input({ icon: Icon, ...rest}) { /*icon: Icon é para fazer uma 
conversão para não ferir a regra de que todo componente precisa iniciar com letra maiúscula */
  return (
    <Container>
      {Icon && <Icon size={20}/>} {/*isso fará com que o ícone só seja mostrado se o ícone 
      realmente existir, pois nem todos os inputs tem ícones*/}
      <input {...rest} />

    </Container>
  )
}