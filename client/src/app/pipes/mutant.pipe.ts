import { AppService } from './../services/app.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isMutant',
  pure: false
})
export class MutantPipe implements PipeTransform {
  constructor(private appService: AppService) {}
  private setValue = {};
  private result = '';
  private checkMutant = true;
  transform(value: string): any {
    this.setValue = { dna: value };
    if (this.checkMutant) {
      this.checkMutant = false;
      // Este servicio nos checkea si es mutante o no nuestro ADN
      this.appService.isMutant(this.setValue).subscribe(
        data => {
          this.result = 'Mutante';
        },
        err => {
          this.result = 'No-Mutante';
        }
      );
    }
    return this.result;
  }
}
