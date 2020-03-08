import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  actualRoute: string = "/home";
  actualLanguage: string = "English"

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  ngOnInit() {
  }

   /**
   * Swittches the language.
   * @param language
   */
  switchLanguage(language: string) {
    this.translateService.use(language);
    this.selectTheLanguageToPrint(language);
  }

  /**
   * Selects the language to print.
   * @param language 
   */
  selectTheLanguageToPrint(language: string) {
    switch (language) {
      case "en": {
        this.actualLanguage = "English";
        break;
      }
      case "fr": {
        this.actualLanguage = "Français";
        break;
      }
    }
  }

  /**
   * Sets the actual root.
   * @param actualRoute
   */
  setActualRoute(actualRoute: string) {
    this.actualRoute = actualRoute;
  }
}
