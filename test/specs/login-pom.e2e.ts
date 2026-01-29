import loginPage from "test/pageobjects/login.page"

describe('Login', () => {

  beforeEach(async () => {
    await loginPage.open()
  })

  afterEach(async () => {
    await browser.execute(() => {
      localStorage.clear()
    })
  })

  it('debería de mostrar el error "Invalid credentials" al loguearte con un usuario invalido', async () => {
    const username = 'no-existe'
    const password = 'no-existe'
    const mensajeError = 'INVALID CREDENTIALS'

    await loginPage.login(username, password)

    const error = await loginPage.errorForm
    await expect(error).toHaveText(mensajeError)
  })

  it('debería de mostrar el error "Usuario requerido" al pulsar en Iniciar sesión sin introducir el usuario', async () => {
    const username = ''
    const password = '12351124124124'
    const mensajeError = 'Usuario requerido'

    await loginPage.login(username, password)

    const errorUsuario = await loginPage.errorUsuario.getText()
    await expect(errorUsuario).toBe(mensajeError)
  })

  it('debería de mostrar el error "Contraseña requerida" al pulsar en Iniciar sesión sin introducir la contraseña o siendo esta de menos de 6 caracteres', async () => {
    const username = 'un usuario'
    const password = '1234'
    const mensajeError = 'Contraseña requerida'

    await loginPage.login(username, password)

    const errorUsuario = await loginPage.errorPassword.getText()
    await expect(errorUsuario).toBe(mensajeError)

  })

  it('debería mostrar la etiqueta "Admin" al loguearte con el usuario cfalco', async () => {
    const username = 'cfalco'
    const password = 'cfalco'
    const rol = 'ADMIN'

    await loginPage.login(username, password)

    const badgeRol = await $('.user-info .badge')
    await expect(badgeRol).toHaveText(rol)
  })

  it('debería mostrar la etiqueta "User" al loguearte con el usuario kozinski', async () => {
    const username = 'kozinski'
    const password = 'kozinski'
    const rol = 'USER'

    await loginPage.login(username, password)

    const badgeRol = await $('.user-info .badge')
    await expect(badgeRol).toHaveText(rol)
  })

})