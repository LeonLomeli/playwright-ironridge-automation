import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // 1. Definimos los tipos de nuestras variables usando TypeScript
  readonly page: Page;
  readonly botonInicialSignIn: Locator;
  readonly campoEmail: Locator;
  readonly campoPassword: Locator;
  readonly botonSubmitSignIn: Locator;
  readonly botonSave: Locator;

  constructor(page: Page) {
    this.page = page;
    // 2. Centralizamos los selectores en un solo lugar
    this.botonSave = page.locator('text=Save');
    this.botonInicialSignIn =  page.getByRole('button', { name: 'Sign in' })
    this.campoEmail = page.getByRole('textbox', { name: /email/i });
    this.campoPassword = page.locator('input[type="password"], input[name="Password"]').first();
    this.botonSubmitSignIn = page.getByRole('button', { name: /Sign in/i });
  }

  // 3. Creamos un método para navegar a la URL
  async navegar() {
    await this.page.goto('https://base.ironridge.com/');
  }

  // 4. Encapsulamos el flujo del login con el combo de estabilidad que descubrimos
  async iniciarSesion(correo: string, contrasenia: string) {
    await this.botonSave.click();
    await this.botonInicialSignIn.click();
    await this.page.waitForLoadState('networkidle');

    // Esperamos y escribimos el correo emulando el teclado humano
    await this.campoEmail.waitFor({ state: 'visible', timeout: 15000 });
    await this.campoEmail.pressSequentially(correo, { delay: 50 });

    // Contraseña
    await this.campoPassword.waitFor({ state: 'visible' });
    await this.campoPassword.fill(contrasenia);

    // Clic final
    await this.botonSubmitSignIn.click();
  }
}