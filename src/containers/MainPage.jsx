import React from "react"; 
import { connect } from 'react-redux'
import * as actions from '../actions/actions';
import Form from "../components/Form";
import { Loading } from "../components/Loading";
import Tracks from '../components/Tracks'

const mapStateToProps = state => ({
  loading: state.loading,
  tracks: state.tracks
})

const mapDispatchToProps = dispatch => ({
  getTracks: artist => dispatch(actions.getTracks(artist)),
});
const MainPage = ({ loading, tracks, getTracks }) => {
    return (
     <div>
       <Form getTracks={getTracks} />
       <Loading loading={loading} />
       <Tracks tracks={tracks} />
     </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);