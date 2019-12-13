import React from 'react';
import { Form, Field } from 'react-final-form';
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import './index.css';

const FormAdd = ({ isOpen, onSubmit, handleClose }) => (
    <Form
      isOpen={isOpen}
      onSubmit={onSubmit}
      render={({
        handleSubmit, submitting, pristine,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="title">
            <label>Title</label>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="review">
            <label>Review</label>
            <Field name="review" component="textarea" placeholder="Review" />
          </div>
            <DialogActions>
                <Button type="submit" disabled={submitting || pristine} color="primary" autoFocus>
                    Add
                </Button>
                <Button color="primary" onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </form>
      )}
    />
);
export default FormAdd;
