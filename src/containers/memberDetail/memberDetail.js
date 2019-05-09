import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMemberDetail } from '../../actions/action.memberDetail';

class MemberDetail extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.props.getMemberDetail(params.memberID);
  }

  render() {
    return <div>MEMBER DETAILS PAGE</div>;
  }
}

MemberDetail.propTypes = {
  memberDetail: PropTypes.object
};

const mapStateToProps = state => ({
  memberDetail: state.memberDetail
});

const mapDispatchToProps = dispatch => ({
  getMemberDetail: memberID => dispatch(getMemberDetail(memberID))
});

const MemberDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetail);
export default MemberDetailPage;
