export const navigation = {
  main: [
    { name: 'Products', href: '/#products' },
    { 
      name: 'Solutions', 
      href: '#',
      submenu: [
        { name: 'Mini Servers', href: '/products/mini-servers' },
        { name: 'Standard Servers', href: '/products/standard-servers' },
        { name: 'Premium Servers', href: '/products/premium-servers' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ],

  products: [
    { name: 'Mini Servers', href: '/products/mini-servers' },
    { name: 'Standard Servers', href: '/products/standard-servers' },
    { name: 'Premium Servers', href: '/products/premium-servers' }
  ],

  footer: {
    products: [
      { name: 'Mini Servers', href: '/products/mini-servers' },
      { name: 'Standard Servers', href: '/products/standard-servers' },
      { name: 'Premium Servers', href: '/products/premium-servers' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' }
    ],
    support: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Technical Support', href: '/support' },
      { name: 'Warranty', href: '/warranty' },
      { name: 'Downloads', href: '/downloads' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  }
}
