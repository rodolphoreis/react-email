# React Email

## Visão Geral

O React Email é uma biblioteca moderna que permite criar e-mails de forma eficiente utilizando React e TypeScript. Ele oferece um conjunto de componentes prontos para uso, simplificando o processo de criação de e-mails visualmente atraentes e compatíveis com os principais clientes de e-mail.

## Instalação

Para começar a usar o React Email em seu projeto, basta instalá-lo via npm:

```bash
npx create-email@latest
```

## Como Usar

### Importação de Componentes

Você pode importar os componentes necessários diretamente de `react-email` em seus arquivos do React:

```javascript
import { Email, Container, Button, Text } from 'react-email';
```

### Exemplo de Uso

Aqui está um exemplo de como você pode usar o React Email para criar um e-mail simples:

```jsx
import React from 'react';
import { Email, Container, Button, Text } from 'react-email';

const MyEmail = () => {
  return (
    <Email>
      <Container>
        <Text>Olá, mundo!</Text>
        <Button href="https://example.com">Clique aqui</Button>
      </Container>
    </Email>
  );
};

export default MyEmail;
```

## Documentação

Para obter mais detalhes sobre como usar o React Email, consulte a [documentação oficial](https://react.email/).

## Contribuição

Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma [issue](https://github.com/rodolphoreis/react-email/issues) ou enviar um [pull request](https://github.com/rodolphoreis/react-email/pulls).


