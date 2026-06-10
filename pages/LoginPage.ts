import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly campoEmail: Locator;
  readonly campoPassword: Locator;
  readonly botonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    // Selectores limpios para el eCommerce Playground
    this.campoEmail = page.locator('#input-email');
    this.campoPassword = page.locator('#input-password');
    this.botonLogin = page.getByRole('button', { name: 'Login' });
  }

  async navegar() {
    // URL directa a la pantalla de Login del eCommerce de práctica
    await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  }

  async iniciarSesion(correo: string, contrasenia: string) {
    await this.campoEmail.waitFor({ state: 'visible' });
    await this.campoEmail.fill(correo);
    
    await this.campoPassword.waitFor({ state: 'visible' });
    await this.campoPassword.fill(contrasenia);

    await this.botonLogin.click();
  }}