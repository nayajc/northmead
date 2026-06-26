// Car brand logo mapping — car-logo-dataset via jsDelivr CDN
const CDN = 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logo-dataset@master/logos/thumb/';

const BRAND_LOGOS = {
  'Toyota':        CDN + 'toyota.png',
  'Lexus':         CDN + 'lexus.png',
  'Nissan':        CDN + 'nissan.png',
  'Honda':         CDN + 'honda.png',
  'Mazda':         CDN + 'mazda.png',
  'Subaru':        CDN + 'subaru.png',
  'Mitsubishi':    CDN + 'mitsubishi.png',
  'Infiniti':      CDN + 'infiniti.png',
  'Mercedes-Benz': CDN + 'mercedes-benz.png',
  'BMW':           CDN + 'bmw.png',
  'Audi':          CDN + 'audi.png',
  'Porsche':       CDN + 'porsche.png',
  'Jaguar':        CDN + 'jaguar.png',
  'Land Rover':    CDN + 'land-rover.png',
  'MINI':          CDN + 'mini.png',
  'Peugeot':       CDN + 'peugeot.png',
  'Hyundai':       CDN + 'hyundai.png',
  'Kia':           CDN + 'kia.png',
  'Austin Healey': CDN + 'austin-healey.png',
  'Volvo':         CDN + 'volvo.png',
};

function brandLogo(make, size = 28) {
  const url = BRAND_LOGOS[make];
  if (!url) return '';
  return `<img src="${url}" alt="${make}" style="width:${size}px;height:${size}px;object-fit:contain;filter:brightness(0) invert(1);opacity:0.9;" onerror="this.style.display='none'">`;
}
