import Image from "next/image";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { notificationFun } from "../../redux/action/header";

const Notification = ({ notificationFun, data }) => {
  useEffect(() => {
    notificationFun();
  }, []);
  return (
    <Dropdown as="li" className="nav-item dropdown notification_dropdown">
      <Dropdown.Toggle
        variant=""
        as="a"
        className="nav-link  ai-icon i-false c-pointer"
        role="button"
        data-toggle="dropdown"
      >
        <svg
          width={28}
          height={28}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.16663C11.6793 1.16663 9.45374 2.0885 7.8128 3.72944C6.17186 5.37039 5.24999 7.59598 5.24999 9.91663V16.7416L3.31332 19.6583C3.08119 20.0162 2.94953 20.4299 2.9321 20.8562C2.91468 21.2824 3.01213 21.7055 3.21427 22.0811C3.41641 22.4568 3.71581 22.7712 4.08112 22.9915C4.44644 23.2118 4.86424 23.3298 5.29082 23.3333H22.7091C23.1385 23.3319 23.5594 23.2143 23.9274 22.9932C24.2954 22.772 24.5967 22.4554 24.7993 22.0769C25.002 21.6984 25.0986 21.2722 25.0787 20.8433C25.0589 20.4145 24.9234 19.9989 24.6866 19.6408L22.75 16.7416V9.91663C22.75 7.59598 21.8281 5.37039 20.1872 3.72944C18.5462 2.0885 16.3206 1.16663 14 1.16663Z"
            fill="#636363"
          />
          <path
            d="M14 26.8333C14.7231 26.8325 15.4282 26.6077 16.0184 26.1899C16.6085 25.772 17.0548 25.1817 17.2958 24.4999H10.7042C10.9452 25.1817 11.3915 25.772 11.9816 26.1899C12.5718 26.6077 13.2769 26.8325 14 26.8333Z"
            fill="#636363"
          />
        </svg>
        <div className="pulse-css" />
      </Dropdown.Toggle>
      <Dropdown.Menu
        alignRight={true}
        className="dropdown-menu dropdown-menu-right mt-3"
      >
        <PerfectScrollbar
          id="DZ_W_Notification1"
          className="widget-media dz-scroll p-3 "
          style={{ height: 380 }}
        >
          <ul className="timeline">
            {data &&
              data.map((d) => (
                <li key={d}>
                  <div className="timeline-panel">
                    {d.img ? (
                      <div className="media mr-2">
                        <Image alt="image" width={50} height={50} src={d.img} />
                      </div>
                    ) : d.profileText ? (
                      <div className={`media mr-2 media-${d.profileColor}`}>
                        {d.profileText}
                      </div>
                    ) : (
                      <div className="media mr-2 media-success">
                        <i className={`fa fa-${d.profileIcon}`}></i>
                      </div>
                    )}
                    <div className="media-body">
                      <h6 className="mb-1">Dr sultads Send you Photo</h6>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </PerfectScrollbar>
        <a className="all-notification" href="#">
          See all notifications <i className="ti-arrow-right" />
        </a>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const mapStateToProps = (state) => ({
  data: state.header.notification,
});

export default connect(mapStateToProps, { notificationFun })(Notification);
