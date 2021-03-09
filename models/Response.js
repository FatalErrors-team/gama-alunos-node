class Response {
  constructor(data, statusCode = 200) {
    this.statusCode = statusCode;
    this.data = data;
  }
  toString() {
    return {
      statusCode: this.statusCode,
      data: this.data,
    };
  }
}

export default Response;
