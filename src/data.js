const brands = {
  Electronics: [
    'Samsung', 'Apple', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Microsoft',
    'Bose', 'JBL', 'Philips', 'Panasonic', 'Sharp', 'Toshiba', 'Huawei', 'OnePlus', 'Google', 'MSI'
  ],
  Appliances: [
    'Dyson', 'Ninja', 'KitchenAid', 'Breville', 'Instant Pot', 'Cuisinart', 'Hamilton Beach',
    'Shark', 'iRobot', 'Whirlpool', 'Bosch', 'Miele', 'Smeg', 'DeLonghi', 'Vitamix'
  ],
  Books: [
    'Penguin Random House', 'HarperCollins', 'Simon & Schuster', 'Macmillan', 'Hachette',
    'Oxford University Press', 'Pearson', 'McGraw Hill', 'Wiley', 'Scholastic'
  ],
  Clothing: [
    'Nike', 'Adidas', 'Under Armour', 'Puma', 'New Balance', 'Reebok', 'The North Face',
    'Columbia', 'Patagonia', 'Lululemon', 'Champion', 'Fila', 'Asics', 'Converse', 'Vans'
  ],
  Sports: [
    'Wilson', 'Spalding', 'Callaway', 'TaylorMade', 'Yonex', 'Head', 'Babolat',
    'Mizuno', 'Speedo', 'Titleist', 'Prince', 'Rossignol', 'Coleman', 'Shimano', 'Garmin'
  ]
};

const productCategories = [
  // Existing Electronics and Appliances
  {
    name: 'OLED TV',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400'
    ]
  },
  {
    name: 'Noise-Cancelling Headphones',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400'
    ]
  },
  {
    name: 'Gaming Laptop',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400'
    ]
  },
  {
    name: 'Mirrorless Camera',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400'
    ]
  },
  // Books Categories
  {
    name: 'Fiction Novel',
    category: 'Books',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400'
    ]
  },
  {
    name: 'Self-Help Book',
    category: 'Books',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400'
    ]
  },
  {
    name: 'Cookbook',
    category: 'Books',
    images: [
      'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400',
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=400'
    ]
  },
  {
    name: 'Biography',
    category: 'Books',
    images: [
      'https://images.unsplash.com/photo-1585813271536-b6e4d3593d9f?w=400',
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400'
    ]
  },
  // Clothing Categories
  {
    name: 'Running Shoes',
    category: 'Clothing',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400'
    ]
  },
  {
    name: 'Athletic Shorts',
    category: 'Clothing',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400',
      'https://images.unsplash.com/photo-1618355776464-8666794d2520?w=400'
    ]
  },
  {
    name: 'Performance Jacket',
    category: 'Clothing',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400'
    ]
  },
  {
    name: 'Training Shirt',
    category: 'Clothing',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400'
    ]
  },
  // Sports Equipment
  {
    name: 'Tennis Racket',
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1617083934555-ac7d4fee8909?w=400',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400'
    ]
  },
  {
    name: 'Golf Club Set',
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400',
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400'
    ]
  },
  {
    name: 'Basketball',
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400'
    ]
  },
  {
    name: 'Yoga Mat',
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400'
    ]
  }
];

const getRandomProduct = () => {
  const product = productCategories[Math.floor(Math.random() * productCategories.length)];
  const brandList = brands[product.category];
  const brand = brandList[Math.floor(Math.random() * brandList.length)];
  const year = new Date().getFullYear();
  const model = product.category === 'Books' ? 'Edition' : `${year} Edition`;
  const image = product.images[Math.floor(Math.random() * product.images.length)];
  
  return {
    name: `${brand} ${product.name} ${model}`,
    image: image,
    brand: brand,
    category: product.category
  };
};

const generateDescription = (product) => {
  const features = {
    Electronics: [
      'high-resolution display', 'advanced processor', 'premium build quality',
      'smart features', 'long battery life', 'wireless connectivity'
    ],
    Appliances: [
      'energy efficient', 'smart home compatible', 'quiet operation',
      'advanced filtration', 'premium materials', 'innovative technology'
    ],
    Books: [
      'award-winning author', 'bestseller status', 'compelling narrative',
      'critical acclaim', 'engaging content', 'thought-provoking insights'
    ],
    Clothing: [
      'moisture-wicking fabric', 'breathable material', 'ergonomic design',
      'comfortable fit', 'durable construction', 'stylish appearance'
    ],
    Sports: [
      'professional grade', 'tournament approved', 'enhanced performance',
      'superior control', 'lightweight design', 'premium materials'
    ]
  };

  const categoryFeatures = features[product.category];
  const randomFeatures = Array.from({ length: 3 }, () => 
    categoryFeatures[Math.floor(Math.random() * categoryFeatures.length)]
  );

  return `The ${product.name} represents ${product.brand}'s commitment to innovation and quality. 
    Featuring ${randomFeatures.join(', ')}, this premium ${product.category.toLowerCase()} item delivers exceptional performance 
    and reliability. Perfect for those who demand the best in their ${product.category.toLowerCase()}.`;
};

export const scrapedData = Array.from({ length: 2000 }, (_, index) => {
  const product = getRandomProduct();
  const priceRanges = {
    Electronics: [299, 3999],
    Appliances: [99, 1999],
    Books: [9.99, 49.99],
    Clothing: [29.99, 299.99],
    Sports: [19.99, 899.99]
  };

  const [min, max] = priceRanges[product.category];
  const price = (Math.random() * (max - min) + min).toFixed(2);

  return {
    id: index + 1,
    title: product.name,
    image: product.image,
    price: price,
    rating: (Math.random() * 2 + 3).toFixed(1),
    description: generateDescription(product),
    category: product.category,
    inStock: Math.random() > 0.2,
    reviews: Math.floor(Math.random() * 5000 + 100),
    seller: product.brand,
    shippingTime: `${Math.floor(Math.random() * 5) + 1}-${Math.floor(Math.random() * 5) + 3} business days`,
    dateAdded: new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
    sku: `${product.brand.substring(0, 3).toUpperCase()}${Math.random().toString(36).substring(7).toUpperCase()}`,
    manufacturer: product.brand,
    weight: `${(Math.random() * 10 + 0.5).toFixed(2)} kg`,
    dimensions: `${Math.floor(Math.random() * 50 + 20)}x${Math.floor(Math.random() * 40 + 15)}x${Math.floor(Math.random() * 30 + 10)} cm`,
    warranty: `${Math.floor(Math.random() * 24 + 12)} months`,
    origin: ['USA', 'China', 'Japan', 'South Korea', 'Germany', 'Taiwan'][Math.floor(Math.random() * 6)],
  };
});