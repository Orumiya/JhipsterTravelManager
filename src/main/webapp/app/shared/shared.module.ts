import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    JhipsterTravelManagerSharedLibsModule,
    JhipsterTravelManagerSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [JhipsterTravelManagerSharedLibsModule, JhipsterTravelManagerSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [JhipsterTravelManagerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTravelManagerSharedModule {}
