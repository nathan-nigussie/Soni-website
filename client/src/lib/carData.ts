export type CarStatus = "Available" | "Sold" | "Negotiated" | "Reserved" | null;

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  images: string[]; // Changed from 'image' to 'images' array
  color: string;
  transmission: string;
  fuelType: string;
  engine: string;
  description: string;
  status: CarStatus;
}

// Placeholder images for a gallery of 4
const car12_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764752062/WhatsApp_Image_2025-12-03_at_10.53.22_1_suzd6o.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764752062/WhatsApp_Image_2025-12-03_at_10.53.22_bm1oa1.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764752062/WhatsApp_Image_2025-12-02_at_17.42.24_pmjgnc.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764752062/WhatsApp_Image_2025-12-03_at_10.53.22_2_i7dcld.jpg",
];
const car1_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764255533/photo_2025-11-25_17-28-50_cqukvg.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764255638/photo_2025-11-25_17-28-19_uyztze.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764255650/photo_2025-11-25_17-28-22_d433lk.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764255627/photo_2025-11-25_17-28-47_feoxwp.jpg",
];
const car2_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764523507/IMG_20160319_192645_yenjwj.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764523507/IMG_20160319_192605_oivhie.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764523507/IMG_20160319_192729_dgrysm.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764523507/IMG_20160319_192645_1_trpicj.jpg",
];
const car3_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524024/IMG_20161009_175624_qh168y.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524024/IMG_20161009_175632_gu1szk.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524433/IMG_20160910_155424_uf43uu.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524024/IMG_20161009_175646_atdsda.jpg",
];
const car4_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524440/IMG_20160910_155416_rcejmw.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524435/IMG_20160910_155432_hhz2bx.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524433/IMG_20160910_155424_uf43uu.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524433/IMG_20160910_155438_vykedg.jpg",
];
const car5_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524690/IMG_20160903_113445_jkljav.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524685/IMG_20160903_113419_rhgi5e.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524686/IMG_20160903_113457_e6wt4o.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524685/IMG_20160903_113433_xb7yyg.jpg",
];
const car6_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524930/IMG_20160902_160022_bnjrez.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524931/IMG_20160902_160129_yy6cxu.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524930/IMG_20160902_155948_riseji.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764524929/IMG_20160902_160133_ec8czu.jpg",
];
const car7_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525158/IMG_20160725_091311_vqe5ep.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525159/IMG_20160725_091300_ibk6bn.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525158/IMG_20160725_091322_mzazeb.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525157/IMG_20160725_091333_ac9ftu.jpg",
];
const car8_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526108/WhatsApp_Image_2025-11-30_at_20.03.17_1_w77myr.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526108/WhatsApp_Image_2025-11-30_at_20.03.16_m3fzpk.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526108/WhatsApp_Image_2025-11-30_at_20.03.17_2_gvk1i0.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526107/WhatsApp_Image_2025-11-30_at_20.03.17_czqusf.jpg",
];
const car9_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525158/IMG_20160725_091311_vqe5ep.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525159/IMG_20160725_091300_ibk6bn.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525158/IMG_20160725_091322_mzazeb.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764525157/IMG_20160725_091333_ac9ftu.jpg",
];
const car10_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526379/WhatsApp_Image_2025-11-30_at_20.03.19_lpgije.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526377/WhatsApp_Image_2025-11-30_at_20.03.19_1_trkzk4.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526376/WhatsApp_Image_2025-11-30_at_20.03.19_2_vmpgg6.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526375/WhatsApp_Image_2025-11-30_at_20.03.19_3_dvnfax.jpg",
];
const car11_image = [
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526743/WhatsApp_Image_2025-11-30_at_20.03.12_z6ypg1.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526741/WhatsApp_Image_2025-11-30_at_20.03.12_2_efy3az.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526740/WhatsApp_Image_2025-11-30_at_20.03.12_3_s84o60.jpg",
  "https://res.cloudinary.com/dqzt9itgs/image/upload/v1764526740/WhatsApp_Image_2025-11-30_at_20.03.12_4_fpro5r.jpg",
];

