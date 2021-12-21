// const people = [
//     {
//         name: 'IrenaV',
//         club: 'Arsenal'
//     },
//     {
//         name: 'AleskandarV',
//         club: 'Milan'
//     },
//     {
//         name: 'BobanS',
//         club: null
//     }
// ];

// people.forEach( person => {
//     if(person.club) {
//         console.log(person.name);
//         console.log(person.club);
//     } else {
//         console.log(person.name);
//         console.log('Nemaat omilen klub');
//     }
// });

let clubs = [
    {
      name: 'Barcelona',
      best_club: 'CF Barcelona',
      population: '12030563'
    },
    {
      name: 'London',
      best_club: 'Arsenal',
      population: '120305333'
    },
    {
      name: 'Madrid',
      best_club: 'Atletico',
      population: '120305633'
    },
    {
      name: 'Valencia',
      best_club: 'Valencia CF',
      population: '120305644'
    },
    {
      name: 'Rome',
      best_club: 'Roma',
      population: '122222222222333'
    },
    {
        name: 'Rome',
        best_club: 'Napoli',
        population: '54'
    }
  ];

  clubs.forEach(club => {
      if(club.name === 'Rome') {
          console.log(`Nie sme ekipa od Rim: ${club.best_club}`)
      }
  });

  var max = 0;
  var clubName = null;
  clubs.forEach(obj => {
      if(max < parseInt(obj.population)) {
          max = parseInt(obj.population)
          clubName = obj.best_club
      }
  })

  console.log(`${max} ${clubName}`);


