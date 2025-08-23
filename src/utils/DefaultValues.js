export function defaultDadosPessoais() {
	return {
		nome: '',
		dataNascimento: '',
		genero: '',
		cpf: '',
		email: '',
	}
}

export function defaultSenha() {
	return {
		senha: '',
		senhaConfirmar: '',
	}
}

export function defaultTelefone() {
	return {
		ddd: '',
		tipoTelefone: {
			tipo: '',
		},
		numero: '',
	}
}

export function defaultEndereco() {
	return {
		nomeIdentificador: '',
		pais: '',
		estado: '',
		cidade: '',
		tipoLogradouro: {
			tipo: '',
		},
		logradouro: '',
		tipoResidencia: {
			tipo: '',
		},
		numero: '',
		bairro: '',
		cep: '',
		observacao: '',
		cobranca: false,
		entrega: false,
	}
}