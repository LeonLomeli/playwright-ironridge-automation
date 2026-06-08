import { test, expect } from '@playwright/test';
// Importamos nuestra página del Login
import { LoginPage } from '../pages/LoginPage';

test('IronRidge - Login Exitoso con Estructura POM', async ({ page }) => {
  // Instanciamos la clase pasando el objeto 'page' de Playwright
  const loginPage = new LoginPage(page);

  // Ejecutamos las acciones de forma semántica
  await loginPage.navegar();
  await loginPage.iniciarSesion('yahirleonardo.lomeli@gmail.com', 'leonironridge.91');

  // Dejamos el colchón de tiempo para verificar que entramos al Dashboard
  await page.waitForTimeout(8000);
  
  // Aquí es donde en el futuro pondrás tus Asserts/Expects del Dashboard
});
 