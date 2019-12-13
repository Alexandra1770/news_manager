import React, { Component } from 'react';
import { find } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListNews from '../ListNews';
import DetailModal from '../ModalMore';
import { deleteNews, editNews, getNews } from '../../store/actions/news';
import NEWS_DATABASE from '../../database';
import './index.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import EditForm from '../Form/EditForm';

class Client extends Component {
  state = {
    detailElement: null,
    isOpen: false,
    isModalOpen: false,
  };

  componentDidMount() {
    const { getNews } = this.props;
    getNews(NEWS_DATABASE);
  }

  handleClickOpen = (id) => {
    const { news } = this.props;
    this.setState({ isOpen: true, detailElement: find(news.news, o => o.id === id) });
  };

  handleClickOpenEdit = (id) => {
    const { news } = this.props;
    console.log('news.news', news.news)
    this.setState({
      isModalOpen: true,
      detailElement: find(news.news, (o) => {
        console.log('id', id)
        return (
          o.id === id
        );
      }),
    });
  };

  handleOnClose = () => this.setState({ isOpen: false });

  handleOnCloseModalEdit = () => this.setState({ isModalOpen: false });

  handleClickDelete = (id) => {
    const { deleteNews } = this.props;
    deleteNews(id);
  };

  handleSubmitEditNews = (values) => {
    const { editNews } = this.props;
    editNews(values);
    setTimeout(() => this.setState({ isModalOpen: false }), 1000);
  };

  render() {
    const { news } = this.props;
    const { detailElement, isOpen, isModalOpen } = this.state;
    return (
      <>
        <ListNews
          data={news}
          handleClickOpen={this.handleClickOpen}
          handleClickDelete={this.handleClickDelete}
          handleClickOpenEdit={this.handleClickOpenEdit}
          className="MuiPaper-root"
        />
        <DetailModal
          isOpen={isOpen}
          handleClose={this.handleOnClose}
          data={detailElement !== null ? detailElement : { title: 'Error', review: 'Error', id: 1 }}
        />
        <Dialog
          open={isModalOpen}
        >
          <DialogTitle id="alert-dialog-title">Edit</DialogTitle>
          <EditForm
            onSubmit={this.handleSubmitEditNews}
            handleOnCloseModalEdit={this.handleOnCloseModalEdit}
            initialValues={detailElement}
          />
        </Dialog>
      </>
    );
  }
}

Client.propTypes = {
  getNews: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  news: state.news,
});

const mapDispatchToProps = dispatch => ({
  getNews: news => dispatch(getNews(news)),
  deleteNews: news => dispatch(deleteNews(news)),
  editNews: news => dispatch(editNews(news)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);
