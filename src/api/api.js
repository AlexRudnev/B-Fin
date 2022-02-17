import config from '../config.json'


class API {
    constructor () {
        this.api = `${config.serverLink}/api`
    }

    async request(method, path, body) {
        const request = await fetch(`${this.api}${path}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
            credentials: "include"
        });

        return await request.json();
    }

    async registration(username, email, password) {
        return await this.request("POST", "/auth/registration", {
            username: username, email: email, password: password
        });
    }

    async login(email, password) {
        return await this.request("POST", "/auth/login", {
            email: email, password: password
        });
    }

    async changePassword(code, password) {
        return await this.request("POST", "/auth/change-password", {
            code: code, password: password
        });
    }

    async restoration(email) {
        return await this.request("GET", `/auth/restoration?email=${email}`);
    }

    async getClients() {
        return await this.request("GET", "/clients");
    }

    async getClient(id) {
        return await this.request("GET", `/clients/${id}`);
    }

    async addClient(user) {
        return await this.request("POST", `/clients/add`, user);
    }

    async editClient(id, user) {
        return await this.request("POST", `/clients/${id}/edit`, user);
    }

    async removeClient(id) {
        return await this.request("POST", `/clients/${id}/remove`);
    }
}


export default API;