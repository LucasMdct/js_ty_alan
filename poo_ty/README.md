
# Programação Orientada a Objetos com TypeScript

## Abstração
1. Criar uma classe para que a partir dela seja possível instanciar animais.Um animal deve ter um nome, cor, raça, peso, idade.Além dessas características, um animal deve emitir sons e se locomover.

<h5> Projeto - ./src/Models/Animais.ts </h5>


```typescript

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

```


<h5> Arquivo - ./src/app.ts </h5>

```typescript

// CLASSE ANIMAIS 
import { Animal } from "./models/Animais";

let Cachorro = new Animal();

Cachorro.Nome = "rex";
Cachorro.Cor = "marrom";
Cachorro.Raca = "Vira-lata";
Cachorro.Idade = 5;
Cachorro.Peso = 10;

Cachorro.emitirSons("Au Au");
Cachorro.Locomover(10);

let Gato = new Animal();

Gato.Nome = "Mila";
Gato.Cor = "azul";
Gato.Raça = "cianes";
Gato.Idade = 1;
Gato.Peso = 4;

Gato.emitirSons("miau miau");
Gato.Locomover(5);

```


2. Baseado na classe Celular vista a pouco, implementar para que a cada ligação realizada ou recebida o nível da bateria diminua 1 %.Ao fotografar ou conectar a internet, o nível da bateria deve diminuir 2 %.Não permitir que alguma ação seja realizada sem bateria disponível.

3. Criar uma classe que represente um aplicativo que será instalado em um celular.Um aplicativo deve possuir um nome e tamanho em Megabytes.Deve ser possível adicionar vários aplicativos a um celular, desde que possua espaço disponível na memória interna.

<h5> Projeto ./src/Models/Celular.ts </h5>

```typescript
// NOME DE CLASSE SEMPRE COMEÇANDO COM LETRA MAIUSCULA

import { Aplicativo } from "./Aplicativo";

// CLASSE CELULAR 
export class Celular {
  Marca: String;
  Modelo: String;
  capacidadeMemoriaInterna: Number;
  qualidadeCamera: Number;
  Tipo: String;
  nivelBateria: Number;
  Aplicativos: Aplicativo[] = [];

  fazerLigacao(Numero: Number) {
    if (this.nivelBateria > 0) {
      console.log(this.Modelo, "Fazendo ligação para o número: ", Numero);
      this.consumirBateria(1);
    }
    console.log("Você está com " + this.nivelBateria + "% de bateria.");
  }

  Fotografar() {
    if (this.nivelBateria > 0) {
      console.log(this.Modelo, "Fazendo uma fotografia ");
      this.consumirBateria(2);
    }
    console.log("Você está com " + this.nivelBateria + "% de bateria.");
  }

  consumirBateria(Consumo: number) {
    if (this.nivelBateria < Consumo) {
      console.log("Seu Celular " + this.Modelo + " Acabou a bateria");
      this.nivelBateria = 0
    } else {
      this.nivelBateria -= Consumo;
    }
  }

  instalar(Aplicativo: Aplicativo) {
    if (this.temMemoriaSuficientePara(Aplicativo)) {
      this.Aplicativos.push(Aplicativo);
    } else {
      console.log("Acabou sua memoria");
    }
  }

  temMemoriaSuficientePara(Aplicativo: Aplicativo) {
    let memoriaUtilizada = 0;

    for (const app of this.Aplicativos) {
      memoriaUtilizada += app.tamanhoEmMegaBytes;
    }
    return (
      Aplicativo.tamanhoEmMegaBytes + memoriaUtilizada < this.capacidadeMemoriaInterna
    );
  }
}
```

<h5> Arquivo ./src/Models/Aplicativo.ts </h5>

```typescript

//Criando classe Aplicativo

export class Aplicativo {
  Nome: String;
  tamanhoEmMegaBytes: Number;
}

```

<h5> Arquivo ./src/app.ts </h5>

