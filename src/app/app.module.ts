import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavService } from './nav.service';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { SectionComponent } from './section/section.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DesktopNavComponent,
    SectionComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
