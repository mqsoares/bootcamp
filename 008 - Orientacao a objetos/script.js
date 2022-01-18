class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set salto(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor <= this._saldo){
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
        return `Seu saldo é insuficiente. Você tem um saldo de ${this._saldo} reais`;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCred){
        super(agencia, numero, cartaoCred);
        this.tipo = 'corrente';
        this._cartaoCred = cartaoCred;
    }
    
    get cartaoCred(){
        return this._cartaoCred;
    }
    set cartaoCred(valor){
        this._cartaoCred = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupanca';
    }
      
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitaria';
    }
    
    sacar(valor){
        if(valor > 500){
           return 'Essa é uma Conta Universitaria, o limite para saque é de 500,00 reais';
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}