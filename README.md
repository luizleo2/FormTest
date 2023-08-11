# Introdução


Olá avaliador, seja bem vindo! :smiley:

Obrigado por dedicar seu tempo para me avaliar.

Aprecio a oportunidade de ter meu código revisado e agradeço quaisquer comentários ou dicas para melhorar e me tornar um programador melhor, caso você deseje oferecer algum.

Então, vamos começar!

<p align="center">
<img src=.github/assets/giphygo.gif height="350px" />
</p>

# O projeto 🎯

O trabalho consistia em desenvolver um formulário em Angular com 10 campos e suas respectivas validações
O formulário deve ter 10 campos, sendo eles:

Nome completo (campo de texto obrigatório)

Email (campo de texto obrigatório, validação de email)

NIF (campo de texto obrigatório, validação de NIF inclui validação do checkdigit)

Data de Nascimento (campo de data obrigatório, validação de idade mínima de 18 anos)

País (lista encadeada obrigatória, pelo menos 5 países, sendo um deles Portugal)

Cidade (lista encadeada obrigatória, pelo menos 2 cidades por país)

Endereço (campo de texto obrigatório)

Codigo-Postal (campo de texto obrigatório, validação do Código Postal quando o país é Portugal)

Telefone (campo de texto obrigatório, validação de telefone, basta validar se tem 9 dígitos e se começa por 3, 2 ou 9)

Género (campo de selecção obrigatório, com 2 opções)

O botão de envio só deve estar habilitado quando todos os campos estiverem preenchidos correctamente.

O campo de email deve ser validado com expressão regular.

O campo de NIF deve ser validado com algoritmo de validação de NIF.

O campo de data de nascimento deve ser validado para garantir que o usuário tem pelo menos 18 anos de idade.

As opções da lista de países devem ser preenchidas com dados estáticos.

As opções da lista de cidades devem ser actualizadas de acordo com o país seleccionado na lista de países.

O campo de Codigo Postal deve ser validado com expressão regular quando o país seleccionado é Portugal.

O campo de telefone deve ser validado com expressão regular.

Segue aqui o Design do projeto

### Layout

<img src=.github/assets/Wireframe.png height="500px" />

# Angular :computer:

Embora o teste aborde conceitos fundamentais de HTML, CSS e JavaScript, como havia dito tenho projetos em React e Vanilla JavaScript.
Foi meu primeiro contato com Angular, e confesso que me empolguei ao enfrentar o desafio de criar um formulário com validações específicas. Dediquei tempo para estudar a documentação e outros recursos de aprendizagem, buscando aplicar as melhores práticas.

Confesso que tive alguns desafios ao implementar as soluções e conectar a lógica de validação com a apresentação no formulário. No entanto, a cada obstáculo superado, senti uma sensação gratificante de aprendizado e crescimento.

#### Lista encadeada :cowboy_hat_face:

Foi este o meu maior desafio, foi literalmente um combo de tentativas e erros com bastante uso da massa cinzenta.
Então, basicamente, a lógica foi:

Criar uma classe para representar o nó ```Node```.

A classe ```LinkedList``` é onde a mágica acontece e gerencia toda a lista encadeada. 

O método ```getDistinctCountries``` fica responsável por percorrer a lista e retornar um array de países.

O método ```getCitiesByCountry``` recebe o país como parâmetro e retorna a lista de cidades associadas.

A função ```createLinkedList``` cria uma instância de ```LinkedList``` e preenche os dados de exemplo. 

Essa função fica responsável por adicionar os nós à lista, representando diferentes países e suas cidades.


# Tempo de Produção ⏱️

- 1 dia para montar o formulário e validar os campos de: Nome, Email, NIF.
- 1 dia para validar os campos de Data de Nascimento, Código Postal, Endereço e Contato, além de melhorar a interface.
- 1 dia para melhorar a interface e tentar implementar os campos de Cidade e País.
- 2 dias Lista encadeada validação Código postal com o país selecionado e  melhorar função de validação do botão "enviar"

## Segunda chance 🥈

Se eu tivesse uma segunda oportunidade para continuar este projeto,

Adicionaria mais estilização e alteraria a forma de visualização com um formulário em etapas (multi-step).

Usaria máscaras da própria biblioteca do Angular para os campos de Data de Nascimento e Contato,
proporcionando uma maior interatividade com o cliente.

Além disso, facilitaria a correção de erros,
pois haveria "menos" campos visíveis para responder.

## Considerações Finais :floppy_disk:

Me sinto realizado e motivado por terminar esta etapa, tendo em vista que este é o meu primeiro contato com Angular.
Acredito ter realizado um bom trabalho e atendido minimamente às expectativas.

Um muito obrigado pelo seu tempo, e todo conselho de melhoria é muito bem-vindo e necessário para esse meu início de caminhada, independente do resultado

> Para a versão final [clique aqui](https://form-test-six-sigma.vercel.app/)

<p align="center">
<img src=.github/assets/giphydone1.gif height="350px" />
</p>
