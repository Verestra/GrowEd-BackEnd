let sendResponse = (res, success, status, message, data) => {
  
  let response = {
    success,
    message,
    data,
  };
  res.status(status).json(response);
};

const sendError = (res, error) => {
  res.status(500).json(new Error(error));
};

const writeError = (res, status, err) => {
  res.status(status).json(new Error(err));
};

const writeResponsePaginated = (res, status, result, info) => {
  let response = {};
  if (result) {
    response = {
      ...response,
      success: true,
      result,
    };
  }
  if (info) {
    response = {
      ...response,
      info,
    };
  }
  res.status(status).json(response);
};

module.exports = {
  sendResponse,
  sendError,
  writeError,
  writeResponsePaginated
};
