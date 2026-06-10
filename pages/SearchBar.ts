import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly SearchBar: Locator;
  readonly Searchbutton: Locator;




constructor(page: Page) {
    this.page = page;
    // Selectores limpios para el eCommerce Playground
    this.SearchBar = page.locator('input[name="search"]').first(); 
    this.Searchbutton = page.locator('button[type="submit"].type-text');
    
  }

 async Search(product: string) {
    
 await this.SearchBar.waitFor({ state: 'visible' });
await this.SearchBar.fill(product);
 await this.Searchbutton.waitFor({ state: 'visible',timeout:3000 });
await this.Searchbutton.click();
    }

    async Searchbtn(){
         await this.Searchbutton.waitFor({ state: 'visible' });
        await this.Searchbutton.click();
    }
  }


