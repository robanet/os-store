import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {setCatalogues} from "../../store/reducers/event";
import Alert from '@material-ui/lab/Alert';

import './style.scss';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState('');

  const [price, setPrice] = useState('');
  const [priceErr, setPriceErr] = useState(false);
  const [priceErrorMsg, setPriceErrorMsg] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');

  const [createStatus, setCreateStatus] = useState(false);

  const user = useSelector((state) => state.event.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.event.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validateForm();

    if (valid) {
      const form = {
        name,
        price,
        description,
        image: 'default'
      }

      localStorage.setItem('product', JSON.stringify(form));
      dispatch(setCatalogues([
          ...products,
          form
      ]));
      setCreateStatus(true);
      setName('');
      setPrice('');
      setDescription('');
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!name || name === '') {
      setNameErr(true);
      setNameErrorMsg('Name is required.');
      isValid = false;
    }

    if (!price || price === '') {
      setPriceErr(true);
      setPriceErrorMsg('Price is required.');
      isValid = false;
    }

    if (!description || description === '') {
      setDescriptionErr(true);
      setDescriptionErrorMsg('Price is required.');
      isValid = false;
    }

    return isValid;
  };

  const handleNameChange = (value) => {
    setName(value);
    if (!value.trim()) {
      setNameErr(true);
      setNameErrorMsg('Name is required');
    } else {
      setNameErr(false);
      setNameErrorMsg('');
    }
  };

  const handlePriceChange = (value) => {
    setPrice(value);
    if (!value.trim()) {
      setPriceErr(true);
      setPriceErrorMsg('Price is required');
    } else {
      setPriceErr(false);
      setPriceErrorMsg('');
    }
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
    if (!value.trim()) {
      setDescriptionErr(true);
      setDescriptionErrorMsg('Description is required');
    } else {
      setDescriptionErr(false);
      setDescriptionErrorMsg('');
    }
  };

  useEffect(() => {
    if (user !== 'admin') {
      history.push('/');
    }
  }, []);

  return (
      <div className="create-product-page">
        <div className="container">
          <h2>Create Product Page</h2>
          {createStatus && <Alert severity="success">New Product is created successfully!</Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={name}
                error={nameErr}
                onChange={(e) => handleNameChange(e.target.value)}
                mb={2}
                autoComplete="email"
                autoFocus
                fullWidth
                helperText={nameErr ? nameErrorMsg : ''}
            />
            <TextField
                label="Price"
                type="number"
                value={price}
                error={priceErr}
                onChange={(e) => handlePriceChange(e.target.value)}
                mb={2}
                fullWidth
                helperText={priceErr ? priceErrorMsg : ''}
            />
            <TextField
                label="Description"
                multiline
                rows={5}
                value={description}
                error={descriptionErr}
                onChange={(e) => handleDescriptionChange(e.target.value)}
                mb={2}
                fullWidth
                helperText={descriptionErr ? descriptionErrorMsg : ''}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                mb={2}
                type="submit"
            >
              Create
            </Button>
          </form>
        </div>
      </div>
  );
};

export default CreateProduct;
