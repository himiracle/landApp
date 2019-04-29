import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props){
    super(props);
    const {location:{pathname}} = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const { match: { params: { id } }, history: { push }} = this.props;
    const {isMovie} = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if(isMovie){
        ({data: result} = await movieApi.movieDetail(parsedId));
        // result = data.data;
      }else{
        ({data:result} = await tvApi.tvDetail(parsedId));
        // result = data.data;
      }
      console.log(result);
    } catch (error) {
      this.setState({error:"정보를 찾을수 없습니다."})
    }finally{
      this.setState({loading: false, result})
    }
    // try {
    //   const nowPlay = await movieApi.nowPlaying();
    //   console.log(nowPlay);
    // } catch (error) {
    //   this.setState({ error: "영화정보를 가져올 수 없습니다." });
    // } finally {
    //   this.setState({ loading: false });
    // }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
