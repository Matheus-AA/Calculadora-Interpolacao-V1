<h1>Calculadora Interpolação (Cotas de terreno)</h1>
<h2>Versão 1.0</h2>

<p>Olá, eu desenvolvi esse código para solucionar um problema que estava tendo no meu estágio de engenharia Civil. A página conta com HTML, CSS e JavaSrcipt.</p>

<h2>Conceitos necessários para entender a finalidade desse projeto</h2>

<h3>O que é uma cota altimétrica ?</h3>

<li>Em vários projetos na engenharia é necessário saber a cota do terreno pois essa informação é utilizada para calcular diversas coisas.</li>

<p>A cota do terreno (cota altimétrica) é a distância vertical do nível do mar até o ponto de cota no terreno, considerando que o nível do mar é sempre zero.
No caso da imagem a seguir, o <b>ponto de cota</b> na cidade 1 é de 382.83 metros. Isso significa que a altura naquele exato ponto na cidade 1 em relação ao mar
é de 382.83 metros</p>

<p>O topógrafo é o profissional responsável por fazer o levantamento de cotas, geralmente ele entrega uma planta (projeto) com vários pontos de cotas como na imagem 2</p>

<div align="center">
  <img width="839" alt="cota3" src="https://user-images.githubusercontent.com/98619044/162107676-5ce117d7-0a42-435e-b25a-a16bebe6f94d.png">
  <p>Imagem 1</p>
</div>

<h3>O que é interpolação de pontos ?</h3>

<p>Interpolar significa “colocar entre”. Interpolar é um meio acetimétrico de calcular um ponto ou mais entre dois pontos conhecidos. No caso desse projeto foi feito para interpolar pontos de cotas de terreno. Como no exemplo da imagem a seguir:</p>

<div align="center">
<img width="801" alt="interpolacao2" src="https://user-images.githubusercontent.com/98619044/162115653-9745696a-dbab-48a1-b9ee-5242e9b2d63e.png">
   <p>Imagem 2</p>
</div>

<p>Quando o topógrafo entrega o projeto os pontos estão separados de tantos em tantos metros dependendo da finalidade da obra e do tamanho do terreno. Porém nem sempre os pontos necessários para o projeto a ser desenvolvido coincidem com os pontos de cotas calculados pelo topógrafo. E ai que entra a interpolação, para calcular esse ponto desconhecido entre dois pontos de cotas conhecidos como o exemplo da imagem anterior.</p>

<h2>Problema x resolução</h2>

<p>No meu estágio eu trabalho com desenvolvimentos de projetos de esgotamento sanitário e abastecimento de água, e nesses projetos eu utilizo bastante a interpolação de pontos passando até mesmo de 100 pontos por projeto a serem interpolados, e eu realizava as contas com calculadora e papel. Com o intuito de agilizar esse processo, eu desenvolvi essa aplicação web para otimizar meu tempo de resolução.</p>

<h2>Como funciona o site</h2>
<p>No site existem 4 campos a serem preenchidos e um botão que quando pressionado realiza o cálculo</p>
<p>Utilizando o exemplo da imagem 2 temos:</p>
<div align="center">
<table>
	<tr> 
		<td>Informações</td>
    <td>Cota maior</td>
    <td>Cota menor</td>
    <td>Distância entre cotas</td> 
    <td>Distância entre cota maior e ponto</td> 
	</tr>
  <tr> 
		<td>Valor(metros)</td>
    <td>382.77</td>
    <td>382.60</td>
    <td>20</td> 
    <td>5.43</td> 
	</tr>
</table>
</div>

<div align="center">
<img width="400" alt="calculo1" src="https://user-images.githubusercontent.com/98619044/162193778-69243c72-5700-44bb-aeb4-bbd9b3cfc5a2.png">
</div>

<p>Após calcular são devolvidos 3 valores</p>
<ul>
  <li>A cota do terreno no ponto = 382.723845</li>
  <li>Cota com 0.40 metros de profundidade = 382.323845</li>
  <li>Cota com 1.05 metros de profundidade = 381.673845</li>
</ul>
<h3>Obs.</h3>
<ol>
  <li>
  <p>Esses dois últimos valores são referentes as normas da concessionária de água da minha cidade. Por trabalhar com projeto de esgotamento sanitário por norma a   empresa diz que o mínimo para tubulação de rede condominial de esgoto é de 0.40 metros de profundidade e o mínimo para coletor tronco é de 1.05 metros. Por isso   achei interessante adicionar esses valores, pois sempre que existir uma tubulação no ponto que seja inicial sendo de rede condominial ou rede coletora eu já       tenho a cota altimétrica que essa tubulação vai ficar.</p>
  </li>
  <li>Caso tenha um ou mais campos vazios exibe a mensagem: "Todos os campos devem estar preenchidos para realizar a conta"</li>
  <li>Caso a o valor da cota maior seja menor que o da cota menor exibe a mensagem: "O valor da <b>cota  maior</b> não pode ser inferior ao da <b>cota menor</b>"     </li>
  <li>Caso a o valor da distância entre cotas seja menor que o valor da cota maior até o ponto exibe a mensagem: "A distância entre cotas não pode ser inferior a     distância da cota até o ponto a ser interpolado"
  </li>
</ol>
  
