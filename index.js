class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia amaldiçoada";
          break;
        case "guerreiro":
          ataque = "usou sua maldição física";
          break;
        case "monge":
          ataque = "usou sua técnica de exorcismo";
          break;
        case "ninja":
          ataque = "lançou shurikens amaldiçoadas";
          break;
        default:
          ataque = "usou um ataque indefinido";
          break;
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe:
  const heroi1 = new Heroi("Yuji Itadori", 16, "guerreiro");
  const heroi2 = new Heroi("Megumi Fushiguro", 16, "mago");
  
  heroi1.atacar(); // Exibe "O guerreiro atacou usando sua maldição física"
  heroi2.atacar(); // Exibe "O mago atacou usando magia amaldiçoada"
  