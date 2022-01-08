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

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'The result is: ';

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
