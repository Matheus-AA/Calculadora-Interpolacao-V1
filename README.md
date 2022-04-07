<h1>Calculadora Interpolação (Cotas de terreno)</h1>
<h2>Versão 1.0</h2>

<p>Olá, eu desesenvolvi esse código para solucionar um problema que estava tendo no meu estagio de engenharia Civil.
A pagina conta com HTML, CSS e JavaSrcipt.</p>

<h2>Conceitos necessarios para entender a finalidade desse projeto</h2>

<h3>Oque é uma cota?</h3>
<li>Em varios projetos na engenharia é necessario saber a cota do terreno pois essa informação é ultilizada para calcular diversar coisas.</li>
<p>A cota do terreno (cota altimétrica) é a distância vertical do nivel do mar até o ponto de cota no terreno, considerando que o nivel do mar é sempre zero.
No caso da imagem a seguir, o <b>ponto de cota</b> na cidade 1 é de 382.83 metros. Isso significa que a altura naquele exato ponto na cidade 1 em relação ao mar
é de 382.83 metros</p>
<p>O topografo é o profissional resolponsavel por fazer o levantamento de cotas, geralmente ele entrega uma planta (projeto) com varios pontos de cotas
como na imagem 2</p>
<div align="center">
  <img width="839" alt="cota3" src="https://user-images.githubusercontent.com/98619044/162107676-5ce117d7-0a42-435e-b25a-a16bebe6f94d.png">
  <p>Imagem 1</p>
</div>

<h3>Oque é interpolação de pontos ?</h3>
<p>Interpolar significa “colocar entre”. Interpolar é uma meio aritimetrico de calcular um ponto ou mais entre dois pontos conhecidos. 
No caso desse projeto foi feito para interpolar pontos de cotas de terreno. como no exemplo a seguir:</p>
<div align="center">
<img width="801" alt="interpolacao2" src="https://user-images.githubusercontent.com/98619044/162115653-9745696a-dbab-48a1-b9ee-5242e9b2d63e.png">
   <p>Imagem 2</p>
</div>
<p>Quando o topografo entrega o projeto os pontos estão separados de tantos em tantos metros dependendo da finalidade da obra e do tamanho do terreno.
  Porém nem sempre os pontos necessarios para o projeto a ser desenvolvido coincidem com os pontos de cotas calculados pelo topografo. E ai que entra a interpolação, para calcular esse 
  ponto desconhecido entre dois pontos de cotas conhecidos como o exempo da imagem anterior.
</p>


<h2>Problema x resolução</h2>
<p>No meu estagio eu trabalho com desenvolvimentos de projetos de esgotamento sanitario e abastecimento de agua, e nesses projetos eu ultilizo bastante
a interpolação de pontos passando até mesmo de 100 pontos por projeto a serem interpolados, e eu realizava as contas com calculadora e papel.
Com o intuito de agilizar esse processo, eu desenvolvi essa aplicação web para otimizar meu tempo de resolução.</p>




<div align="center">

</div>

