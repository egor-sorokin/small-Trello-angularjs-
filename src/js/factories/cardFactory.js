angular
    .module('app')
    .factory('cardFactory', function () {
      var service = {};

      var cards = [
        {
          id: 1,
          description: 'fix bug in player',
          list_id: 1
        },
        {
          id: 2,
          description: 'Add feature with 3D',
          list_id: 1
        },
        {
          id: 3,
          description: 'Add feedback button',
          list_id: 3
        }
      ];

      service.getCards = function (list) {
        return _.filter(cards, { list_id: list.id}); //elements with list_id === list.id
      };

      service.createCard = function (list, cardDescription) {
        cards.push({
          id: _.uniqueId('card_'),
          description: cardDescription,
          list_id: list.id
        });
      };

      service.deleteCard = function (card) {
        _.pull(cards, card);
      };

      service.updateCard = function (updatingCard) {
        var card = _.findWhere(cards, { id: updatingCard.id});

        card.description = updatingCard.description;
        card.list_id = updatingCard.list_id;
      };

      return service;
    });