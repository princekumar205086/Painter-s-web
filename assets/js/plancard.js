function createCard(cardData) {
    var card = document.createElement('div');
    card.className = 'plan-card';
  
    var h3 = document.createElement('h3');
    h3.textContent = cardData.title;
    card.appendChild(h3);
  
    var h1 = document.createElement('h1');
    h1.textContent = cardData.price;
    var span = document.createElement('span');
    span.textContent = '/Month';
    h1.appendChild(span);
    card.appendChild(h1);
  
    var p = document.createElement('p');
    p.textContent = cardData.description;
    card.appendChild(p);
  
    var ul = document.createElement('ul');
    cardData.features.forEach(function(feature) {
      var li = document.createElement('li');
      li.innerHTML = '&#x2611; ' + feature;
      ul.appendChild(li);
    });
    card.appendChild(ul);
  
    var a = document.createElement('a');
    a.href = '';
    a.textContent = 'Choose Plan';
    card.appendChild(a);
  
    return card;
  }
  
  var cardData = [
    {
      title: 'Beginner Plan',
      price: '$19',
      description: 'Perfect for those just getting started with painting.',
      features: ['Access to beginner tutorials', 'Basic painting materials', 'Community forum access']
    },
    {
      title: 'Intermediate Plan',
      price: '$29',
      description: 'For artists looking to take their skills to the next level.',
      features: ['Access to all tutorials', 'Premium painting materials', 'Community forum access', 'Monthly webinars']
    },
    {
      title: 'Professional Plan',
      price: '$49',
      description: 'For professional artists seeking advanced techniques.',
      features: ['Access to all tutorials', 'Premium painting materials', 'Community forum access', 'Monthly webinars', 'One-on-one coaching']
    },
  ];
  
  cardData.forEach((data) => {
    var card = createCard(data);
    document.querySelector('#plans-container').appendChild(card);
  });