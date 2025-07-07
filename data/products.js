export const products = {
  mini: {
    id: 'mini',
    name: 'Mini Servers',
    slug: 'mini-servers',
    tagline: 'Compact Power for Edge Computing',
    description: 'Purpose-built mini servers designed for edge computing, IoT applications, and space-constrained environments without compromising performance.',
    startingPrice: '$1,099',
    image: '/images/products/mini.png', // Updated image path
    hero: {
      title: 'Mini Servers',
      subtitle: 'Maximum performance in minimal space',
      features: ['Edge Computing Ready', 'Fanless Design', 'Industrial Grade']
    },
    specifications: {
      processor: 'Intel Core i3 N305',
      memory: '32GB DDR4',
      storage: '1-16TB NVMe SSD',
      connectivity: '2x 2.5GbE, 2x USB 3.2, 2x HDMI',
      power: '20W TDP',
      dimensions: '4" x 4" x 2.2"',
      operating_temp: '-10°C to 60°C',
      certifications: 'FCC, CE, UL'
    },
    useCases: [
      'Edge computing deployments',
      'IoT data aggregation',
      'Small office applications',
      'Digital signage controllers',
      'Industrial automation'
    ],
    benefits: [
      'Ultra-compact footprint',
      'Fanless, silent operation',
      'Industrial temperature range',
      'Low power consumption',
      'Easy deployment anywhere'
    ],
    accessories: [
      'Wall mount bracket',
      'DIN rail mount',
      'Extended warranty',
      'Remote management license'
    ]
  },

  standard: {
    id: 'standard',
    name: 'Standard Servers',
    slug: 'standard-servers',
    tagline: 'Balanced Performance for Business Applications',
    description: 'Versatile rack-mount servers engineered for reliability and performance across diverse business applications and workloads.',
    startingPrice: '$5,999',
    image: '/images/products/r540.png', // Updated image path
    hero: {
      title: 'Standard Servers',
      subtitle: 'Proven reliability for mission-critical applications',
      features: ['2U Rack Mount', 'Redundant Power', 'Enterprise SSD']
    },
    specifications: {
      processor: 'Dual Intel Xeon Silver',
      memory: '64GB DDR4 ECC',
      storage: '50TB RAID5, 100TB RAID6',
      connectivity: '4x 1GbE, iDrac, PCIe expansion',
      power: 'Redundant 750W PSU',
      dimensions: '2U: 17.2" x 25.6" x 1.7"',
      operating_temp: '10°C to 35°C',
      certifications: 'FCC, CE, UL, ENERGY STAR'
    },
    useCases: [
      'Web and application servers',
      'Database hosting',
      'Virtualization platforms',
      'File and print servers',
      'Development environments'
    ],
    benefits: [
      'Rack-optimized design',
      'Hot-swappable components',
      'Redundant power supplies',
      'Remote management',
      '24/7 enterprise support'
    ],
    accessories: [
      'Rail kit for rack mounting',
      'Additional memory modules',
      'Storage expansion',
      'Management software'
    ]
  },

  premium: {
    id: 'premium',
    name: 'Premium Servers',
    slug: 'premium-servers',
    tagline: 'Maximum Performance for Demanding Workloads',
    description: 'High-end servers built for the most demanding applications including AI/ML, high-performance computing, and large-scale virtualization.',
    startingPrice: '$12,999',
    image: '/images/products/r740xd.png', // Updated image path
    hero: {
      title: 'Premium Servers',
      subtitle: 'Uncompromising performance for critical workloads',
      features: ['Dual CPU Support', 'GPU Ready', 'High-Speed Storage']
    },
    specifications: {
      processor: 'Dual Intel Xeon Gold',
      memory: '256GB DDR4 ECC',
      storage: '100TB ZFS Array', 
      connectivity: '2x 10GbE SFP+, 2x 1GbE Ethernet, iDrac, PCIe expansion',
      power: 'Redundant 1100W PSU',
      dimensions: '2U: 17.2" x 25.6" x 3.5"',
      operating_temp: '10°C to 35°C',
      certifications: 'FCC, CE, UL, ENERGY STAR'
    },
    useCases: [
      'AI/ML training and inference',
      'High-performance computing',
      'Large-scale virtualization',
      'Big data analytics',
      'Scientific computing'
    ],
    benefits: [
      'Maximum processing power',
      'GPU acceleration support',
      'Ultra-fast redundant storage',
      'Advanced cooling system',
      'White-glove support'
    ],
    accessories: [
      'GPU acceleration cards',
      'High-speed networking',
      'Storage expansion chassis',
      'Professional services'
    ]
  }
}

export const productCategories = [
  {
    id: 'mini',
    title: 'Mini Servers',
    description: 'Compact solutions for edge computing',
    icon: 'cube'
  },
  {
    id: 'standard',
    title: 'Standard Servers',
    description: 'Reliable performance for business applications',
    icon: 'server'
  },
  {
    id: 'premium',
    title: 'Premium Servers',
    description: 'Maximum performance for demanding workloads',
    icon: 'cpu'
  }
]
