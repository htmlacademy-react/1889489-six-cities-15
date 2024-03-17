import { Comments, Offer, OfferId } from '../types/offer';

export const offers: Offer[] = [
  {
    'id': 'f5d95974-342e-4837-be2d-814ead90908e',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 202,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
  {
    'id': '53333b49-291e-4338-a23a-f514e86ec7c8',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 300,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.8566153943508,
      'longitude': 2.351499666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': 'e8c444f7-241a-478e-aa12-be04824d8071',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 334,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.8677153943710,
      'longitude': 2.351499666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'ba3bf035-7a38-4f59-bf40-ff07122f5456',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 543,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4
  }
];

export const offersId: OfferId[] = [
  {
    'id': 'f5d95974-342e-4837-be2d-814ead90908e',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 202,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating',
      'Dishwasher',
      'Coffee machine',
      'Washing machine',
      'Cabel TV'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 7
  },
  {
    'id': '53333b49-291e-4338-a23a-f514e86ec7c8',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 300,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 4
  },
  {
    'id': 'e8c444f7-241a-478e-aa12-be04824d8071',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 470,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 7,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 9
  },
  {
    'id': 'ba3bf035-7a38-4f59-bf40-ff07122f5456',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 820,
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 7
  }
];

export const comments: Comments[] = [
  {
    'id': 'f5d95974-342e-4837-be2d-814ead90908e',
    'date': '2020-08-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 1
  },
  {
    'id': 'f5d95974-342e-4837-be2d-814ead90908e',
    'date': '2019-05-08T14:13:57.569Z',
    'user': {
      'name': 'Conner Oliver',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': true
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'rating': 4
  },
  {
    'id': 'f5d95974-342e-4837-be2d-814ead90908e',
    'date': '2017-01-08T14:13:58.569Z',
    'user': {
      'name': 'Conner',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. behind a a river by the unique lightness of Amsterdam.',
    'rating': 2
  },
  {
    'id': 'f5d95974-342e-4837-be2d-814ead90908e',
    'date': '2019-12-08T14:13:59.569Z',
    'user': {
      'name': 'Oliver',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'The building is green and from 18th century.',
    'rating': 5
  }
];
