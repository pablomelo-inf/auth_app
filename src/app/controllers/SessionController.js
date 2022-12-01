class SessionController {
    async store(request, response) {
        return response.status(200).send();
    }
}

module.exports =  new SessionController();