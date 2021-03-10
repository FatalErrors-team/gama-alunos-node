import RestRespository from '../repositories/restRepository/RestRepository.js';
import { generatePasswordHash } from '../helpers/bcrypt/index.js';

class AdministratorService {
  constructor(models, url) {
    this.models = models;
    this.url = url;
  }

  async findByUsername(username) {
    // if (process.env.PERSISTENCE_TYPE === 'REST') {
    //   const repository = new RestRespository(process.env.API_URL, this.url);
    //   const administrator = await repository.find();
    //   return { data: administrator.data.data, statusCode: 200 };
    // } else {
    const repository = this.models.Administrator;
    const administrator = await repository.findOne({ usuario: username });
    return { data: administrator, statusCode: 200 };
    // }
  }

  async save(obj) {
    obj.senha = await generatePasswordHash(obj.senha);
    // if (process.env.PERSISTENCE_TYPE === 'REST') {
    //   try {
    //     const repository = new RestRespository(process.env.API_URL, this.url);
    //     const savedAdministrator = await repository.save(obj);
    //     return { data: savedAdministrator.data.data, statusCode: 200 };
    //   } catch {
    //     return { data: null, statusCode: 500 };
    //   }
    // } else {
    try {
      const repository = this.models.Administrator;
      const administrator = new repository(obj);
      const savedAdministrator = await administrator.save();
      return { data: savedAdministrator, statusCode: 201 };
    } catch {
      return { data: null, statusCode: 500 };
    }
    // }
  }
}

export default AdministratorService;
