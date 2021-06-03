// Write your solution in this file!
function updateEmployeeWithKeyAndValue (employee, key, value){
    const myEmployee = {...employee};
    myEmployee[key] = value;
    return myEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const myEmployee = {...employee};
    delete myEmployee.name;
    delete myEmployee.streetAddress;
    return myEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}

const employee = {
    name:'Sean',
    streetAddress: '123 lane st' 
};

