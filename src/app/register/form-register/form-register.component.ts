import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

    input01:string = '';
    input02:string = '';
    input03:string = '';
    input04:string = '';
    input05:string = '';
    inputSelect01:any = '';
    estado01:boolean = true;
    estado02:boolean = true;
    estado03:boolean = true;
    estado04:boolean = true;
    estado05:boolean = true;
    estado06:boolean = true;

    validate(event:Event,input:string,input00:string,state:boolean):void{


      let input0 = document.getElementById(input);
      input00 = (<HTMLInputElement>event.target).value;
      state = false;

      if(input00 === ''){

        input0?.classList.remove('is-invalid');
        input0?.classList.add('is-invalid');
        state = false;
      }
      else{

        input0?.classList.remove('is-invalid');
        input0?.classList.add('is-valid');
        state=true;
      }
    };

    validateSelect():void{
      if(this.inputSelect01 !== ''){
        let input0 = document.getElementById('validationSelect');
        input0?.classList.remove('is-invalid');
        input0?.classList.add('is-valid');
        this.estado05 = true;
      }
    }

    enviarForm():void{
      if(this.estado01 && this.estado02 && this.estado03 && this.estado04 && this.estado05 && this.estado06 === true){
        alert('enviado');
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
