#![no_std]

use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Map, String, Vec, symbol_short};

#[contracttype]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Certificate {
    pub cert_id: String,
    pub issuer: Address,
    pub student: Address,
    pub ipfs_cid: String,
    pub metadata_hash: String,
    pub timestamp: u64,
    pub status: bool, // true = activo, false = revocado
}

#[contract]
pub struct CertificadosContract;

#[contractimpl]
impl CertificadosContract {
    // 🧱 Emitir un nuevo certificado
    pub fn emit_certificate(
        env: Env,
        cert_id: String,
        issuer: Address,
        student: Address,
        ipfs_cid: String,
        metadata_hash: String,
    ) {
        // Solo el issuer puede firmar
        issuer.require_auth();

        let storage = env.storage().persistent();
        let key = symbol_short!("certs");
        let mut certs: Map<String, Certificate> =
            storage.get(&key).unwrap_or(Map::new(&env));

        if certs.contains_key(cert_id.clone()) {
            panic!("Certificado ya existe");
        }

        let cert = Certificate {
            cert_id: cert_id.clone(),
            issuer: issuer.clone(),
            student: student.clone(),
            ipfs_cid,
            metadata_hash,
            timestamp: env.ledger().timestamp(),
            status: true,
        };

        certs.set(cert_id, cert);
        storage.set(&key, &certs);
    }

    // ❌ Revocar un certificado
    pub fn revoke_certificate(env: Env, issuer: Address, cert_id: String) {
        issuer.require_auth();

        let storage = env.storage().persistent();
        let key = symbol_short!("certs");
        let mut certs: Map<String, Certificate> =
            storage.get(&key).unwrap_or(Map::new(&env));

        let mut cert = certs.get(cert_id.clone()).expect("Certificado no encontrado");

        if cert.issuer != issuer {
            panic!("Solo el emisor puede revocar el certificado");
        }

        cert.status = false;
        certs.set(cert_id, cert);
        storage.set(&key, &certs);
    }

    // 🔍 Verificar un certificado
    pub fn verify_certificate(env: Env, cert_id: String) -> Option<Certificate> {
        let storage = env.storage().persistent();
        let key = symbol_short!("certs");
        let certs: Map<String, Certificate> = storage.get(&key).unwrap_or(Map::new(&env));
        certs.get(cert_id)
    }

    // 📋 Obtener todos los certificados de un estudiante
    pub fn get_certificates_by_user(env: Env, student: Address) -> Vec<Certificate> {
        let storage = env.storage().persistent();
        let key = symbol_short!("certs");
        let certs: Map<String, Certificate> = storage.get(&key).unwrap_or(Map::new(&env));

        let mut result = Vec::new(&env);
        for (_, cert) in certs.iter() {
            if cert.student == student {
                result.push_back(cert);
            }
        }

        result
    }
}
