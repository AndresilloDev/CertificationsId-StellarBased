#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, Map, String, Symbol, Vec};
0
#[contracttype]
#[derive(Clone)]
pub struct Entity {
    pub address: Address,
    pub role: String,          // STUDENT, INSTITUTION, COMPANY, ADMIN
    pub name: String,          // Nombre completo o nombre de la institución
    pub metadata_hash: String, // Hash de información adicional
    pub verified: bool,        // true si la identidad ha sido validada
}

#[contract]
pub struct IdentityContract;

#[contractimpl]
impl IdentityContract {
    // 📝 Registrar una nueva entidad (estudiante, institución o empresa)
    pub fn register_entity(
        env: Env,
        entity_address: Address,
        role: String,
        name: String,
        metadata_hash: String,
    ) {
        // Solo el invocador puede autorizar el registro
        env.invoker().require_auth();

        let key = symbol_short!("entities");
        let mut storage = env.storage().persistent();
        let mut entities: Map<Address, Entity> =
            storage.get(&key).unwrap_or(Map::new(&env));

        if entities.contains_key(entity_address.clone()) {
            panic!("Entidad ya registrada");
        }

        let entity = Entity {
            address: entity_address.clone(),
            role,
            name,
            metadata_hash,
            verified: true,
        };

        entities.set(entity_address, entity);
        storage.set(&key, &entities);
    }

    // ✅ Verificar si una entidad está registrada y validada
    pub fn verify_entity(env: Env, entity_address: Address) -> bool {
        let key = symbol_short!("entities");
        let storage = env.storage().persistent();
        let entities: Map<Address, Entity> = storage.get(&key).unwrap_or(Map::new(&env));

        match entities.get(entity_address) {
            Some(entity) => entity.verified,
            None => false,
        }
    }

    // 📋 Obtener información básica de una entidad
    pub fn get_entity(env: Env, entity_address: Address) -> Option<Entity> {
        let key = symbol_short!("entities");
        let storage = env.storage().persistent();
        let entities: Map<Address, Entity> = storage.get(&key).unwrap_or(Map::new(&env));
        entities.get(entity_address)
    }
}
