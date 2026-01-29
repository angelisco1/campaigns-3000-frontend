describe('Unos tests', () => {
  it('Test 1', async () => {
    await browser.url('http://localhost:4200')
    const x = await $('/html/body/app-root/app-login/div/div/form/div[1]/input')
    await x.setValue('usuario')
    await expect(x).toHaveValue('usuario')
  })

  it('Test 2', async () => {
    await browser.url('http://localhost:4200')
    const x = await $('.login-container > div > form > div > input.form-input')
    await x.setValue('usuario')
    await expect(x).toHaveValue('usuario')
  })
})