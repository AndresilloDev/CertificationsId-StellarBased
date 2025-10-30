import crypto from 'crypto';
import User from '../models/user.model.js'; // Tu modelo de usuario
import { exec } from 'child_process';

const CertificatesController = {
  emitCertificate: async (req, res) => {
    try {
      // ⚠️ Asegúrate de que req.body sea un objeto JSON
      const { studentEmail, trackingCode } = req.body;

      if (!studentEmail || !trackingCode) {
        return res.status(400).json({ message: "Correo y código de rastreo son obligatorios" });
      }

      // 1️⃣ Hashear el código de rastreo
      const cert_id = crypto.createHash('sha256').update(trackingCode).digest('hex');

      // 2️⃣ Buscar usuario en la BD
      const user = await User.findOne({ email: studentEmail });
      if (!user) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
      }

      const studentPublicKey = user.publicKey;
      if (!studentPublicKey) {
        return res.status(400).json({ message: "El usuario no tiene publicKey asignada" });
      }

      // 3️⃣ Datos fijos del emisor y ejemplo de IPFS/metadata
      const issuerPublicKey = process.env.ISSUER_PUBLIC_KEY || "GDFGN3ABVXVCCOWAD5HIHJ4QCKWFDUBGRKRMOWB6OICB57W72YHWEK44";
      const ipfs_cid = "bafkreigh2akiscaildc6..."; // Aquí iría el CID real si subes a IPFS
      const metadata_hash = "abc123..."; // Hash de metadatos

      // 4️⃣ Construir comando para Soroban
      const cmd = `soroban contract invoke --id CAFXDZPWQ2U72NCI7E2BQSBIJB44HBLFKSPZ63ECCANKKR4G7PRHUE2T --source alice3 --network testnet -- emit_certificate --cert_id "${cert_id}" --issuer "${issuerPublicKey}" --student "${studentPublicKey}" --ipfs_cid "${ipfs_cid}" --metadata_hash "${metadata_hash}"`;

      // 5️⃣ Ejecutar comando
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error ejecutando contrato: ${error.message}`);
          return res.status(500).json({ message: "Error al emitir certificado", error: error.message });
        }

        if (stderr) { 
          console.error(`STDERR: ${stderr}`); 
        } 
        
        console.log(`STDOUT: ${stdout}`);

        const match = stderr.match(/([a-f0-9]{64})/); // Busca el hash de 64 caracteres
        const txHash = match ? match[1] : null;

        return res.status(200).json({
          message: `Certificado emitido`,
          data: {
            cert_id,
            txHash: txHash,
            stdout: stdout,
            student: studentPublicKey,
            issuer: issuerPublicKey,
            ipfs_cid,
            metadata_hash
          }
        });
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error al emitir certificado", error: error.message });
    }
  }
};

export default CertificatesController;