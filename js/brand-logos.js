// Car brand logos — Wikipedia Wikimedia Commons (official brand marks)
const BRAND_LOGOS = {
  'Toyota':        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/200px-Toyota_carlogo.svg.png',
  'Lexus':         'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lexus_logo.svg/200px-Lexus_logo.svg.png',
  'Nissan':        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Nissan_2020_logo.svg/200px-Nissan_2020_logo.svg.png',
  'Honda':         'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Honda_logo.svg/200px-Honda_logo.svg.png',
  'Mazda':         'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mazda_logo.svg/200px-Mazda_logo.svg.png',
  'Subaru':        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Subaru_logo_2019.svg/200px-Subaru_logo_2019.svg.png',
  'Mitsubishi':    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Mitsubishi_motors_new_logo.svg/200px-Mitsubishi_motors_new_logo.svg.png',
  'Infiniti':      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Infiniti_logo.svg/200px-Infiniti_logo.svg.png',
  'Mercedes-Benz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png',
  'BMW':           'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png',
  'Audi':          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/200px-Audi-Logo_2016.svg.png',
  'Porsche':       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Porsche_logo.svg/200px-Porsche_logo.svg.png',
  'Jaguar':        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Jaguar_Cars_logo.svg/200px-Jaguar_Cars_logo.svg.png',
  'Land Rover':    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Land_Rover_logo.svg/200px-Land_Rover_logo.svg.png',
  'MINI':          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/MINI_logo.svg/200px-MINI_logo.svg.png',
  'Peugeot':       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Peugeot_2021_Logo.svg/200px-Peugeot_2021_Logo.svg.png',
  'Hyundai':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png',
  'Kia':           'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.svg/200px-Kia-logo.svg.png',
  'Volvo':         'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Volvo_logo.svg/200px-Volvo_logo.svg.png',
  'Austin Healey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Austin-Healey_logo.svg/200px-Austin-Healey_logo.svg.png',
};

function brandLogo(make, size = 28) {
  const url = BRAND_LOGOS[make];
  if (!url) return '';
  return `<span style="display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.12);border-radius:6px;padding:3px 5px;">
    <img src="${url}" alt="${make}" style="width:${size}px;height:${size}px;object-fit:contain;" onerror="this.parentElement.style.display='none'">
  </span>`;
}
