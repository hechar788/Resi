import { type Merchant } from "@/lib/merchants"

/**
 * Temporary merchant mocks to power the Food route before backend wiring.
 */
export const fakeMerchantData = [
  {
    "name": "Bohemian Bakery",
    "category": "Bakery",
    "rating": 5,
    "address": "255 Saint Asaph Street, Christchurch Central City, Christchurch 8011",
    "id": "bohemianbakery",
    "filename": "bohemianbakery.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      },
      {
        "fileName": "fakeReel1.mp4",
        "id": 1
      },
      {
        "fileName": "fakeReel2.mp4",
        "id": 2
      },
      {
        "fileName": "fakeReel3.mp4",
        "id": 3
      },
      {
        "fileName": "fakeReel.mp4",
        "id": 4
      },
      {
        "fileName": "fakeReel1.mp4",
        "id": 5
      },
      {
        "fileName": "fakeReel2.mp4",
        "id": 6
      },
      {
        "fileName": "fakeReel3.mp4",
        "id": 7
      },
      {
        "fileName": "fakeReel.mp4",
        "id": 8
      },
      {
        "fileName": "fakeReel1.mp4",
        "id": 9
      },
      {
        "fileName": "fakeReel2.mp4",
        "id": 10
      },
      {
        "fileName": "fakeReel3.mp4",
        "id": 11
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Tom's Sandwich Shop",
    "category": "Sandwich",
    "rating": 1.5,
    "address": "36 Southwark Street, Christchurch Central City, Christchurch 8011",
    "id": "tomssandwichshop",
    "filename": "tomssandwichshop.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Sushi Time",
    "category": "Sushi",
    "rating": 3,
    "address": "4/555 Colombo Street, Christchurch Central City, Christchurch 8011",
    "id": "sushitime",
    "filename": "sushitime.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Eightgrains Dumplings & Bao",
    "category": "Chinese",
    "rating": 5,
    "address": "255 Saint Asaph Street, Christchurch Central City, Christchurch 8011",
    "id": "eightgrains",
    "filename": "eightgrains.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Sesame Noodle & Dumplings",
    "category": "Japanese",
    "rating": 4.5,
    "address": "32 Oxford Terrace, Christchurch Central City, Christchurch 8011",
    "id": "sesamenoodleanddumplings",
    "filename": "sesamenoodleanddumplings.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Tony's Teppanyaki",
    "category": "Japanese",
    "rating": 1,
    "address": "2 Waterman Place, Woolston, Christchurch 8023",
    "id": "tonysteppanyaki",
    "filename": "tonysteppanyaki.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "St Pierres",
    "category": "Sushi",
    "rating": 5,
    "address": "Shop 63, Northlands Shopping Centre 55 Main North Road, Papanui, Christchurch 8052",
    "id": "stpierres",
    "filename": "stpierres.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Pizza Hut",
    "category": "Pizza",
    "rating": 3,
    "address": "205 Hills Road, Edgeware, Christchurch 8013",
    "id": "pizzahut",
    "filename": "pizzahut.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Subway",
    "category": "Sandwich",
    "rating": 5,
    "address": "202 Hills Road, Mairehau, Christchurch 8013",
    "id": "subway",
    "filename": "subway.jpeg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Mcdonalds",
    "category": "Burger",
    "rating": 1,
    "address": "14 Washington Way, Sydenham, Christchurch 8240",
    "id": "mcdonalds",
    "filename": "mcdonalds.jpeg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Burger Fuel",
    "category": "Burger",
    "rating": 5,
    "address": "290 Colombo Street, Sydenham, Christchurch 8023",
    "id": "burgerfuel",
    "filename": "burgerfuel.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Dominos",
    "category": "Pizza",
    "rating": 1,
    "address": "204 Hills Road, Edgeware, Christchurch 8013",
    "id": "dominos",
    "filename": "dominos.jpg",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Placeholder",
    "category": "Chinese",
    "rating": 1,
    "address": "fakeAddy 123 fakeAddy",
    "id": "",
    "filename": "",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  },
  {
    "name": "Placeholder2",
    "category": "Chinese",
    "rating": 1,
    "address": "fakeAddy 456 fakeAddy",
    "id": "",
    "filename": "",
    "menu": {
      "offers": {
        "offer1": {
          "offerType": "discount",
          "quantity": 100,
          "item": ""
        },
        "offer2": {
          "offerType": "discount",
          "quantity": 200,
          "item": ""
        },
        "offer3": {
          "offerType": "discount",
          "quantity": 500,
          "item": ""
        }
      },
      "categories": [
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Savoury Goods"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Baked Treats"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Bread"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Sandwiches"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Pies"
        },
        {
          "items": [
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            },
            {
              "item": "",
              "price": "",
              "isAvailable": true
            }
          ],
          "categoryName": "Drinks"
        }
      ]
    },
    "reels": [
      {
        "fileName": "fakeReel.mp4",
        "id": 0
      }
    ],
    "openingHours": {
      "Monday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Tuesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Wednesday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Thursday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Friday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Saturday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      },
      "Sunday": {
        "isOpen": true,
        "open": "09:00",
        "close": "22:30"
      }
    }
  }
] satisfies Merchant[]
