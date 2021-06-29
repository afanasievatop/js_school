/*Задание 2
Исправь ошибки которые будут в консоли, чтобы скрипт заработал.*/


const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    
    inventory.items.push(itemName);
    //console.log(`Adding ${itemName} to inventory`);
    
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    //console.log(`Removing ${itemName} from inventory`);
    
  },
};
const invokeInventoryAction = function(itemName, action) {
    action.apply(inventory, [itemName]);
  //console.log(`Invoking action on ${itemName}`);
  
};
invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit//
// Adding Medkit to inventory//
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory
console.log(inventory.items); // ['Knife', 'Medkit']





