//propriedades para a visualização da webcam.
//início aula 104
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

 /*obtemos o elemento HTML, no qual queremos mostrar a visualização da webcam e
armazená-lo dentro de uma variável.*/

  camera = document.getElementById("camera");

/*Passaremos a variável camera (que possui a div HTML) dentro de Webcam.attach().
Portanto, como resultado, a visualização da webcam será exibida na div HTML*/
Webcam.attach( '#camera' );

 //CÓDIGO para capturar a imagem   
 /*Webcam.snap() é uma função predefinida de webcam.js utilizada para obter imagens
de uma webcam; essa função contém data_uri que pode ser utilizada para mostrar a
pré-visualização de uma imagem que está sendo gerada após a captura.*/  
function takeSnapshot()
{
    Webcam.snap(function(data_uri) {//utilizaremos data_uri para exibir a imagem.
      /*Agora, vamos atualizar essa div que criamos para a finalidade de conter a imagem em
index.html, com data_uri que possui a imagem capturada
Em seguida, fornecemos uma id a essa tag img .
Fornecemos uma id a tag img para que, depois, possamos obter a imagem dessa tag img
e utilizá-la para comparação com a do modelo.
● Agora, em src da tag img, passamos data_uri. Para que essa imagem seja atualizada
com a captura realizada e seja exibida.*/
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
//testar se ml5.js está funcionando
  console.log('ml5 version:', ml5.version);
  /*caso o número da versão seja
exibida na tela do console, sem qualquer erro, significa que estamos prontos para utilizar
a biblioteca ml5.js.*/
  
//imageClassifier é uma função predefinida de ml5.js utilizada para acionar a função de classificação de imagem ml5.js.
/*Precisamos passar dois parâmetros dentro dessa função.
- Primeiro, o link do modelo.
- Em seguida, um função para iniciar a classificação de imagem ml5.
Se não passarmos essa função, então a classificação de imagem ml5 não iniciará.*/

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rW0KV_CqS/model.json',modelLoaded);

  function modelLoaded() {
   //Agora, escrevemos uma mensagem em console, apenas para verificar se a classificação de imagem ml5 foi iniciada.
    console.log('Model Loaded!');
  }
//FIM DA AULA 104
  //AULA 105
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultObjectName").innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
