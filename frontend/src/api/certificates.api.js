import api from "./base.api";

export { api };

// Emitir un certificado (ya sin FormData)
export const emitCertificate = (data) => {
  // data = { studentEmail, trackingCode, issueDate }
  return api.post("/certificates/emit", data); // axios por defecto enviará JSON
};

// Opcional: obtener certificados de un estudiante
export const getCertificatesByStudent = (studentAddress) => {
  return api.get(`/certificates/student/${studentAddress}`);
};