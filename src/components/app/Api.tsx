import React, { Component} from 'react';

interface IState {
  apiResponse: string;
}

export class Api extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      apiResponse: "nothing yet"
    };

  }


  callApi() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
  }

  componentDidMount() {
    this.callApi();

  }

  render() {


    return (
      <div
        id="pills-api"
        className="tab-pane fade show card pills-content"
        role="tabpanel"
        aria-labelledby="pills-api-tab">
        <div className="card-header">API</div>
        {this.state.apiResponse}

      </div>
    )
  }
}
