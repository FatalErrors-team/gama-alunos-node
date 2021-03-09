class Response {
  constructor(statusCode, data) {
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
