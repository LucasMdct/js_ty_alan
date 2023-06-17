export class Aplicativo {
  private _nome: string;
  private _tamanhoEmMegaBytes: number;

  constructor(nome: string, tamanhoEmMegaBytes: number) {
    this._nome = nome;
    this._tamanhoEmMegaBytes = tamanhoEmMegaBytes;
  }
  ////////////////////////////////////////////////////////////////////////////
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }
  ////////////////////////////////////////////////////////////////////////////
  public set tamanhoEmMegaBytes(tamanhoEmMegaBytes: number) {
    this._tamanhoEmMegaBytes = tamanhoEmMegaBytes;
  }

  public get tamanhoEmMegaBytes(): number {
    return this._tamanhoEmMegaBytes;
  }
  ////////////////////////////////////////////////////////////////////////////
}
