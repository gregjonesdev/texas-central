import React, { Component} from 'react';

interface IState {
  apiResponse: any;
}

export class Api extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      apiResponse: []
    };

  }


  callApi() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.json())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
  }

  componentDidMount() {
    this.callApi();

  }

  render() {

    const service_intervals = this.state.apiResponse

    return (
      <div
        id="pills-api"
        className="tab-pane fade show card pills-content"
        role="tabpanel"
        aria-labelledby="pills-api-tab">
        <div className="card-header">Service Intervals</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Peak (min)</th>
              <th scope="col">Off-Peak (min)</th>
            </tr>
          </thead>
          <tbody>
            {service_intervals.map((interval: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{interval.operating_level}</td>
                  <td>{interval.peak_minutes}</td>
                  <td>{interval.offpeak_minutes}</td>
                </tr>
              )
            })}

          </tbody>
          </table>

      </div>
    )
  }
}
