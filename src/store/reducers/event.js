import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'admin',
  products: [
    {
      name: 'Product 1',
      image: '1',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 60,
    },
    {
      name: 'Product 2',
      image: '2',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 230,
    },
    {
      name: 'Product 3',
      image: '3',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 64,
    },
    {
      name: 'Product 4',
      image: '4',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 80,
    },
    {
      name: 'Product 5',
      image: '5',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 2900,
    },
    {
      name: 'Product 6',
      image: '6',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 3500,
    },
    {
      name: 'Product 7',
      image: '7',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 2670.99,
    },
    {
      name: 'Product 8',
      image: '8',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 5120,
    },
    {
      name: 'Product 9',
      image: '9',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 1269.99,
    },
    {
      name: 'Product 10',
      image: '10',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 3519.99,
    },
    {
      name: 'Product 11',
      image: '11',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 1234.99,
    },
    {
      name: 'Product 12',
      image: '12',
      description: 'Lorem ipsum dolor sit amet, coectetuer adipiscing elit ',
      price: 239.99,
    }
  ]
};

export const slice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    setCatalogues: (state, action) => ({
      ...state,
      products: action.payload
    })
  },
});

export const { setUser, setCatalogues } = slice.actions;

export default slice.reducer;
