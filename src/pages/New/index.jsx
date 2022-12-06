import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { Container, Form } from "./styles"

export function New() {
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título"/>
        </Form>
      </main>
    </Container>
  )
}