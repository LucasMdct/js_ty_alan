// NOME DE CLASSE SEMPRE COMEÇANDO COM LETRA MAIUSCULA
// CLASSE ANIMAIS

export class Animal {
    Nome: String;
    Cor: String;
    Raca: String;
    Peso: Number;
    Idade: Number;
  
    emitirSons(Som: String) {
      console.log(this.Nome, "Emitindo Som... " + Som);
    }
  
    Locomover(Passos: Number) {
      console.log("Locomovendo " + Passos + " Passos.")
  
    }
  
  }