import React, { Component } from "react";

export default class IndexSearchEngine extends Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1 ftco-animate p-4">
                <form action="#" className="search-property-1">
                  <div className="row">
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label htmlFor="#">Destination</label>
                        <div className="form-field">
                          <div className="icon">
                            <span className="ion-ios-search" />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search place"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label htmlFor="#">Check-in date</label>
                        <div className="form-field">
                          <div className="icon">
                            <span className="ion-ios-calendar" />
                          </div>
                          <input
                            type="text"
                            className="form-control checkin_date"
                            placeholder="Check In Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label htmlFor="#">Check-out date</label>
                        <div className="form-field">
                          <div className="icon">
                            <span className="ion-ios-calendar" />
                          </div>
                          <input
                            type="text"
                            className="form-control checkout_date"
                            placeholder="Check Out Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label htmlFor="#">Price Limit</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="ion-ios-arrow-down" />
                            </div>
                            <select name id className="form-control">
                              <option value>$5,000</option>
                              <option value>$10,000</option>
                              <option value>$50,000</option>
                              <option value>$100,000</option>
                              <option value>$200,000</option>
                              <option value>$300,000</option>
                              <option value>$400,000</option>
                              <option value>$500,000</option>
                              <option value>$600,000</option>
                              <option value>$700,000</option>
                              <option value>$800,000</option>
                              <option value>$900,000</option>
                              <option value>$1,000,000</option>
                              <option value>$2,000,000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-self-end">
                      <div className="form-group">
                        <div className="form-field">
                          <input
                            type="submit"
                            defaultValue="Search"
                            className="form-control btn btn-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
