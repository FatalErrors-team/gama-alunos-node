import RestRespository from '../repositories/restRepository/RestRepository.js';

class StudentService {
  constructor(models, url) {
    this.models = models;
    this.url = url;
  }

  async find() {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      const repository = new RestRespository(process.env.API_URL, this.url);
      const students = await repository.find();
      return { data: students.data.data, statusCode: 200 };
    } else {
      const repository = this.models.Student;
      const students = await repository.find();
      return { data: students, statusCode: 200 };
    }
  }

  async findOne(id) {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      const repository = new RestRespository(process.env.API_URL, this.url);
      const student = await repository.findOne(id);
      if (!student.data.data) {
        return { data: null, statusCode: 404 };
      }
      return { data: student.data.data, statusCode: 200 };
    } else {
      try {
        const repository = this.models.Student;
        const student = await repository.findOne({ _id: id });
        if (!student) {
          return { data: null, statusCode: 404 };
        }
        return { data: student, statusCode: 200 };
      } catch {
        return { data: null, statusCode: 500 };
      }
    }
  }

  async save(obj) {
    calculateAverage(obj);
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(process.env.API_URL, this.url);
        const savedStudent = await repository.save(obj);
        return { data: savedStudent.data.data, statusCode: 200 };
      } catch {
        return { data: null, statusCode: 500 };
      }
    } else {
      try {
        const repository = this.models.Student;
        const student = new repository(obj);
        const savedStudent = await student.save();
        return { data: savedStudent, statusCode: 200 };
      } catch {
        return { data: null, statusCode: 500 };
      }
    }
  }

  async updateOne(id, obj) {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(process.env.API_URL, this.url);
        const updatedStudent = await repository.updateOne(id, obj);
        return { data: updatedStudent.data.data, statusCode: 200 };
      } catch {
        return { data: null, statusCode: 500 };
      }
    } else {
      try {
        const repository = this.models.Student;
        let student = await this.findOne(id);
        if (!student) {
          return { data: null, statusCode: 404 };
        }
        student = { ...student._doc, ...obj };
        calculateAverage(student);
        const updatedStudent = await repository.updateOne(
          { _id: id },
          { $set: student }
        );
        return { data: !!updatedStudent.ok, statusCode: 200 };
      } catch {
        return { data: null, statusCode: 500 };
      }
    }
  }

  async deleteOne(id) {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(process.env.API_URL, this.url);
        const deletedStudent = await repository.deleteOne(id);
        return { data: deletedStudent.data.data, statusCode: 204 };
      } catch {
        return { data: null, statusCode: 500 };
      }
    } else {
      try {
        const repository = this.models.Student;
        const deletedStudent = await repository.deleteOne({ _id: id });
        return { data: !!deletedStudent.ok, statusCode: 204 };
      } catch {
        return { data: null, statusCode: 500 };
      }
    }
  }
}

export const calculateAverage = (obj) => {
  const average =
    (obj.nota01 + obj.nota02 + obj.notaTrabalho + obj.notaApresentacao) / 4;
  obj.media = average;
  obj.conceito = calculateConcept(average);
};

export const calculateConcept = (average) => {
  if (average > 5.9) {
    return 'APROVADO';
  } else {
    return 'REPROVADO';
  }
};

export default StudentService;
