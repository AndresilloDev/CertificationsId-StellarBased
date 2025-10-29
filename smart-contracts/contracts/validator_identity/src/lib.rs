#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Address, Symbol, Map, String};

#[derive(Clone)]
pub struct Entity {
    pub address: Address,     // Dirección en la blockchain
    pub role: String,         // "STUDENT", "INSTITUTION", "COMPANY", "ADMIN"
    pub name: String,         // Nombre de la entidad
    pub metadata_hash: String,// Hash con info adicional (ej: logo o datos)
    pub verified: bool,       // true = verificada por el admin
}

#[contract]
pub struct IdentityContract;

#[contractimpl]
impl IdentityContract {

    // 📝 Registrar una nueva entidad
    pub fn register_entity(env: Env, address: Address, role: String, name: String, metadata_hash: String) {
        // Solo un ADMIN puede registrar
        let admin = env.invoker(); // El que llama la función
        admin.require_auth();

        let key = Symbol::short("entities");
        let mut storage = env.storage().persistent();
        let mut entities: Map<Address, Entity> =
            storage.get(&key).unwrap_or(Map::new(&env));

        if entities.contains_key(address.clone()) {
            panic!("Entidad ya registrada");
        }

        let entity = Entity {
            address: address.clone(),
            role,
            name,
            metadata_hash,
            verified: false,
        };

        entities.set(address, entity);
        storage.set(&key, &entities);
    }

    // ✅ Verificar una entidad (solo el admin)
    pub fn verify_entity(env: Env, address: Address) {
        let admin = env.invoker();
        admin.require_auth();

        let key = Symbol::short("entities");
        let mut storage = env.storage().persistent();
        let mut entities: Map<Address, Entity> =
            storage.get(&key).unwrap_or(Map::new(&env));

        let mut entity = entities.get(address.clone()).expect("Entidad no encontrada");
        entity.verified = true;

        entities.set(address, entity);
        storage.set(&key, &entities);
    }

    // 🔍 Obtener info básica de una entidad
    pub fn get_entity(env: Env, address: Address) -> Option<Entity> {
        let key = Symbol::short("entities");
        let storage = env.storage().persistent();
        let entities: Map<Address, Entity> = storage.get(&key).unwrap_or(Map::new(&env));
        entities.get(address)
    }
}
