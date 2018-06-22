import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Usuario } from "../../model/usuario";

@Component({
    selector:'cadastro-usuario',
    styleUrls:['cadastro-usuario.scss'],
    templateUrl:'cadastro-usuario.html'
})
export class CadastrarUsuario {

    public formGroup:FormGroup
    public usuario:Usuario = new Usuario

    constructor(private formBuilder:FormBuilder){
        
    }

    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            codigo:[null ],
            nome:[null, Validators.required],
            email:[null, Validators.required],
            cpf:[null, Validators.required],
            login:[null, Validators.required],
            senha:[null, Validators.required],
            confirmeSenha:[null, Validators.required],
            apelido:[null],
            telefone:[null],
            celular:[null],
            grupoUsuario:[null, Validators.required],
            ativo:[true]
        });
    }


}