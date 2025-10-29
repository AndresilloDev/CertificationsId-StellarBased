#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Address, Symbol, Map, String};

#[contract]
pub struct RevokeManagerContract;