import {NgForm,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms'

export class AgencyModel{
    agencyName:string = "";
    agencyDescription:string = "";

    formGroup:FormGroup = null;

    constructor()
    {
        var fb = new FormBuilder();
        this.formGroup = fb.group({});
        this.formGroup.addControl('agencyName', new FormControl('', Validators.required));
        this.formGroup.addControl('agencyDescription', new FormControl('', Validators.required));
    }
}