const portugues = [
  {
    pergunta:
      "Um dado não viciado, com a forma de um cubo e com as faces numeradas de 1 até 6, foi lançado 3 vezes. Sabendo que a soma dos resultados obtidos foi igual a 5, qual é a probabilidade de o resultado do segundo lançamento do dado ter sido igual a 2?",
    opcoes: ["1/18", " 1/6", " 1/5", " 1/3", " 1/2"],
    correta: "4",
    gabarito:
      "Vamos pensar somente nos resultados que podem dar soma 5<br/> Temos 3 lançamentos: <br/> a+b+c=5 <br/>Como cada resultado é pelo menos 1, as possibilidades são:<br/>(1, 1, 3)<br/>(1, 2, 2)<br/>(1, 3, 1)<br/>(2, 1, 2)<br/>(2, 2, 1)<br/>(3, 1, 1)<br/>São 6 possibilidades igualmente prováveis.<br/>Agora queremos que o segundo lançamento seja 2.<br/>Isso acontece em:<br/>(1, 2, 2)<br/>(2, 2, 1)<br/>Ou seja, 2 das 6 possibilidades.<br/> P=2/6 = 1/3<br/>✅ Resposta: 1/3",
  },

  {
    pergunta:
      "Considere um conjunto de divisores positivos de 60. Escolhemos ao acaso um elemento desse conjunto. Qual a probabilidade desse elemento ser primo?",
    opcoes: ["1/4", "1/2 ", "1/8 ", "1/12", "1/6"],
    correta: "1",
    gabarito:
      "Vamos listar os divisores positivos de 60.<br/>60=2².3.5<br/>A quantidade de divisores é:<br/>(2+1)(1+1)(1+1)=12<br/>Os divisores são:<br/>1,2,3,4,5,6,10,12,15,20,30,60<br/>Agora, quais são primos?<br/>2,3,5 <br/>São 3 <b>números primos</b> entre os 12 divisores.<br/>Então:<br/>P=3/12=1/4<br/>✅ Resposta: 1/4",
  },
  {
    pergunta:
      "Carlos tem probabilidade 2/3 de resolver um problema de probabilidade. Joana, sua colega de classe, tem probabilidade 3/4 de resolver o mesmo problema. Se os dois tentarem resolvê-lo de forma independente, qual é a probabilidade do problema ser solucionado?  ",
    opcoes: ["2/3", "3/4", "4/3", "1/3 x 1/4", "11/12"],
    correta: "5",
    gabarito:
      "Aqui é mais fácil calcular pelo complementar.<br/>1. Probabilidade de Carlos não resolver<br/>Carlos resolve:<br/>2/3<br/>Então, não resolve:<br/>1-2/3=1/3<br/>2. Probabilidade de Joana não resolver<br/>Joana resolve:<br/>3/4<br/>Então, não resolve:<br/>1-3/4=1/4<br/>3. Os dois não resolveremComo são independentes:<br/>1/3 x 1/4 = 1/12<br/>4. Pelo menos um resolver<br/>O problema será solucionado se Carlos ou Joana resolver.<br/>1-1/12=11/12<br/><br/>✅ Resposta: 11/12",
  },

  {
    pergunta:
      "Observe os dados de produção diária dos 10 primeiros dias do mês de janeiro de uma fábrica de peças:<div width:50%;> <img style:'width:100%' src='4questão.png' alt=''></div>A produção mediana foi de 85 mil unidades; o desvio padrão, aproximadamente 22 mil unidades; o total da produção, 1.700.000 unidades. Que códigos no Python estão corretos para esses resultados? Os dados foram carregados dessa forma: dados = [80,90,100,60,40,70, 90, 100,80, 110,120,130,90, 60, 80,70, 90, 60, 80,100]",
    opcoes: [
      "mediana (dados), dp (dados), soma (dados)",
      " median (dados), std (dados), sum (dados)",
      "mediana (dados), dp (dados), sum (dados)",
      "mediana (dados), sd (dados), soma (dados)",
      " median (dados), dp (dados), sum (dados)",
    ],
    correta: "2",
    gabarito:
      "A alternativa correta é:<br/>median(dados), std(dados), sum(dados) ✅<br/>Porque em Python, usando as funções estatísticas apropriadas:<br/><br/>median(dados) → calcula a mediana<br/>std(dados) → calcula o desvio padrão<br/>sum(dados) → calcula a soma<br/><br/><br/>Portanto:<br/>median(dados), std(dados), sum(dados)",
  },
  {
    pergunta:
      "Uma grande empresa alimentícia, gostaria de saber a dispersão dos salários de seus funcionários, para isso deseja calcular a variância dos salários utilizando a linguagem Python. Qual função e biblioteca que pode ser usada para realizar este cálculo? ",
    opcoes: [
      "A função var() da biblioteca NumPy.",
      " A função mean() da biblioteca Pandas.",
      " A função scatter() da biblioteca Matplotlib.",
      " A função fit() da biblioteca Scikit-learn.",
      " A função dense() da biblioteca TensorFlow.",
    ],
    correta: "1",
    gabarito:
      "A resposta correta é:<br/>✅ A função var() da biblioteca NumPy.<br/>Em Python:<br/>import numpy as np<br/>variancia = np.var(salarios)<br/><br/><br/>°np.var() → calcula a variância<br/>°np.mean() → calcula a média<br/>°scatter() → cria gráficos de dispersão<br/>°fit() → geralmente usado para ajustar modelos<br/>°dense() → relacionado a camadas de redes neurais ",
  },
  {
    pergunta:
      "O símbolo E( ) indica o operador esperança ou expectativa matemática. Sendo X e Y variáveis aleatórias, a expressão abaixo nem sempre válida é: ",
    opcoes: [
      "E(X + 3) = E(X) + 3",
      "E(3X) = 3 E(X)",
      "E(XY) = E(X) E(Y)",
      "E(X + Y) = E(X) + E(Y)",
      "E(X - Y) = E(X) - E(Y)",
    ],
    correta: "3",
    gabarito:
      "A expressão que nem sempre é válida é:<br/>✅ E(XY) = E(X)E(Y)<br/>Isso só é válido quando X e Y são independentes.<br/>As outras propriedades são sempre válidas pela linearidade da esperança:<br/> E(X+3)=E(X)+3<br/>E(3X)=3E(X)<br/>E(X+Y)=E(X)+E(Y)<br/>E(X-Y)=E(X)-E(Y)<br/>Já:<br/>E(XY)=E(X)E(Y)<br/>❌ não é necessariamente verdade.<br/>Resposta: (E(XY) = E(X)E(Y)",
  },
  {
    pergunta:
      "Uma variável aleatória X é uniformemente distribuída no intervalo [1, 5]. A média e a variância correspondentes são, respectivamente:",
    opcoes: ["2 e 1/3", " 2 e 2/3", " 3 e 3/4", " 3 e 1/3", " 3 e 4/3 "],
    correta: "5",
    gabarito: `<p>Para uma distribuição uniforme contínua no intervalo [1,5]:</p>

<p><strong>1. Média</strong></p>

<p>A média é o ponto central do intervalo:</p>

<p>μ = (1 + 5) / 2 = 3</p>

<p><strong>2. Variância</strong></p>

<p>Para uma uniforme [a,b]:</p>

<p>σ² = (b - a)² / 12</p>

<p>Então:</p>

<p>σ² = (5 - 1)² / 12 = 16 / 12 = 4 / 3</p>

<p>Portanto: <strong>3 e 4/3</strong></p>

<p>✅ Resposta:3 e 4/3</p>`,
  },
  {
    pergunta:
      "Em uma base dados de preços de um certo produto, existem vários erros de digitação. Para auxiliar a encontrá-los seria ideal fazer um gráfico. Qual a função em Python que é utilizada para fazer a identificação de distribuição e outliers em dados?",
    opcoes: [
      "plt.boxplot()",
      " plt.scatter()",
      "sns.violinplot()",
      "px.pie() ",
      "plt.bar()   ",
    ],
    correta: "1",
    gabarito: `A resposta correta é:
<br/>
✅ plt.boxplot()
<br/>
<strong>O boxplot (diagrama de caixa)</strong> é especialmente útil para identificar:
<br/>
a distribuição dos dados;
<br/>mediana;
<br/>quartis;
<br/><strong>outliers (valores discrepantes).</strong>
<br/>
Exemplo:
<br/><br/>
import matplotlib.pyplot as plt
<br/>
<br/>plt.boxplot(precos)
<br/>plt.show()
<br/><br/>
👉 Resposta: plt.boxplot() `,
  },
  {
    pergunta: `O Python possui uma quantidade enorme de base de dados já précarregados em sua memória.
    <br/>
    Para esse exercício, você vai precisar carregar uma base de dados chamada Iris.
    <br/>
    Ela apresenta dados sobre algumas espécies de plantas. 
    <br/>
    Assinale a alternativa que apresenta a programação necessária para fazer um histograma da variável “tamanho da pétala” (Petal.length) apenas para a espécie (Species) do tipo Setosa. 
    <br/>
    Além disso, a cor do histograma deve ser verde, o eixo X deve estar no intervalo de (1,2), o rótulo do eixo y deve estar escrito “Frequência” , o do eixo x escrito “Tamanho da pétala” , 
    <br/>
    a fonte ser o “Python” e o título “Histograma do tamanho da Pétala para a espécie Setosa`,
    opcoes: [
      "import seaborn as sns iris = sns.load_dataset(''iris'')<br/> <br/>setosa_petal_length = iris.loc[iris[''species''] == ''setosa'' , ''petal_length''] <br/> <br/>sns.histplot(data=setosa_petal_length, color= ''green'')" +
        "sns.set" +
        "(font= ''Python'')<br/> <br/> sns.xlabel(''Tamanho da pétala'')<br/> <br/> sns.ylabel(''Frequência'') ",

      "import seaborn as sns iris = sns.load_dataset(''iris'')<br/><br/>" +
        "sns.histplot(data=setosa_petal_length, color= ''green'')<br/><br/>" +
        "sns.set" +
        "(font= ''Python'')<br/><br/>" +
        "sns.xlabel(''Tamanho da pétala'')<br/><br/>" +
        "sns.ylabel(''Frequência'')<br/><br/>" +
        "sns.title(''Histograma do tamanho da Pétala para a espécie Setosa'')<br/><br/>" +
        "sns.xlim(1, 2)",

      "import seaborn as sns iris = sns.load_dataset(''iris'')<br/><br/>" +
        " setosa_petal_length = iris.loc[iris[''species''] == ''setosa'' , ''petal_length'']<br/><br/>" +
        "sns.title(''Histograma do tamanho da Pétala para a espécie Setosa'')<br/><br/>" +
        " sns.xlim(1, 2)",

      "iris = sns.load_dataset(''iris'')" +
        " setosa_petal_length = iris.loc[iris[''species''] == ''setosa'' , ''petal_length'']" +
        " sns.histplot(data=setosa_petal_length, color= ''green'')" +
        " sns.set(font= ''Python'')" +
        " sns.xlabel(''Tamanho da pétala'')" +
        " sns.ylabel(''Frequência'')" +
        " sns.title(''Histograma do tamanho da Pétala para a espécie Setosa'')" +
        " sns.xlim(1, 2)",

      "Import seaborn as sns setosa_petal_length = iris.loc[iris[''species''] == ''setosa'' , ''petal_length''] +sns.xlim(1, 2)",
    ],
    correta: "4",
    gabarito: `A alternativa correta  ✅

    <img style="width='s50%'" src="9questão.png"/>
Ela contém todas as etapas necessárias:

<strong>1. Carrega a base Iris:</strong>

<pre>
iris = sns.load_dataset("iris")
</pre>

<strong>2. Seleciona apenas a espécie Setosa e o tamanho da pétala:</strong>

<pre>
setosa_petal_length = iris.loc[
    iris["species"] == "setosa", "petal_length"
]
</pre>

<strong>3. Cria o histograma verde:</strong>

<pre>
sns.histplot(data=setosa_petal_length, color="green")
</pre>

<strong>4. Define a fonte:</strong>

<pre>
sns.set(font="Python")
</pre>

<strong>5. Define os rótulos dos eixos:</strong>

<pre>
sns.xlabel("Tamanho da pétala")
sns.ylabel("Frequência")
</pre>

<strong>6. Define o título:</strong>

<pre>
sns.title("Histograma do tamanho da Pétala para a espécie Setosa")
</pre>

<strong>7. Limita o eixo X entre 1 e 2:</strong>

<pre>
sns.xlim(1, 2)
</pre>
`,
  },

  {
    pergunta: `
<p>Considere a função:</p>

<p>
f(x) =
</p>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;── + k, &nbsp;se 0 ≤ x ≤ 3<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0, &nbsp;para todos os outros valores de x
</p>

<p>Sendo <strong>k</strong> uma constante, seu valor é igual a:</p>
`,
    opcoes: [
      `
<p>Considere a função:</p>

<p>
f(x) =
</p>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;── + k, &nbsp;se 0 ≤ x ≤ 3<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0, &nbsp;para todos os outros valores de x
</p>

<p>Sendo <strong>k</strong> uma constante, seu valor é igual a?</p>

<p><strong>Resposta:</strong></p>

<p>
∫₀³ (x/12 + k) dx = 1
</p>

<p>
9/24 + 3k = 1
</p>

<p>
3/8 + 3k = 1
</p>

<p>
3k = 5/8
</p>

<p>
<strong>k = 5/24</strong>
</p>
`,
      "Só tem essa resposta ceta",
      "Só tem essa resposta ceta",
      "Só tem essa resposta ceta",
      "Só tem essa resposta ceta",
    ],
    correta: "1",
    gabarito: "",
  },

  {
    pergunta: `A variável aleatória contínua X tem a seguinte função de densidade de probabilidade
    <p>
f(x) =
</p>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;── + k, &nbsp;se 0 ≤ x ≤ 3<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0, &nbsp;para todos os outros valores de x
</p>

<p>Sendo <strong>k</strong> uma constante, seu valor é igual a:`,
    opcoes: ["1", "3/4", "2/3", "5/24", "1/12"],
    correta: "4",
    gabarito: `
<p>
∫₀³ (x/12 + k) dx = 1
</p>

<p>
9/24 + 3k = 1
</p>

<p>
3/8 + 3k = 1
</p>

<p>
3k = 5/8
</p>

<p>
<strong>k = 5/24</strong>
</p>`,
  },
];
