const baseUrl = "http://localhost:3001/";

const get = (url: string) => fetch(`${baseUrl}${url}`).then(response => response.json());

const post = (url: string, requestData: Record<string, any>) => fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
}).then(response => response.json());

const del = (url: string) => fetch(`${baseUrl}${url}`, { method: "DELETE" });

const api = {get, post, del};

export default api;