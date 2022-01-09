function add(n1: number, n2: number, showResult: boolean, phrase: string){
  // if(typeof number1 !== 'number' || typeof number2 !== 'number'){
  //   throw new Error('Incorrect input!')
  // } código para trazer uma mensagem de erro personalizada caso algum dos parâmetros não seja do tipo number

  const result = n1 + n2;
  
  if(showResult){
    console.log(phrase + result);
  }
  else{
    return n1 + n2;
  }
}

//let number1: number = 5;

let number1: number;
number1 = 5;          //poderíamos declarar a variável e dizer que ela é do tipo número enquanto já atribuímos
                      //um valor a ela igual fizemos na linha 16, porém é mais recomendado por boa prática
                      //fazermos igual foi feito nas linhas 18 e 19

const number2 = 2.8;
const printResult = true;

let resultPhrase = 'The result is: ';
//resultPhrase = 0;
resultPhrase = 'another result is: ';                     
                                        //se iniciarmos uma variável com um tipo e depois mudarmos o tipo dela
                      //igual fizemos nas linhas 26 e 27 o typescript nos retornará um erro, pois no typescript
                      //as variáveis devem possuir um tipo bem definido, no entanto se declararmos um outro valor
                      //do mesmo tipo na variável, como fizemos na linha 28, o typescript irá aceitar

add(number1, number2, printResult, resultPhrase);

/*no javascript temos vários tipos de dados, que são:

    - number: o javascript não diferencia tipos de número, nele não há diferença entre int, float, double,
      etc

    - string: são os valores que são interpretados como texto, no javascript podemos declarar uma string
      usando "", '', e ``

    - boolean: valores booleanos são os de true e false

  Ao declararmos uma variável ou um parâmetro no typescript nós podemos especificar qual será o tipo daquele
  valor, no caso de uma função podemos especificar seus valores assim da seguinte forma: 
    function(num1: number, num2: number){
      return num1 + num2;
    }
                                        * O tipo number nos parâmetros foi só um exemplo, também poderíamos ter
                                          colocado string e boolean se quiséssemos
*/
