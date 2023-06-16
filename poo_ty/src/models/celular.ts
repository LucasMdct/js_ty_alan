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