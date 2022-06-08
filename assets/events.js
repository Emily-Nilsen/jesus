const events = [
  // {
  //   locale: 'en',
  //   title:
  //     'Concert with Banatul Philharmonic of Timișoara and conductor Sander Teepen',
  //   date: 'May 13',
  //   description: 'Venue: Timișoara Muzicalā International Festival, Romania',
  //   program: `Bruch's Violin Concerto No. 1 in G minor, Op. 26`,
  //   image: '/static/timisoara.webp',
  //   link: 'http://www.timisoaramuzicala.ro/',
  // },
  // {
  //   locale: 'en',
  //   title: 'Recital with pianist Josu de Solaun',
  //   date: 'May 24',
  //   description: 'Hall: Palacio de Festivales de Cantabria',
  //   program: 'Brahms - Three sonatas for violin and piano',
  //   image: '/static/image-11-small.jpg',
  //   link: '',
  // },
  // {
  //   locale: 'en',
  //   title:
  //     'Concert with the Murcia Symphony Orchestra and conductor Cristobal Soler',
  //   date: 'May 28',
  //   description: 'Venue: Auditorio Victor Villegas, Murcia, Spain',
  //   program: `Bruch's Violin Concerto No. 1 in G minor, Op. 26`,
  //   image: '/static/auditorio_victor_villegas.webp',
  //   link: 'https://www.auditoriomurcia.org/auditorio/detevento.asp?secc=1&evento=2095',
  // },
  {
    locale: 'en',
    title:
      'Recording with Malta Philharmonic Orchestra and conductor Oliver Díaz',

    date: '',
    description: 'For Aria Classics - Malta',
    program: 'Bruch and Mendelssohn violin concertos.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604657/Jes%C3%BAs%20Reina/general/image-04-small_irym76.jpg',
    link: 'https://www.udemy.com/course/complete-nextjs-developer-zero-to-mastery/learn/lecture/26545448#overview',
  },
  {
    locale: 'en',
    title: 'Festival Málaga Clásica',
    date: '',
    description: '',
    program: '',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604657/Jes%C3%BAs%20Reina/general/image-03-small_ccpydm.jpg',
    link: '',
  },
  {
    locale: 'en',
    title: 'Festival Murciart',
    date: '',
    description: '',
    program: '',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604658/Jes%C3%BAs%20Reina/general/image-09-small_big7ty.jpg',
    link: '',
  },
  {
    locale: 'en',
    title:
      'Concert with Málaga Philharmonic Orchestra and conductor Dawid Runtz',
    date: 'October 13',
    description: 'Teatro Cervantes, Málaga, Spain',
    program: 'Wieniawski violin concerto no. 2.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604659/Jes%C3%BAs%20Reina/general/image-05-small_ko9bnd.jpg',
    link: '',
  },
  {
    locale: 'en',
    title:
      'Concert with Málaga Philharmonic Orchestra and Conductor Dawid Runtz',
    date: 'October 14',
    description: 'Teatro Cervantes, Málaga, Spain',
    program: 'Wieniawski violin concerto no. 2.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604656/Jes%C3%BAs%20Reina/general/image-01-small_fwryu8.jpg',
    link: '',
  },
  // Spanish
  // {
  //   locale: 'es',
  //   title:
  //     'Concierto con Banatul Philharmonic of Timișoara y el director Sander Teepen',
  //   date: '13 de mayo',
  //   description: 'Lugar: Festival Internacional Timișoara Muzicalā, Rumania',
  //   program: 'Concierto para violín n.° 1 en sol menor de Bruch, op. 26',
  //   image: '/static/timisoara.webp',
  //   link: 'http://www.timisoaramuzicala.ro/',
  // },
  // {
  //   locale: 'es',
  //   title: 'Recital con el pianista Josu de Solaun',
  //   date: '24 de mayo',
  //   description: 'Sala: Palacio de Festivales de Cantabria',
  //   program: 'Brahms - Tres sonatas para violín y piano',
  //   image: '/static/image-11-small.jpg',
  //   link: '',
  // },
  // {
  //   locale: 'es',
  //   title:
  //     'Concierto con la Orquesta Sinfónica de Murcia y el director Cristóbal Soler',
  //   date: '28 de mayo',
  //   description: 'Lugar: Auditorio Víctor Villegas, Murcia, España',
  //   program: `Concierto para violín n.° 1 en sol menor de Bruch, op. 26`,
  //   image: '/static/auditorio_victor_villegas.webp',
  //   link: 'https://www.auditoriomurcia.org/auditorio/detevento.asp?secc=1&evento=2095',
  // },
  {
    locale: 'es',
    title:
      'Grabación con la Orquesta Filarmónica de Malta y el director Oliver Díaz',
    date: '',
    description: 'Para los clásicos de Aria - Malta',
    program: 'Conciertos para violín de Bruch y Mendelssohn.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604657/Jes%C3%BAs%20Reina/general/image-04-small_irym76.jpg',
    link: '',
  },
  {
    locale: 'es',
    title: 'Festival Málaga Clásica',
    date: '',
    description: '',
    program: '',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604657/Jes%C3%BAs%20Reina/general/image-03-small_ccpydm.jpg',
    link: '',
  },
  {
    locale: 'es',
    title: 'Festival Murciart',
    date: '',
    description: '',
    program: '',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604658/Jes%C3%BAs%20Reina/general/image-09-small_big7ty.jpg',
    link: '',
  },
  {
    locale: 'es',
    title:
      'Concierto con la Orquesta Filarmónica de Málaga y el director Dawid Runtz',

    date: '13 de octubre',
    description: 'Teatro Cervantes, Málaga, España',
    program: 'Concierto para violín núm. 2.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604659/Jes%C3%BAs%20Reina/general/image-05-small_ko9bnd.jpg',
    link: '',
  },
  {
    locale: 'es',
    title:
      'Concierto con la Orquesta Filarmónica de Málaga y el Director Dawid Runtz',
    date: '14 de octubre',
    description: 'Teatro Cervantes, Málaga, España',
    program: 'Concierto para violín núm. 2.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604656/Jes%C3%BAs%20Reina/general/image-01-small_fwryu8.jpg',
    link: '',
  },
];

export default events;
