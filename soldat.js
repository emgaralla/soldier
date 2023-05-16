const soldier = {
    name: 'Халк',
    hp: 10,
    weapon: {
      weaponName: 'ПП',
      patrons: 30,
    },
    ammunition: 3,
  
    fire: function () {
        if (this.weapon.patrons <= 0) {
            return 'обойма пуста. Перезаредитесь'
        }
        else {
            this.weapon.patrons--
            return 'бах-бах'
        }
    },
    recharge: function () {
        if (this.ammunition <= 0) {
            return 'не осталось припасов'
        }
        this.weapon.patrons = 30
        this.ammunition--
        return 'перезарядка...'
    },
    hurt: function () {
        if (this.hp <= 0) {
            return 'Ты проиграл'
        }
        else {
            this.hp--
        }
    },
  };