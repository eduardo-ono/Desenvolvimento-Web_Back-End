class AutenticacaoController {

	store(request, response) {

		const { login, senha } = request.body;

		return response.json({ mensagem: "API está online", login, senha });

	}

}

export default new AutenticacaoController();
