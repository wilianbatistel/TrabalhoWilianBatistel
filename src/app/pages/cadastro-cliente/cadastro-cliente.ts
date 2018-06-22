import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Usuario } from "../../model/usuario";

@Component({
    selector:'cadastro-cliente',
    styleUrls:['cadastro-cliente.scss'],
    templateUrl:'cadastro-cliente.html'
})
export class CadastrarCliente {

    public formGroup:FormGroup
    public usuario:Usuario = new Usuario
    constructor(private formBuilder:FormBuilder){
        
    }
    
    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            razaoSocial:[null, Validators.required],
            fantasia:[null, Validators.required],
            cpfCnpj:[null, Validators.required],
            rg:[null],
            cep:[null, Validators.required],
            celular:[null, Validators.required],
            telefone:[null, Validators.required],
            data:[null, Validators.required],
            email:[null, Validators.required],
            estado:[null, Validators.required],
            cidade:[null, Validators.required],
            bairro:[null, Validators.required],
            rua:[null, Validators.required],
            numero:[null, Validators.required],
            complemento:[null]
        });
    }


}