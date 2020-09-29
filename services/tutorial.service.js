import http from "../http-common";

class TutorialDataService {
  home() {
    return http.get("/login");
  }
  index() {
    return http.get("/");
  }

  
  login(data) {
    return http.post("/login", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();