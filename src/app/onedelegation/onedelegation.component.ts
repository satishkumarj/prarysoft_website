import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../service/validator/validator.service';

@Component({
  selector: 'app-onedelegation',
  templateUrl: './onedelegation.component.html',
  styleUrls: ['./onedelegation.component.css']
})
export class OnedelegationComponent implements OnInit {

  validatorAddress = 'one1leh5rmuclw5u68gw07d86kqxjd69zuny3h23c3';
  status = '';
  uptime : number = 0;
  totalDelegation : number = 0;
  totalRewards : number = 0;
  numberToDivid = 1000000000000000000;
  toSign = 0;
  signed = 1;
  constructor(private validatorService: ValidatorService) {
    this.validatorService.getValidatorDetails(this.validatorAddress)    
    .subscribe(resp => {
      this.status = resp['result']['epos-status'];
      this.toSign = resp['result']['lifetime']['blocks']['to-sign'];
      this.signed = resp['result']['lifetime']['blocks']['signed'];
      this.uptime = ((this.signed / this.toSign) * 100);      
      if(this.uptime == NaN)
      {
        this.uptime = 0.00;
      }      
      this.totalDelegation = (resp['result']['total-delegation'] / this.numberToDivid);
      this.totalRewards = (resp['result']['lifetime']['reward-accumulated'] / this.numberToDivid);
    }); 
  }

  ngOnInit(): void {
  }

}
