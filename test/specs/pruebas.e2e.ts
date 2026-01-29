describe('Login: validación de campo usuario', () => {
  it('Permite escribir el usuario en el input de login', async () => {
    await browser.url('http://localhost:4200')
    const usernameInput = await $('input[formcontrolname="username"]');
    await browser.pause(4000)
    await usernameInput.setValue('usuario')
    await expect(usernameInput).toHaveValue('usuario')
  })

  it('Test 2', async () => {
    await browser.url('http://localhost:4200')
    const simboloMoneda = await $('.login-container > div > form > div > input.form-input')
    await browser.pause(4000)
    await simboloMoneda.setValue('usuario')
    await expect(simboloMoneda).toHaveValue('usuario')
  })
})