import { test } from '@playwright/test';
import { SearchPage } from '../pages/SearchBar';
import { LoginPage } from '../pages/LoginPage';

test('E-Commerce - Search by product', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const loginPage = new LoginPage(page);
  // 1. Navegamos al nuevo portal
  await loginPage.navegar();
  // 2. Iniciamos sesión con la cuenta que registraste en el Paso 2
  await loginPage.iniciarSesion('yahirtesterqa@tester.com', 'test123');

  // Colchón de tiempo para verificar en el UI Mode que entramos al Dashboard de la cuenta
  await page.waitForTimeout(5000);
 await searchPage.Searchbtn();
 await page.waitForTimeout(4000);
});