const matematica = [
  {
    pergunta:
      "Esse padrão define uma estrutura similar à de um esquema <mark>PublisherSubscriber</mark>, pois existe um Publisher detentor de um conjunto de informações e registra um conjunto de objetos interessados em receber notificações de modificação desse conjunto de informações, ou seja, do estado do Publisher. Ao ter o seu estado interno modificado, o Publisher notifica os Subscribers que, por sua vez, executam algum procedimento específico de tratamento dessa modificação. Assinale a opção com o padrão correspondente à descrição acima.",
    opcoes: ["Observer", " State", " Template Method", " Strategy", " Visitor"],
    correta: "1",
    gabarito: `A resposta correta é Observer. ✅

O padrão Observer é justamente baseado na relação:
<br/><br/>
Publisher (Subject) → Subscribers (Observers)
<br/>
Quando o estado do Publisher muda:
<br/><br/>
O Publisher detecta a mudança.
<br/>Ele notifica todos os Subscribers registrados.
<br/>Cada Subscriber executa seu próprio tratamento.
<br/><br/>
Isso corresponde exatamente à descrição apresentada.
<br/><br/>
Resposta: Observer.`,
  },

  {
    pergunta:
      "Assinale a alternativa que expressa a intenção do padrão de projeto Template Method:",
    opcoes: [
      "Encapsular uma família de algoritmos em objetos, permitindo que os módulos clientes possam utilizar esses algoritmos de forma intercambiável.",
      "Definir uma relação de dependência entre objetos, de modo a garantir que modificações no estado do objeto detentor da informação sejam notificadas automaticamente para os objetos inscritos previamente como interessados em receber essas notificações.",
      "Implementar a estrutura de um algoritmo genérico em uma superclasse, considerando que os passos comuns são implementados na própria superclasse, enquanto os passos específicos são implementados nas suas subclasses.",
      "Permite capturar o estado interno de um objeto, permitindo que o seu estado seja restaurado posteriormente, sem quebrar o encapsulamento desse objeto.",
      "Encapsular uma requisição em um objeto, permitindo o registro do histórico de requisições disparadas pelos módulos cliente e a criação de filas de requisições",
    ],
    correta: "3",
    gabarito: `
    A alternativa correta é:
<br/><br/>
Implementar a estrutura de um algoritmo genérico em uma superclasse, considerando que os passos comuns são implementados na própria superclasse, enquanto os passos específicos são implementados nas suas subclasses.
<br/><br/>
Esse é exatamente o objetivo do Template Method.
<br/><br/>
Para memorizar:
<br/><br/>
Template Method = modelo de algoritmo
<br/><br/>
A superclasse define a sequência/estrutura do algoritmo, enquanto as subclasses implementam ou sobrescrevem partes específicas.
<br/><br/>
As outras alternativas correspondem a:
<ul>
<li> Strategy</li>
<li> Observer</li>
<li>✅ Template Method</li>
<li> Memento</li>
<li> Command</li>

</ul>`,
  },
  {
    pergunta:
      "Um módulo A contém operações como conversão de medidas, formatação de valores monetários, remoção de espaços duplicados em strings e envio/recepção de arquivos FTP. O módulo A possui coesão:",
    opcoes: [
      "Funcional.",
      "Procedural.",
      "Coincidente.",
      "Temporal.",
      "Sequencial.",
    ],
    correta: "3",
    gabarito: `A resposta correta é:
<br/><br/>
 Coincidente
<br/><br/>
O módulo A reúne operações sem relação entre si:
<br/><br/>
<ul>
<li>Conversão de medidas</li>
<li>Formatação de valores monetários</li>
<li>Remoção de espaços em strings</li>
<li>Envio/recepção de arquivos FTP</li>
</ul>
<br/><br/>
Essas operações foram agrupadas apenas porque não existe uma relação lógica forte entre elas.
<br/><br/>
Isso caracteriza a coesão coincidente, também chamada de coesão casual.
<br/><br/>
Para memorizar:
<ul>
<li><b>Coincidente</b> → coisas sem relação, simplesmente agrupadas.</li>
<li><b>Temporal</b> → operações relacionadas ao mesmo momento/tempo.</li>
<li><b>Procedural</b> → operações executadas em uma sequência específica.</li>
<li><b>Sequencial</b> → saída de uma operação serve como entrada da próxima.</li>
<li><b>Funcional</b> → todas as operações contribuem para uma única função bem definida.</li>
<ul>
<br/><br/>
Resposta: Coincidente.`,
  },
  {
    pergunta:
      "Uma mudança essencial no modelo de programação Java, com a evolução do JEE, foi o uso de anotações nas diversas tarefas de configuração dos EJBs do aplicativo. Para que serve a anotação Local no ambiente de criação de EJBs?",
    opcoes: [
      "Definir um Stateless Session Bean. ",
      "Definir um contexto de persistência local para o Session Bean. ",
      "Definir a interface de acesso às entidades do JPA. ",
      "Definir um Stateful Session Bean. ",
      "Definir a interface de acesso local ao pool de EJBs.",
    ],
    correta: "5",
    gabarito: `A resposta correta é:
<br/><br/>
✅ Definir a interface de acesso local ao pool de EJBs.
<br/>
A anotação @Local em EJB indica que a interface do bean será usada para acesso local, ou seja, por componentes que estão dentro da mesma aplicação/JVM.
<br/>
Para memorizar:
<ul>
<li>@Local → acesso <b>local</b> ao EJB.</li>
<li>@Remote → acesso <b>remoto</b> ao EJB.</li>
<li>@Stateless → define um <b>Stateless Session Bean.</b></li>
<li>@Stateful → define um <b>Stateful Session Bean.</b></li>
<ul>`,
  },
  {
    pergunta:
      "A arquitetura MVC (Model, View e Controller) é utilizada de forma ampla na criação de sistemas cadastrais e caracteriza-se pela divisão do sistema em três camadas, com objetivos específicos. Considerando a divisão utilizada pelo MVC, a interface de usuário e o componente DAO estariam, respectivamente, nas camadas:",
    opcoes: [
      "View e Model.",
      "Controller e Model.",
      "View e Controller.",
      "Model e View.",
      "Model e Controller.",
    ],
    correta: "1",
    gabarito: `A resposta correta é:
<br/><br/>
✅ A) View e Model.
<br/><br/>
No MVC:
<br/><br/>
<ul>
<li><b>View</b> → interface de usuário, responsável pela apresentação.</li>
<li><b>Controller</b> → recebe as requisições e coordena o fluxo.</li>
<li><b>Model</b> → representa os dados e a lógica de negócio/acesso aos dados. O <b>DAO (Data Access Object)</b> fica associado ao Model.</li>
</ul>
<br/><br/>
Portanto:
<br/><br/>
<b>Interface de usuário → View
DAO → Model</b>
<br/><br/>
👉 Resposta:<b> View e Model.</b>`,
  },
  {
    pergunta:
      "Na implementação desse padrão, cada objeto de uma estrutura hierárquica deve definir uma operação Accept, que recebe um objeto de uma classe X como parâmetro. A classe X, por sua vez, implementa uma interface genérica Z, definindo uma operação específica de tratamento para cada tipo de objeto que pertença à estrutura hierárquica. Assinale a opção com o nome do padrão cuja estrutura de solução foi descrita no enunciado.",
    opcoes: ["Strategy", "Template Method", "Observer", "State", "Visitor"],
    correta: "5",
    gabarito: `A resposta correta é:
<br/><br/>
✅Visitor
<br/><br/>
O ponto-chave é a operação Accept:
<br/><br/>
<p style="background-color:rgb(239, 239, 239); font-weight: 300; ">
Objeto da estrutura → accept(visitor)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visitor (X)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tratamento específico<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;para cada tipo de objeto<br/>
</p>
<br/><br/>
No padrão Visitor, cada elemento da estrutura implementa <span style="background-color:rgb(239, 239, 239); font-weight: 300; ">accept()</span>, recebendo um Visitor. O Visitor possui uma operação específica para cada tipo de elemento.
<br/><br/>
Para memorizar:
<br/><br/>
Visitor = <span style="background-color:rgb(239, 239, 239); font-weight: 300; ">accept()</span> + <span style="background-color:rgb(239, 239, 239); font-weight: 300; ">visit()</span>
<br/><br/>
👉 Resposta: Visitor.`,
  },
  {
    pergunta:
      "Marcar para revisão Fornecer uma interface de alto nível para os módulos clientes acessarem um componente ou subsistema, desacoplando os módulos clientes da estrutura interna do subsistema e reduzindo o número de elementos com os quais os módulos clientes precisam interagir para realizar um serviço. Assinale a alternativa com o nome do padrão que possui esse propósito:",
    opcoes: ["Facade", "Composite", "Proxy", "Abstract Factory", "Bridge"],
    correta: "1",
    gabarito: `A resposta correta é:
<br/><br/>
✅ Facade
<br/><br/>
<p>O padrão <span><mark>Facade (Fachada)</mark></span> fornece uma <span><mark>interface simplificada de alto nível</mark></span> para um subsistema complexo.
</p>
<br/>
A ideia é:
<br/><br/>
<mark>Cliente → Facade → vários componentes do subsistema</mark>
<br/><br/>
Assim, o cliente não precisa conhecer nem interagir diretamente com toda a estrutura interna.
<br/><br/>
Para memorizar:
<br/><br/>
<mark>Facade = simplifica o acesso a um sistema complexo.</mark>
<br/><br/>
👉 Resposta: Facade`,
  },
  {
    pergunta:
      "Você deseja criar um objeto complexo formado por diferentes partes. Para isso, você define uma interface abstrata responsável com operações representando a criação dessas partes, permitindo que as implementações concretas dessa interface criem diferentes representações dessas partes. Qual padrão de projeto você utilizaria nessa situação?",
    opcoes: [
      "Abstract Factory",
      "Factory Method",
      "Singleton",
      "Prototype",
      "Builder",
    ],
    correta: "5",
    gabarito: `
    A resposta correta é:
<br/><br/>
✅ Builder
<br/><br/>
O Builder é usado para construir objetos complexos passo a passo, separando o processo de construção da representação final do objeto.
<br/><br/>
A descrição fala em:
<br/><br/>
<ul>
<li>Objeto <b>complexo</b></li>
<li>Formado por <b>diferentes partes</b></li>
<li>Operações para <b>criar essas partes</b></li>
<li>Diferentes implementações podem produzir <b>diferentes representações</b></li>
<ul>
<br/><br/>
Isso caracteriza o <b>Builder.<b/>
<br/><br/>
Para memorizar:
<br/><br/>
Builder = <mark>construir um objeto complexo por etapas.</mark>
<br/><br/>
👉 Resposta: Builder.`,
  },
  {
    pergunta:
      "Os iteradores de coleção em Java obtidos a partir da interface Collection são implementados com a aplicação de qual padrão de projeto?",
    opcoes: [
      "Abstract Factory",
      "Factory Method",
      "Singleton",
      "Prototype",
      "Builder",
    ],
    correta: "2",
    gabarito: `A resposta correta é:
<br/><br/>
✅ Factory Method
<br/><br/>
A interface Collection possui o método:
<br/>
<span style="background-color:rgb(239, 239, 239); font-weight: 300; ">

<span style="font-size:10px; font-weight: 500; "> <span style="word-spacing:-4px; font-weight: 500; ">< / ></span> java</span><br/>
Iterator<span style="word-spacing:-4px; background-color:rgb(239, 239, 239); font-weight: 300; ">< E ></span> iterator();
</span>
<br/><br/>
Esse método permite que cada implementação de 
<span style="word-spacing:-4px; background-color:rgb(239, 239, 239); font-weight: 300; "> Collection</span> forneça o <mark>iterador apropriado</mark> para percorrer seus elementos.
<br/><br/>
Isso caracteriza o Factory Method: uma classe/interface define um método para criação de um objeto, deixando para as implementações concretas determinar qual objeto será criado.
<br/><br/>
Para memorizar:
<br/><br/>
<mark>Factory Method = método que cria/fornece um objeto adequado.</mark>
<br/>
👉 Resposta: Factory Method.`,
  },
  {
    pergunta: `<p>Veja o código a seguir e assinale a alternativa com o tipo de acoplamento existente entre a <mark>classe Exemplo e a classe Lâmpada</mark>.</p>
    <div style=" background-color:rgb(239, 239, 239); font-weight: 300; ">
 <p style="font-size:10px; color: #01428c;">

 <span style=" color: #8c012b;">public class Lampada</span> {
<br/> 
<br/>  &nbsp;&nbsp;<span style=" color: #8c012b;">public static final</span> int LIGAR = 1;
<br/>  &nbsp;&nbsp;<span style=" color: #8c012b;"> public static final</span> int DESLIGAR = 0;
<br/>
<br/>  &nbsp;&nbsp;<span style=" color: #8c012b;">public void </span> realizarOperacao(int codigo) {
<br/>
<br/>   &nbsp;&nbsp;&nbsp;<span style=" color: #8c012b;">switch</span> (codigo) {
<br/>
<br/>    &nbsp;&nbsp;&nbsp;&nbsp;<span style=" color: #8c012b;">case</span> LIGAR:
<br/>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// executa procedimento para ligar a lâmpada
<br/>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=" color: #8c012b;"> break</span>;
<br/>
<br/>    &nbsp;&nbsp;&nbsp;&nbsp;<span style=" color: #8c012b;">case</span> DESLIGAR:
<br/>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// executa procedimento para desligar a lâmpada
<br/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=" color: #8c012b;">break</span>;
<br/> &nbsp;&nbsp;&nbsp;}
<br/>&nbsp;&nbsp;}
<br/>}
<br/>
<span style=" color: #8c012b;">public class</span> Exemplo {
<br/>
&nbsp;&nbsp;<span style=" color: #8c012b;">public static void</span> main(String[] args) {
<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;Lampada lampada = <span style=" color: #8c012b;">new</span> Lampada();
<br/>
   &nbsp;&nbsp;&nbsp;&nbsp;lampada.realizarOperacao(Lampada.LIGAR);
<br/>&nbsp;&nbsp;}
<br/>}

 </p>
    </div>
    
    `,
    opcoes: [
      "Acoplamento Global.",
      "Acoplamento de Estrutura.",
      "Acoplamento Funcional.",
      "Acoplamento Externo.",
      "Acoplamento de Controle.",
    ],
    correta: "5",
    gabarito: `A resposta correta é:
<br/><br/>
 Acoplamento de Controle
<br/>
<br/>
O ponto principal está aqui:
<br/>
<br/>
<p style="background-color:rgb(239, 239, 239); font-weight: 300;color: #01428c; ">
 
           <span style="word-spacing:-4px;color: #111111; font-weight: 500; font-size:10px; ">   <span style="word-spacing:-4px; font-weight: 500; font-size:10px; margin-right:6px; ">< / ></span> java</span><br/>

lampada.realizarOperacao(Lampada.LIGAR);

</p>
<br/>
<br/>
A classe <span><mark>Exemplo</mark></sapn> não apenas chama uma operação de <span style="background-color:rgb(239, 239, 239);>Lampada</span>; ela também passa um código <span style="background-color:rgb(239, 239, 239);>LIGAR</span> que determina qual comportamento interno deve ser executado.
<br/>
<br/>
Ou seja:
<br/>
<br/>
<mark>Exemplo → envia um parâmetro de controle → Lampada decide o que fazer</mark>
<br/>
<br/>
Isso caracteriza acoplamento de controle.
<br/>
<br/>
Para memorizar:
<br/>
<br/>

Acoplamento de controle = uma classe envia uma informação que controla o fluxo de execução de outra classe.
<br/>
<br/>

👉 Resposta:<b>Acoplamento de Controle.</b>`,
  },
  {
    pergunta: "",
    opcoes: [],
    correta: "",
    gabarito: "",
  },
];
