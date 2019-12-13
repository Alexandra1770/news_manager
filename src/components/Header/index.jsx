import React, { Component } from 'react';
import './index.css';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormAdd from '../Form/FormAdd';
import { addNews } from '../../store/actions';

class Header extends React.Component {
    state = {
      isOpen: false,
    };

    handleClickOpen = () => this.setState({ isOpen: true });

    handleOnClose = () => this.setState({ isOpen: false });

    handleSubmitAddNews = (values) => {
     const { addNews } = this.props;
     addNews(values);
     setTimeout(() => this.setState({isOpen: false}), 1000);
    };

    render() {
      const { isOpen } = this.state;
      return (
        <header className="header-back">
          <h1>News</h1>
          <Button
            type="button"
            className="button-add"
            onClick={this.handleClickOpen}
          >
                    Add news
          </Button>

          <Dialog open={ isOpen } >
            <DialogTitle id="alert-dialog-title">Add news</DialogTitle>
            <FormAdd
              onSubmit={this.handleSubmitAddNews}
              handleClose={this.handleOnClose}
            />
          </Dialog>

        </header>
      );
    }
}
Header.propTypes = {
  addNews: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  addNews: news => dispatch(addNews(news)),
});

export default connect(null, mapDispatchToProps)(Header);
