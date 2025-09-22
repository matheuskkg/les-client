import faker from "faker-br"
import { selectAny } from "../utils/select"

describe('Testes CRUD Cliente', () => {
	let userData = {}
	let enderecoId = null
	let cartaoId = null

	beforeEach(() => {
		cy.restoreLocalStorage()
	})

	afterEach(() => {
		cy.saveLocalStorage()
	})

	before(() => {
		userData = {
			nome: faker.name.findName(),
			dataNascimento: faker.date.past(30, new Date('2000-01-01')).toLocaleDateString('pt-BR'),
			email: faker.internet.email(),
			cpf: faker.br.cpf(),
			senha: 'Abcdefg@',

			ddd: 11,
			numeroTelefone: faker.phone.phoneNumber('#########'),

			nomeIdentificador: faker.random.words(),
			pais: faker.address.country(),
			estado: faker.address.state(),
			cidade: faker.address.city(),
			logradouro: faker.address.streetName(),
			numeroEndereco: faker.phone.phoneNumber('#####'),
			bairro: faker.address.county(),
			cep: faker.phone.phoneNumber('########'),
			observacao: faker.random.words()
		}
	})

	it('Deve cadastrar um novo usuário', () => {
		cy.intercept('POST', '**/clientes').as('clienteRequest')

		cy.visit('/auth/cadastro')

		cy.get('input[id="nome"]').type(userData.nome)
		selectAny(cy.get('select[id="genero"]'))
		cy.get('input[id="dataNascimento"]').type(userData.dataNascimento)
		cy.get('input[id="email"]').type(userData.email)
		cy.get('input[id="cpf"]').type(userData.cpf)
		cy.get('input[id="senha"]').type(userData.senha)
		cy.get('input[id="senhaConfirmar"]').type(userData.senha)

		cy.get('input[id="ddd"]').type(userData.ddd)
		selectAny(cy.get('select[id="tipoTel"]'))
		cy.get('input[id="numeroTelefone"]').type(userData.numeroTelefone)

		cy.get('input[id="nomeEnd"]').type(userData.nomeIdentificador)
		cy.get('input[id="pais"]').type(userData.pais)
		cy.get('input[id="estado"]').type(userData.estado)
		cy.get('input[id="cidade"]').type(userData.cidade)
		selectAny(cy.get('select[id="tipoLog"]'))
		cy.get('input[id="logradouro"]').type(userData.logradouro)
		selectAny(cy.get('select[id="tipoRes"]'))
		cy.get('input[id="numeroEndereco"]').type(userData.numeroEndereco)
		cy.get('input[id="bairro"]').type(userData.bairro)
		cy.get('input[id="cep"]').type(userData.cep)
		cy.get('input[id="observacao"]').type(userData.observacao)
		cy.get('input[id="cobranca"]').check()
		cy.get('input[id="entrega"]').check()

		cy.get('button[type="submit"]').click()
		cy.wait('@clienteRequest').its('response.statusCode').should('eq', 201)
		cy.url().should('include', '/')
	})

	it('Deve fazer login com o usuário cadastrado', () => {
		cy.intercept('POST', '**/login').as('loginRequest')

		cy.visit('/auth/login')

		cy.get('input[id="email"]').type(userData.email)
		cy.get('input[id="senha"]').type(userData.senha)

		cy.get('button[type="submit"]').click()
		cy.wait('@loginRequest').then((interception) => {
			expect(interception.response.statusCode).to.eq(200)
			const token = interception.response.body.entidades[0].token
			cy.window().then((window) => {
				window.localStorage.setItem('auth.token', token)
			})
		})

		cy.url().should('include', '/')
	})

	it('Não deve ser possível excluir o único endereço de entrega/cobrança', () => {
		cy.intercept('GET', '**/clientes/enderecos').as('consultarEnderecos')
		cy.intercept('DELETE', '**/enderecos/**').as('enderecoRequest')

		cy.visit('/usuario/perfil')

		cy.wait('@consultarEnderecos').then((interception) => {
			const enderecos = interception.response.body.entidades

			expect(enderecos.length).to.eq(1)

			cy.get('i.bi-trash3').first().click()
			cy.get('.ant-modal').should('be.visible')
			cy.get('.ant-modal button').contains('Excluir').click()
			cy.wait('@enderecoRequest').then((interception) => {
				expect(interception.response.statusCode).to.not.eq(200)
			})
		})
	})

	it('Deve cadastrar um novo endereço', () => {
		cy.intercept('GET', '**/clientes/enderecos').as('consultarEnderecos')
		cy.intercept('POST', '**/enderecos').as('enderecoRequest')

		const novoEndereco = {
			nomeIdentificador: faker.random.words() + ' - Novo',
			pais: faker.address.country(),
			estado: faker.address.state(),
			cidade: faker.address.city(),
			logradouro: faker.address.streetName(),
			numeroEndereco: faker.phone.phoneNumber('#####'),
			bairro: faker.address.county(),
			cep: faker.phone.phoneNumber('########'),
			observacao: faker.random.words()
		}

		cy.visit('/usuario/endereco/cadastro')

		cy.get('input[id="nomeEnd"]').type(novoEndereco.nomeIdentificador)
		cy.get('input[id="pais"]').type(novoEndereco.pais)
		cy.get('input[id="estado"]').type(novoEndereco.estado)
		cy.get('input[id="cidade"]').type(novoEndereco.cidade)
		selectAny(cy.get('select[id="tipoLog"]'))
		cy.get('input[id="logradouro"]').type(novoEndereco.logradouro)
		selectAny(cy.get('select[id="tipoRes"]'))
		cy.get('input[id="numeroEndereco"]').type(novoEndereco.numeroEndereco)
		cy.get('input[id="bairro"]').type(novoEndereco.bairro)
		cy.get('input[id="cep"]').type(novoEndereco.cep)
		cy.get('input[id="observacao"]').type(novoEndereco.observacao)
		cy.get('input[id="cobranca"]').check()
		cy.get('input[id="entrega"]').check()

		cy.get('button[type="submit"]').click()
		cy.wait('@enderecoRequest').its('response.statusCode').should('eq', 201)
		cy.url().should('include', '/usuario/perfil')

		cy.wait('@consultarEnderecos').then((interception) => {
			const enderecos = interception.response.body.entidades
			const enderecoEncontrado = enderecos.find(e => e.nomeIdentificador === novoEndereco.nomeIdentificador)
			if (enderecoEncontrado) {
				enderecoId = enderecoEncontrado.id
			}
		})
	})

	it('Deve editar o endereço cadastrado', () => {
		cy.intercept('PATCH', '**/enderecos/**').as('enderecoRequest')

		const enderecoEditado = {
			nomeIdentificador: faker.random.words({ length: { max: 3 } }) + ' - Editado',
			pais: faker.address.country(),
			estado: faker.address.state(),
			cidade: faker.address.city(),
			logradouro: faker.address.streetName(),
			numeroEndereco: faker.phone.phoneNumber('#####'),
			bairro: faker.address.county(),
			cep: faker.phone.phoneNumber('########'),
			observacao: 'Observação editada - ' + faker.random.words()
		}

		cy.visit(`/usuario/endereco/edicao/${enderecoId}`)

		cy.get('input[id="nomeEnd"]').should('be.visible').clear().type(enderecoEditado.nomeIdentificador)
		cy.get('input[id="pais"]').clear().type(enderecoEditado.pais)
		cy.get('input[id="estado"]').clear().type(enderecoEditado.estado)
		cy.get('input[id="cidade"]').clear().type(enderecoEditado.cidade)
		selectAny(cy.get('select[id="tipoLog"]'))
		cy.get('input[id="logradouro"]').clear().type(enderecoEditado.logradouro)
		selectAny(cy.get('select[id="tipoRes"]'))
		cy.get('input[id="numeroEndereco"]').clear().type(enderecoEditado.numeroEndereco)
		cy.get('input[id="bairro"]').clear().type(enderecoEditado.bairro)
		cy.get('input[id="cep"]').clear().type(enderecoEditado.cep)
		cy.get('input[id="observacao"]').clear().type(enderecoEditado.observacao)

		cy.get('button[type="submit"]').click()
		cy.wait('@enderecoRequest').its('response.statusCode').should('eq', 200)

		cy.url().should('include', '/usuario/perfil')
	})

	it('Deve excluir o endereço editado', () => {
		cy.intercept('GET', '**/clientes/enderecos').as('consultarEnderecos')
		cy.intercept('DELETE', '**/enderecos/**').as('enderecoRequest')

		cy.visit('/usuario/perfil')

		cy.wait('@consultarEnderecos')
		cy.get('i.bi-trash3').eq(1).click()

		cy.get('.ant-modal').should('be.visible')
		cy.get('.ant-modal button').contains('Excluir').click()
		cy.wait('@enderecoRequest').its('response.statusCode').should('eq', 200)
	})

	it('Deve cadastrar um novo cartão de crédito', () => {
		cy.intercept('POST', '**/cartoes').as('cartaoRequest')
		cy.intercept('GET', '**/clientes/cartoes').as('consultarCartoes')

		const novoCartao = {
			nomeTitular: userData.nome,
			numeroCartao: '1111222233334444',
			codigoSeguranca: '123'
		}

		cy.visit('/usuario/cartao/cadastro')

		cy.get('input[id="nomeTitular"]').type(novoCartao.nomeTitular)
		cy.get('input[id="numeroCartao"]').type(novoCartao.numeroCartao)
		cy.get('input[id="codigoSeguranca"]').type(novoCartao.codigoSeguranca)

		cy.get('select[id="bandeira"]').should('be.visible')
		selectAny(cy.get('select[id="bandeira"]'))
		cy.get('input[id="preferencial"]').check()

		cy.get('button[type="submit"]').click()

		cy.wait('@cartaoRequest').its('response.statusCode').should('eq', 201)
		cy.url().should('include', '/usuario/perfil')

		cy.wait('@consultarCartoes').then((interception) => {
			const cartoes = interception.response.body.entidades
			const cartaoEncontrado = cartoes.find(c => c.nomeTitular === novoCartao.nomeTitular)
			if (cartaoEncontrado) {
				cartaoId = cartaoEncontrado.id
			}
		})
	})

	it('Deve editar o cartão cadastrado', () => {
		cy.intercept('PATCH', '**/cartoes/**').as('cartaoRequest')

		const cartaoEditado = {
			nomeTitular: userData.nome + ' - Editado',
			numeroCartao: '4444333322221111',
			codigoSeguranca: '456'
		}

		cy.visit(`/usuario/cartao/edicao/${cartaoId}`)

		cy.get('input[id="nomeTitular"]').should('be.visible').clear().type(cartaoEditado.nomeTitular)
		cy.get('input[id="numeroCartao"]').clear().type(cartaoEditado.numeroCartao)
		cy.get('input[id="codigoSeguranca"]').clear().type(cartaoEditado.codigoSeguranca)

		cy.get('select[id="bandeira"]').should('be.visible')
		selectAny(cy.get('select[id="bandeira"]'))

		cy.get('button[type="submit"]').click()
		cy.wait('@cartaoRequest').its('response.statusCode').should('eq', 200)

		cy.url().should('include', '/usuario/perfil')
	})

	it('Deve excluir o cartão editado', () => {
		cy.intercept('GET', '**/clientes/cartoes').as('consultarCartoes')
		cy.intercept('DELETE', '**/cartoes/**').as('cartaoRequest')

		cy.visit('/usuario/perfil')

		cy.wait('@consultarCartoes')
		cy.get('i.bi-trash3').last().click()

		cy.get('.ant-modal').should('be.visible')
		cy.get('.ant-modal button').contains('Excluir').click()
		cy.wait('@cartaoRequest').its('response.statusCode').should('eq', 200)
	})

	it('Deve inativar o usuário cadastrado', () => {
		cy.intercept('DELETE', '**/clientes').as('clienteRequest')

		cy.visit('/usuario/perfil')

		cy.get('a').contains('Inativar conta').click()
		cy.get('.ant-modal').should('be.visible')
		cy.get('.ant-modal button').contains('Inativar').click()
		cy.wait('@clienteRequest').its('response.statusCode').should('eq', 200)
		cy.url().should('include', '/')
	})

	it('Não deve ser possível fazer login com o usuário inativado', () => {
		cy.intercept('POST', '**/login').as('loginRequest')

		cy.visit('/auth/login')

		cy.get('input[id="email"]').type(userData.email)
		cy.get('input[id="senha"]').type(userData.senha)

		cy.get('button[type="submit"]').click()
		cy.wait('@loginRequest').its('response.statusCode').should('eq', 401)
	})
})