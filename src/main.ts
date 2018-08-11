import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

<<<<<<< HEAD
=======

>>>>>>> 53e08970a42059f36064ed3d7fbe2c9aad96a6a6
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
<<<<<<< HEAD
=======

>>>>>>> 53e08970a42059f36064ed3d7fbe2c9aad96a6a6