export const cars: Car[] = [
  {
    id: 12,
    make: "Toyota",
    model: "Hiace",
    year: 2010,
    price: 9300,
    mileage: 299700,
    images: car12_image,
    color: "White Metalic",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2.5L D4D Engine",
    description: "Reliable Van with elegant design and performance.",
    status: "Sold",
  },
  {
    id: 1,
    make: "Toyota",
    model: "Hiace",
    year: 2010,
    price: 10500,
    mileage: 196000,
    images: car1_image,
    color: "Blue Metalic",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2.5L 4-Cylinder",
    description:
      "Reliable Van with excellent fuel economy and modern features.",
    status: "Sold",
  },
  {
    id: 2,
    make: "Toyota",
    model: "Hiace",
    year: 2006,
    price: 9000,
    mileage: 185000,
    images: car2_image,
    color: "Dark Green",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2.5L 4-Cylinder",
    description: "Reliable Van with great handling and performance.",
    status: "Sold",
  },
  {
    id: 3,
    make: "Toyota",
    model: "Hiace",
    year: 1999,
    price: 4000,
    mileage: 320000,
    images: car3_image,
    color: "White",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2LT Turbo Engine",
    description: "Powerful Van perfect for work and towing.",
    status: "Sold",
  },
  {
    id: 4,
    make: "Toyota",
    model: "Hiace",
    year: 2001,
    price: 4200,
    mileage: 280000,
    images: car4_image,
    color: "Silver",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2L",
    description: "Clean and realiable Van.",
    status: "Sold",
  },
  {
    id: 5,
    make: "Toyota",
    model: "Corolla",
    year: 1987,
    price: 600,
    mileage: 287000,
    images: car5_image,
    color: "Sky Blue",
    transmission: "Manual",
    fuelType: "Gasoline",
    engine: "1.3L carburetor Engine",
    description: "Old and reliable automobile for home use.",
    status: "Sold",
  },
  {
    id: 6,
    make: "Toyota ",
    model: "Hilux",
    year: 1996,
    price: 3800,
    mileage: 350000,
    images: car6_image,
    color: "Dark Gray",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2L Engine",
    description: "Affordable Pickup truck with good fuel efficiency.",
    status: null,
  },
  {
    id: 7,
    make: "Toyota",
    model: "Hiace",
    year: 2002,
    price: 5000,
    mileage: 320000,
    images: car7_image,
    color: "Silver",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2.5L D4D engine",
    description: "Stylish van with engaging driving dynamics.",
    status: "Sold",
  },
  {
    id: 8,
    make: "Toyota",
    model: "Avensis",
    year: 1998,
    price: 500,
    mileage: 380000,
    images: car8_image,
    color: "Beige",
    transmission: "Manual",
    fuelType: "Gasoline",
    engine: "1.8L 4-Cylinder",
    description: "Budget-friendly sedan with modern styling and reliability.",
    status: "Available",
  },
  {
    id: 9,
    make: "Toyota",
    model: "Hiace",
    year: 2007,
    price: 5500,
    mileage: 325000,
    images: car9_image,
    color: "Silver",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2.5L D4D Engine",
    description: "Reliable Van with elegant design and performance.",
    status: "Sold",
  },
  {
    id: 10,
    make: "Toyota",
    model: "Avensis",
    year: 2002,
    price: 1100,
    mileage: 325000,
    images: car10_image,
    color: "Black",
    transmission: "Manual",
    fuelType: "Gasoline",
    engine: "1.6L",
    description: "Reliable and high performance Hiace",
    status: "Sold",
  },

  {
    id: 11,
    make: "Toyota",
    model: "Hiace",
    year: 2007,
    price: 5200,
    mileage: 325000,
    images: car11_image,
    color: "Silver Metalic",
    transmission: "Manual",
    fuelType: "Diesel",
    engine: "2.5L D4D Engine",
    description: "Reliable Van with elegant design and performance.",
    status: "Sold",
  },
];
