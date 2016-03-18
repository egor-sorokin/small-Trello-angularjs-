angular
    .module('app')
    .factory('listFactory', function () {
      var service = {};

      var lists = [
        {
          id: 1,
          listName: 'TODO'
        },
        {
          id: 2,
          listName: 'In Progress'
        },
        {
          id: 3,
          listName: 'Done'
        }
      ];

      service.getLists = function () {
        return lists;
      };

      service.addList = function (listName) {
        lists.push({
          id: _.uniqueId('list_'), //lodash generate unique id with prefix list_, see documentation https://lodash.com/docs#uniqueId
          listName: listName
        });
      };

      service.removeList = function (list) {
        _.pull(lists, list); // pull is searching "list" in array "lists" and then remove it
      };

      return service;
    });