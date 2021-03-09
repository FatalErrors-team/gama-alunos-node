import axios from 'axios';

class RestRespository {
  constructor(url, resourcePath) {
    this.url = url;
    this.resourcePath = resourcePath;
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: process.env.TOKEN_JAVA,
    };
  }

  async list() {
    const url = `${this.url}${this.resourcePath}`;
    const res = await axios.get(url, { headers: this.headers });
    return res;
  }

  async getOne(id) {
    const url = `${this.url}${this.resourcePath}/${id}`;
    const res = await axios.get(url, { headers: this.headers });
    return res;
  }

  async insert(obj) {
    const url = `${this.url}${this.resourcePath}`;
    const res = await axios.post(url, obj, { headers: this.headers });
    return res;
  }

  async update(id, obj) {
    const res = await this.getOne(id);
    let objRes = res.data.data;
    objRes = { ...objRes, ...obj };
    const url = `${this.url}${this.resourcePath}/${id}`;
    const res2 = await axios.put(url, objRes, { headers: this.headers });
    return res2;
  }

  async delete(id) {
    const url = `${this.url}${this.resourcePath}/${id}`;
    const res = await axios.delete(url, { headers: this.headers });
    return res;
  }
}

export default RestRespository;

/*

async function obterAlunos(setEstudantes) {
    const response = await axios({
        method: "GET",
        url: "https://boiling-river-79785.herokuapp.com/alunos",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    });

    */
