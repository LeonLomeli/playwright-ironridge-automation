import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('IronRidge - Iniciar flujo de cotización Pitched Roof', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  // 1. Atacamos el Login
  await loginPage.navegar();
  await loginPage.iniciarSesion('yahirleonardo.lomeli@gmail.com', 'leonironridge.91');
  // 2. Interactuamos con el HomePage (image_9794c5.png)
  // Elige la opción del cotizador que quieres empezar a automatizar hoy
  await homePage.seleccionarPitchedRoof();

  // 3. Colchón de tiempo para que veas a dónde te redirecciona la pantalla
  await page.waitForTimeout(5000);
});