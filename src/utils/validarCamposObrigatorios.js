function validarCamposObrigatorios(...requiredFields) {
  const missingFields = [];

  for (const field of requiredFields) {
    for (const prop in field) {
      if (!field[prop].trim()) {
        missingFields.push(prop);
      }
    }
  }

  if (missingFields.length > 0) {
    return {
      result: true,
      missingFields: missingFields.join(", "),
    };
  } else {
    return {
      result: false,
    };
  }
}

module.exports = validarCamposObrigatorios
