import axios from 'axios';
import { calculateAverage } from '../../services/StudentService.js';

class RestRespository {
  constructor(url, resourcePath) {
    this.url = url;
    this.resourcePath = resourcePath;
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: process.env.TOKEN_JAVA,
    };
  }

  async find() {
    const url = `${this.url}${this.resourcePath}`;
    const res = await axios.get(url, { headers: this.headers });
    return res;
  }

  async findOne(id) {
    const url = `${this.url}${this.resourcePath}/${id}`;
    const res = await axios.get(url, { headers: this.headers });
    return res;
  }

  async save(obj) {
    const url = `${this.url}${this.resourcePath}`;
    const res = await axios.post(url, obj, { headers: this.headers });
    return res;
  }

  async updateOne(id, obj) {
    const res = await this.findOne(id);
    let objRes = res.data.data;
    objRes = { ...objRes, ...obj };
    calculateAverage(objRes);
    const url = `${this.url}${this.resourcePath}/${id}`;
    const res2 = await axios.put(url, objRes, { headers: this.headers });
    return res2;
  }

  async deleteOne(id) {
    const url = `${this.url}${this.resourcePath}/${id}`;
    const res = await axios.delete(url, { headers: this.headers });
    return res;
  }
}

export default RestRespository;
