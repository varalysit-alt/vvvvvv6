export interface Admin {
    admin_id?: number;             
    admin_login: string;          
    admin_password_hash: string;      
    is_active_admin?: boolean;  
    admin_birth_date?: Date | string; 
    created_at?: Date | string; 
}