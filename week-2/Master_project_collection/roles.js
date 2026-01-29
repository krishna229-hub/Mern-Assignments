// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

export function getRoles(){
    let rolllNames = [];
    for(let role in roles){
        // console.log(role);
        rolllNames.push(role);
        
    }
    return rolllNames;
}
export function checkStudent(){
    let canDelete = false;
    for(let val of roles.student){
        if(val === 'delete') {
            canDelete = true;
            break;
        }
    }
    return canDelete;
}
export function allPermissions(){
    let permissions = [];
    for(let val of roles.admin){
        permissions.push(val);
    }
    return permissions;
}
export function addRole(role,permissios){
    let newRoles = structuredClone(roles);
    newRoles[role] = permissios; // [] is used for the dynamic name
    return newRoles;
}