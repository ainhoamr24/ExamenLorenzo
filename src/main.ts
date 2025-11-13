import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/components/paginas/main/app.config';
import { App } from './app/components/paginas/main/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
