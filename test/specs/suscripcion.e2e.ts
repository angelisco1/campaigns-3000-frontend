import loginPage from "test/pageobjects/login.page"

describe.only('Suscripcion', () => {

  beforeEach(async () => {
    await loginPage.open()
    await loginPage.login('avillalba', 'avillalba')
    await $('=Suscripción').click()
  })


  it('debería de mostrar un precio de 4.99 al pulsar sobre 1 categoria', async () => {
    await $('[value="tecnología"]').click()

    const precioElement = await $('form > div.form-group > div:nth-child(3) > div:nth-child(2)')
    await expect(precioElement).toHaveText(expect.stringContaining('4.99'))
  })

  it('debería de mostrar un precio de 6.99 al pulsar sobre 2 categorias', async () => {
    await $('[value="tecnología"]').click()
    await $('[value="ia"]').click()

    const precioElement = await $('form > div.form-group > div:nth-child(3) > div:nth-child(2)')
    await expect(precioElement).toHaveText(expect.stringContaining('6.99'))
  })

  it('debería de mostrar un precio de 11.99 al pulsar sobre 5 categorias', async () => {
    await $('[value="tecnología"]').click()
    await $('[value="ia"]').click()
    await $('[value="marketing"]').click()
    await $('[value="diseño"]').click()
    await $('[value="datos"]').click()

    const precioElement = await $('form > div.form-group > div:nth-child(3) > div:nth-child(2)')
    await expect(precioElement).toHaveText(expect.stringContaining('11.99'))
  })

  it('debería de mostrar un error "Fondos insuficientes" al hacer la suscripción con la tarjeta "4000 0000 0000 0051"', async () => {
    await $('[value="tecnología"]').click()

    await $('[formcontrolname="cardNumber"]').setValue('4000 0000 0000 0051')
    await $('[formcontrolname="expiry"]').setValue('12/30')
    await $('[formcontrolname="cvv"]').setValue('128')

    await $('button[type="submit"]').click()
    const mensaje = await $('.error-message').getText()

    await expect(mensaje).toEqual('Fondos insuficientes')
  })
})