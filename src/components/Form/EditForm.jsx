import React from 'react';
import { Form, Field } from 'react-final-form';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import './index.css';

const EditForm = ({
  isOpen, onSubmit, handleOnCloseModalEdit, initialValues: { id, title, review },
}) => (
  <Form
    isOpen={isOpen}
    onSubmit={onSubmit}
    initialValues={{ id, title, review }}
    render={({
      handleSubmit,
    }) => (
      <form onSubmit={handleSubmit}>
        <DialogContent className="input-group-modal">
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
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" autoFocus>
                        Edit
          </Button>
          <Button color="primary" onClick={handleOnCloseModalEdit}>
                        Close
          </Button>
        </DialogActions>
      </form>
    )}
  />
);
export default EditForm;
