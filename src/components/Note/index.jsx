import { Container } from "./styles"
import { Tag } from "../../components/Tag"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
            /*map é para percorrer cada tag, nesse caso*/
            /*é sempre importante quando estamos trabalhando com listas, 
            colocar uma chave(key)*/
          }
        </footer>
      }
    </Container>
  )
}