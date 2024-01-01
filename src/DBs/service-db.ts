export interface Service {
  id: number;
  name: string;
  description: string;
  amount: number;
  length: number;
  category: string;
}

const services: Service[] = [
  {
    id: 0,
    name: 'Acne Facial',
    description:
      'I am a Face Reality Acne Specialist and I would love to help you treat your acne! This facial is specifically designed to help fight those stubborn breakouts and reach your goal of becoming acne free!',
    amount: 85,
    length: 45,
    category: 'Facial',
  },
  {
    id: 1,
    name: 'Hybrid 2 week fill',
    description: 'Description',
    amount: 50,
    length: 60,
    category: 'Lashes',
  },
  {
    id: 2,
    name: 'LED Light Therapy',
    description:
      'Add this to your next facial! This non invasive treatment uses narrow band, non thermal LED light energy to trigger your body’s natural cells to help accelerate repairs! It’s amazing for increasing collagen, kills acne bacteria, lessens and reduces sunspots, rosacea, sun damage, and much more!',
    amount: 20,
    length: 60,
    category: 'Facial',
  },
  {
    id: 3,
    name: 'Classic Spray Tan',
    description: 'Description',
    amount: 90,
    length: 60,
    category: 'Spray Tan',
  },
];

export const getService = (id: number): Service | undefined => {
  return services.find((service) => service.id === id);
};
export const getServices = (): Service[] | undefined => {
  return services;
};
