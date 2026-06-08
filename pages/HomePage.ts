import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  
  // Menú superior global
  readonly logoIronRidge: Locator;
  readonly menuProjects: Locator;
  readonly menuOrders: Locator;
  readonly menuResources: Locator;
  readonly botonAceptarPrivacidad: Locator;
  // Tarjetas principales de creación de proyecto (image_9794c5.png)
  readonly opcionPitchedRoof: Locator;
  readonly opcionAttachedFlat: Locator;
  readonly opcionBallastedFlat: Locator;
  readonly opcionGroundBased: Locator;

  constructor(page: Page) {
    this.page = page;

    // Inicializamos el menú superior
    this.logoIronRidge = page.locator('a:has(img[alt*="IRONRIDGE"])').first();
    this.menuProjects = page.getByRole('button', { name: /projects/i });
    this.menuOrders = page.getByRole('button', { name: /orders/i });
    this.menuResources = page.getByRole('button', { name: /resources/i });
    this.botonAceptarPrivacidad = page.getByRole('button', { name: 'Save' }).first();


    // Inicializamos las opciones del cuerpo basándonos en image_9794c5.png
    // Usamos 'text=' o 'getByRole' dependiendo de cómo responda el HTML real
    this.opcionPitchedRoof = page.locator('text=pitched roof').first();
    this.opcionAttachedFlat = page.locator('text=attached flat').first();
    this.opcionBallastedFlat = page.locator('text=ballasted flat').first();
    this.opcionGroundBased = page.locator('text=ground based').first();
  }
async manejarPopUpPrivacidad() {
    // Le damos un par de segundos máximos para ver si aparece el pop-up
    try {
      if (await this.botonAceptarPrivacidad.isVisible({ timeout: 3000 })) {
        console.log("⚠️ Pop-up de privacidad detectado. Cerrándolo...");
        await this.botonAceptarPrivacidad.click();
      }
    } catch (error) {
      console.log("✅ No se detectó pop-up de privacidad, continuando flujo...");
    }
  }


  // Métodos de acción para dirigirnos a los cotizadores específicos
  async seleccionarPitchedRoof() {
    await this.manejarPopUpPrivacidad();
    await this.opcionPitchedRoof.waitFor({ state: 'visible', timeout: 10000 });
    await this.opcionPitchedRoof.click();
  }

  async seleccionarAttachedFlat() {
    await this.opcionAttachedFlat.waitFor({ state: 'visible' });
    await this.opcionAttachedFlat.click();
  }

  async seleccionarBallastedFlat() {
    await this.opcionBallastedFlat.waitFor({ state: 'visible' });
    await this.opcionBallastedFlat.click();
  }

  async seleccionarGroundBased() {
    await this.opcionGroundBased.waitFor({ state: 'visible' });
    await this.opcionGroundBased.click();
  }

  
}