(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
      var vm = this;
      vm.items = ShoppingListCheckOffService.toBuyList;

      vm.bought = function(itemIndex){
        ShoppingListCheckOffService.buyItem(itemIndex);
      }
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var con = this;
    con.items = ShoppingListCheckOffService.bought;
  }

  function ShoppingListCheckOffService(){
    var srv = this;
    srv.toBuyList = [
          {quantity:38,name:"rice"},
          { name: "cookies", quantity: 10 },
          { name: "croissants", quantity: 12 },
          { name: "latte", quantity: 4 },
          { name: "machiatto", quantity: 8 },
          { name: "cappucino", quantity: 3 }];
    srv.bought = [];

    srv.buyItem = function(index){
      srv.bought.push(srv.toBuyList[index]);
      srv.toBuyList.splice(index,1);
    }
  }
})();
