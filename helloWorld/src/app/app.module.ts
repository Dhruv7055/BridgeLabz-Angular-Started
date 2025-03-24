import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Ensure this is imported

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, // ✅ Required for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
