import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Alpine from 'alpinejs'


Alpine.start()

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
