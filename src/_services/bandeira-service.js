import ApiService from "@/_services/api-service"

export default class BandeiraService extends ApiService {
    constructor() {
        super('/bandeiras')
    }

    consultar() {
        return this.get('')
    }
}