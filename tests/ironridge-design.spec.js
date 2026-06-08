const { test, expect } = require('@playwright/test');

test('IronRidge - Login exitoso y creación de proyecto solar', async ({ page }) => {
  // Aquí es donde la magia va a comenzar en nuestra próxima sesión
  await page.goto('https://www.ironridge.com/'); 
  console.log('¡Nuevo repositorio listo para el asistente de diseño solar!');
});