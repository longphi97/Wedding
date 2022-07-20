import React from "react";
import styled from "styled-components";
import Map from "../Map/map"

const key = 'AIzaSyBATIW6Z0MeYSK4t6N6s_G2MXyrptkZ-3M';

function Contact(props) {
    return (
      <Picker>
        <div className="map">
        <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="container">
                <div className="row1">
                    <div className="column1">
                      <div className="titlecontact">
                        <h3>MILY BRIDAL</h3>
                      </div>
                      <div className="infocontact">
                        <p>
                          <strong>Địa chỉ:</strong>
                          Ngã Tư Đại Hào, Triệu Đại, Triệu Phong, Quảng Trị  
                        </p>
                        <p>
                          <strong>Điện thoại:</strong>
                          0898580567
                        </p>
                        <p>
                          <strong>FaceBook:</strong>
                          MiLy
                        </p>
                      </div>
                    </div>
                <div className="colum2">
                  <div className="titlecontact">
                    <h3>LIÊN HỆ</h3>
                  </div>
                  <form id='contact' method='post' novalidate='novalidate'>
                    <div className="col-one-third">
                      <input type="text" className="form-control" name="fullname" placeholder="Họ Tên" />
                    </div>
                    <div className="col-one-third">
                      <input type="text" className="form-control" name="phone" placeholder="Số điện thoại" />
                    </div>
                    <div className="col-one-third">
                      <input type="email" className="form-control" name="email" placeholder="Địa chỉ email" />
                    </div>
                    <div className="col-full">
                      <textarea className="form-control1" name="content" placeholder="Nội dung"></textarea>
                    </div>
                    <div className="col-full">
                      <button className="viewmore" type="submit" value ="submit">Gửi liên hệ</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
      </Picker>
    );
  }

export default Contact;

export const Picker = styled.div`

  
  .map{
    top: 0;
    left:0;
    height: 30%;
  }

  .container {
    padding-right: 40px;
    padding-left: 40px;
    margin-right: auto;
    margin-left: auto;
    dispay: block;
    height: auto;

    .row1 {
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      flex-wrap: wrap;
      height: 100%;
      padding: 25px 0;

      .colum2{
        width: 40%;

        .col-one-third{

            input {
              border-radius: initial;
              margin-bottom: 10px;
              height: 30px;
              width: 100%;
              border-style: outset;
              border: 1px solid;
            }
        }

        .col-full .form-control1 {
          width: 100%;
          height: 100px;
        }

        .col-full .viewmore{
          height: 40px;
          cursor: pointer;
          width: auto;
          border: 1px solid #b48360;
          background-color: #b48360;
          color: white;

          &:hover {
            background-color: white;
            color: #b48360;
          }

        }
      }
    }
  }

`;
