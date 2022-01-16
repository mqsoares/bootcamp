function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('luiz', 'admin');
usuarios.set('João', 'admin');
usuarios.set('Pailo', 'user');
usuarios.set('José', 'admin');

console.log(getAdmins(usuarios));