```typescript
// CLASSE CELULAR
import { Celular } from "./models/Celular";

let Iphone13 = new Celular();

Iphone13.Marca = "Apple";
Iphone13.capacidadeMemoriaInterna = 500;
Iphone13.Modelo = "Iphone 13 pro";
Iphone13.Tipo = "Smartphone";
Iphone13.qualidadeCamera = 12;
Iphone13.nivelBateria = 2;

Iphone13.fazerLigacao(193);
Iphone13.Fotografar();

let redMiNote12 = new Celular();

redMiNote12.Marca = "Xiaomi";
redMiNote12.capacidadeMemoriaInterna = 256;
redMiNote12.Modelo = "Xiaomi RedMi Note 12 pro";
redMiNote12.Tipo = "Smartphone";
redMiNote12.qualidadeCamera = 200;
redMiNote12.nivelBateria = 100;

console.log(redMiNote12);

redMiNote12.fazerLigacao(193);
redMiNote12.Fotografar();
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//                      Aplicativo.ts
/////////////////////////////////////////////////////////////////////
import { Aplicativo } from "./models/Aplicativo";

let Instagram = new Aplicativo();
Instagram.Nome = "Instagram";
Instagram.tamanhoEmMegaBytes = 128;

let Facebook = new Aplicativo();
facebook.Nome = "Facebook";
facebook.tamanhoEmMegaBytes = 300;

let Camera = new Aplicativo();
camera.Nome = "Camera";
camera.tamanhoEmMegaBytes = 50;


iphone13.Instalar(Instagram);
iphone13.Instalar(Camera);


console.log(Iphone13);
```

<h4>Construtores</h4>

4 - Criar um construtor para a classe Aplicativo que inicialize todos os atributos.

5 - Criar um construtor para a classe Celular que inicialize todos os atributos. Ao construir um celular, o celular deve estar desligado e não deve permitir que seja inicializado com aplicativos.

<h5> ARQUIVO ./SRC/APP.TS </h5>

```typescript
// import { Animal } from "./models/Animal";
import { Aplicativo } from "./models/Aplicativo";
import { Celular } from "./models/Celular";


let linkedin = new Aplicativo("Linkedin", 50);
console.log(linkedin);

let iphone13 = new Celular("Apple", "iPhone 13", 256, 12, "Smartphone");
iphone13.tipo = "Tijolão";
iphone13.ligar();
console.log(iphone13);

if (iphone13.marca === "Apple") {
  console.log("gasta muita bateria");
}

iphone13.desligar();
console.log(iphone13);
```

<h5>Arquivo ./src/models/Celular.ts</h5>


```typescript
import { Aplicativo } from "./Aplicativo";

export class Celular {
  private _marca: string;
  public readonly modelo: string;
  private readonly _capacidadeMemoriaInterna: number;
  public qualidadeCamera: number;
  public tipo: string;
  public nivelBateria: number;
  private _ligado: boolean;
  public aplicativos: Aplicativo[];

  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number,
    tipo: string
  ) {
    this._marca = marca;
    this.modelo = modelo;
    this._capacidadeMemoriaInterna = capacidadeMemoriaInterna;
    this.qualidadeCamera = qualidadeCamera;
    this.tipo = tipo;
    this.nivelBateria = 100;
    this._ligado = false;
    this.aplicativos = [];
  }

  public get marca(): string {
    return this._marca;
  }

  public get capacidadeMemoriaInterna(): number {
    return this._capacidadeMemoriaInterna;
  }

  public fazerLigacao(numero: number) {
    if (this.nivelBateria > 0) {
      console.log(this.modelo, "Fazendo ligação para o número", numero);
      this.consumirBateria(1);
    }
  }

  public fotografar() {
    if (this.nivelBateria > 0) {
      console.log(this.modelo, "Fotografando");
      this.consumirBateria(2);
    }
  }

  private consumirBateria(consumo: number) {
    if (this.temBateria()) {
      this.nivelBateria = 0;
    } else {
      this.nivelBateria -= consumo;
    }
  }

  private temBateria(): boolean {
    return this.nivelBateria > 0;
  }

  public instalar(aplicativo: Aplicativo) {
    if (this.temMemoriaSuficientePara(aplicativo)) {
      this.aplicativos.push(aplicativo);
    }
  }

  public temMemoriaSuficientePara(aplicativo: Aplicativo) {
    let memoriaUtilizada = 0;

    for (const app of this.aplicativos) {
      memoriaUtilizada += app.tamanhoEmMegaBytes;
    }

    return (
      aplicativo.tamanhoEmMegaBytes + memoriaUtilizada <=
      this.capacidadeMemoriaInterna
    );
  }

  public ligar() {
    if (this.temBateria()) {
      this._ligado = true;
      console.log("Ligando...");
    } else {
      console.log("Sem bateria");
    }
  }

  public desligar() {
    this._ligado = false;
    console.log("Desligando...");
  }
}
```
<h5>Arquivo ./src/models/Aplicativo.ts</h5>


```typescript
export class Aplicativo {
  nome: string;
  tamanhoEmMegaBytes: number;

  constructor(nome: string, tamanhoEmMegaBytes: number) {
    this.nome = nome;
    this.tamanhoEmMegaBytes = tamanhoEmMegaBytes;
  }
}
```

## Encapsulamento

## Henrança

## Polimorfismo
=======
