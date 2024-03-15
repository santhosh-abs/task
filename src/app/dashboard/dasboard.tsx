import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./dashboardstyle.scss";
import firstIcon from "../../assets/images/Icon.svg";
import Arrow from "../../assets/images/arrow.svg";
import Icon2 from "../../assets/images/Icon2.png";
import Icon3 from "../../assets/images/Icon3.svg";
import Icon4 from "../../assets/images/Icon4.svg";
import danger from "../../assets/images/danger.svg";
import warning from "../../assets/images/warning.svg";
import Filter from "../../assets/images/filter.svg";
import rightarrow from "../../assets/images/rightarrow.svg";
import Marker from "../../assets/images/marker.svg";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TableComponent from "../components/dashboardcomponent/tableComponent";

const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  boxShadow:
    "4.491428852081299px 4.491428852081299px 40.4228630065918px 0px #0000000D",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [Products, setProducts] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setProducts(event.target.value);
  };

  const SegmentItems: any = [
    {
      component: <MarketingIcon />,
      title: "Marketing",
      color: "#1C5AA5",
      tags: [
        "Message",
        "Push notification",
        "Push notification",
        "Email",
        "Social Media",
        "Email",
        "Social Media",
        "Digital",
      ],
    },
    {
      component: <ProductIcon />,
      title: "Products",
      color: "#309972",
      tags: [
        "Credit Card",
        "Platinum Card",
        "House",
        "Checking",
        "Car Loan",
        "Home Loan",
        "Personal",
        "Business",
      ],
    },
    {
      component: <HeadPhoneIcon />,
      title: "Behaviour",
      color: "#328DEC",
      tags: [
        "Transaction",
        "Purchase History",
        "Customer Feedback",
        "Gender",
        "Online",
        "Frequency",
        "Engagement",
      ],
    },
  ];

  return (
    <div className="Dashboardmain">
      <div className="navbar">
        <div style={{ backgroundColor: "#FFFFFF" }}>
          {sidebar.map((side, index) => (
            <div key={index} style={{ padding: "24px" }}>
              <img src={side} alt="sidebar" />
            </div>
          ))}
        </div>
      </div>
      <div className="Dashboard fullHeight">
        <h3 className="head">Dashboard</h3>
        <Grid container>
          <Grid
            item
            xs={9}
            container
            className="cardbox"
            style={{ paddingRight: "10px", marginBottom: "15px" }}
          >
            <Stack direction="row" style={{ width: "100%" }}>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", height: "150px" }}
                className="card"
                style={{ height: "150px" }}
              >
                <div>
                  <img src={firstIcon} alt="Icon" className="lefticon" />
                </div>
                <div className="rightcon">
                  <h3>10293</h3>
                  <p>Totals Products</p>
                  <div>
                    <img src={Arrow} alt="Icon" />
                    <span>4%(30 days)</span>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", height: "150px" }}
                className="card"
                style={{ height: "150px" }}
              >
                <div>
                  <img src={Icon2} alt="Icon" className="lefticon" />
                </div>
                <div className="rightcon">
                  <h3>40689</h3>
                  <p>Totals Customer</p>
                  <div>
                    <img src={Arrow} alt="Icon" />
                    <span>4%(30 days)</span>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", height: "150px" }}
                className="card"
                style={{ height: "150px" }}
              >
                <div>
                  <img src={Icon3} alt="Icon" className="lefticon" />
                </div>
                <div className="rightcon">
                  <h3>564</h3>
                  <p>Totals Campaign</p>
                  <div>
                    <img src={Arrow} alt="Icon" />
                    <span>4%(30 days)</span>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", height: "150px" }}
                className="card"
                style={{ height: "150px" }}
              >
                <div>
                  <img src={Icon4} alt="Icon" className="lefticon" />
                </div>
                <div className="rightcon">
                  <h3>112090</h3>
                  <p>Totals Sales</p>
                  <div>
                    <img src={Arrow} alt="Icon" />
                    <span>4%(30 days)</span>
                  </div>
                </div>
              </Grid>
            </Stack>
            <div
              className="segment"
              style={{
                marginTop: "20px",
              }}
            >
              <div className="w-100 d-flex justifybetween">
                <h3>Customer Segments</h3>
                <div className="d-flex justifybetween alignItem customerseg">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <img src={Filter} alt="Icon" className="marker" />
                    <InputLabel id="demo-select-small-label">
                      Products
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={Products}
                      label="Products"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Products</MenuItem>
                      <MenuItem value={20}>Products</MenuItem>
                      <MenuItem value={30}>Products</MenuItem>
                    </Select>
                  </FormControl>
                  <p className="filter">
                    <img src={Filter} alt="Icon" />
                    Filter
                    <span className="round">01</span>
                  </p>
                </div>
              </div>

              <div className="w-100 d-flex justifycenter">
                <div className="customer">
                  <div>
                    <img src={Icon2} alt="Icon" className="lefticon" />
                  </div>
                  <div className="rightcon">
                    <h3>150M</h3>
                    <p>Customers</p>
                  </div>
                </div>
              </div>
              {/* <div className="relative"></div> */}
              <div className="arrowbottom"></div>

              <Stack
                direction="row"
                style={{ width: "100%", flexWrap: "wrap" }}
                sx={{
                  justifyContent: "space-around",
                }}
                className="mt-80"
              >
                {SegmentItems.map((item: any, index: any) => (
                  <Grid
                    item
                    xs={3}
                    key={item.title + index}
                    className="cus_cardbox"
                  >
                    <div className="cus_card">
                      <div
                        className="top-section"
                        style={{
                          backgroundColor: item.color,
                        }}
                      >
                        <div>{item.component}</div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p>{item.title}</p>
                          <EyeIcon />
                        </div>
                      </div>
                      <div className="mid-section">
                        {item.tags.map((tag: any, t: any) => (
                          <div className="tags" key={tag + t}>
                            <span>
                              <SparkIcon />
                            </span>
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                      <div className="show-more-section">
                        <button
                          style={{
                            backgroundColor: item.color,
                          }}
                        >
                          Show more <ArrowIcon />
                        </button>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Stack>
            </div>
          </Grid>
          <Grid item xs={3} className="cardbox">
            <div className="card">
              <div className="d-flex justifybetween alignItem w-100 mb-20">
                <h3 className="recomm">Recommendation</h3>
                <div className="d-flex justifycenter viewall">
                  {" "}
                  <p>View all</p>
                  <img src={rightarrow}></img>
                </div>
              </div>

              <Grid item sx={{ display: "flex" }} className="">
                <Stack direction="row" style={{ width: "100%" }} className="">
                  <div>
                    <img src={warning} alt="Icon" className="lefticon" />
                  </div>
                  <div className="rightcorner">
                    <h5> High Conversions & Good ROI</h5>
                    <div className="d-flex flex-wrap">
                      <p className="button">Boost</p>
                      <p className="button">Increase Budget</p>
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid
                item
                sx={{ display: "flex", marginTop: "20px" }}
                className=""
                style={{
                  marginBottom: "80px",
                }}
              >
                <Stack direction="row" style={{ width: "100%" }} className="">
                  <div>
                    <img src={danger} alt="Icon" className="lefticon" />
                  </div>
                  <div className="rightcorner">
                    <h5> Low Conversions & Poor ROI</h5>
                    <div className="d-flex flex-wrap">
                      <p className="bg-red">Reduce Spending</p>
                      <p className="bg-red">Stop</p>
                    </div>
                  </div>
                </Stack>
              </Grid>
            </div>

            <div className="card mt-20">
              <div className="d-flex alignItem">
                <h3 className="recomm">Top User Actions</h3>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Products</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={Products}
                    label="Products"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Products</MenuItem>
                    <MenuItem value={20}>Products</MenuItem>
                    <MenuItem value={30}>Products</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="d-flex justifybetween w-100 flex-column">
                <div className="d-flex justifybetween mb-20">
                  {" "}
                  <p className="grey">Actions</p>
                  <p className="grey">Count</p>
                </div>
                <div className="d-flex justifybetween">
                  {" "}
                  <p>Aplly Now</p>
                  <p className="grey">20</p>
                </div>
                <hr></hr>
                <div className="d-flex justifybetween">
                  {" "}
                  <p>Download</p>
                  <p className="grey">20</p>
                </div>
                <hr></hr>
                <div className="d-flex justifybetween">
                  {" "}
                  <p>Skip</p>
                  <p className="grey">20</p>
                </div>
                <hr></hr>
                <div className="d-flex justifybetween">
                  {" "}
                  <p>Contact Us</p>
                  <p className="grey">20</p>
                </div>
                <hr></hr>
                <div className="d-flex justifybetween">
                  {" "}
                  <p>Like</p>
                  <p className="grey">20</p>
                </div>
                <hr></hr>
                <div className="d-flex justifybetween">
                  {" "}
                  <p>Register Now</p>
                  <p className="grey">20</p>
                </div>
                <div className="d-flex justifycenter mt-20 viewall">
                  {" "}
                  <p>View all</p>
                  <img src={rightarrow}></img>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <TableComponent />
      </div>
    </div>
  );
};

export default Dashboard;

const EyeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="3" fill="#ffffff40" />
      <g clip-path="url(#clip0_414_4888)">
        <path
          d="M17.6358 10.7094C16.8603 9.44639 15.0963 7.32739 12.0003 7.32739C8.90427 7.32739 7.14027 9.44639 6.36477 10.7094C6.12503 11.0971 5.99805 11.544 5.99805 11.9999C5.99805 12.4558 6.12503 12.9026 6.36477 13.2904C7.14027 14.5534 8.90427 16.6724 12.0003 16.6724C15.0963 16.6724 16.8603 14.5534 17.6358 13.2904C17.8755 12.9026 18.0025 12.4558 18.0025 11.9999C18.0025 11.544 17.8755 11.0971 17.6358 10.7094ZM16.7833 12.7669C16.1173 13.8499 14.6098 15.6724 12.0003 15.6724C9.39077 15.6724 7.88327 13.8499 7.21727 12.7669C7.07484 12.5364 6.9994 12.2708 6.9994 11.9999C6.9994 11.729 7.07484 11.4634 7.21727 11.2329C7.88327 10.1499 9.39077 8.32739 12.0003 8.32739C14.6098 8.32739 16.1173 10.1479 16.7833 11.2329C16.9257 11.4634 17.0011 11.729 17.0011 11.9999C17.0011 12.2708 16.9257 12.5364 16.7833 12.7669Z"
          fill="white"
        />
        <path
          d="M12 9.5C11.5055 9.5 11.0222 9.64662 10.6111 9.92133C10.2 10.196 9.87952 10.5865 9.6903 11.0433C9.50108 11.5001 9.45157 12.0028 9.54804 12.4877C9.6445 12.9727 9.8826 13.4181 10.2322 13.7678C10.5819 14.1174 11.0273 14.3555 11.5123 14.452C11.9972 14.5484 12.4999 14.4989 12.9567 14.3097C13.4135 14.1205 13.804 13.8 14.0787 13.3889C14.3534 12.9778 14.5 12.4945 14.5 12C14.4992 11.3372 14.2356 10.7018 13.7669 10.2331C13.2982 9.76444 12.6628 9.50079 12 9.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_414_4888">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const MarketingIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="10" fill="#EFF6FF" />
      <g clip-path="url(#clip0_414_4881)">
        <path
          d="M32.5 14.5H32.3538C31.8503 14.5048 31.3626 14.6766 30.9674 14.9886C30.5722 15.3005 30.2917 15.7349 30.1701 16.2235C30.0399 16.6992 29.7569 17.1189 29.3648 17.4181C28.9727 17.7173 28.4932 17.8793 28 17.8793C27.5068 17.8793 27.0273 17.7173 26.6352 17.4181C26.2431 17.1189 25.9601 16.6992 25.8299 16.2235C25.7083 15.7349 25.4278 15.3005 25.0326 14.9886C24.6374 14.6766 24.1497 14.5048 23.6463 14.5H23.5C22.0087 14.5018 20.579 15.095 19.5245 16.1495C18.47 17.204 17.8768 18.6337 17.875 20.125V38.125C17.875 39.0201 18.2306 39.8786 18.8635 40.5115C19.4964 41.1444 20.3549 41.5 21.25 41.5H23.6463C24.1497 41.4952 24.6374 41.3234 25.0326 41.0114C25.4278 40.6995 25.7083 40.2651 25.8299 39.7765C25.9601 39.3008 26.2431 38.8811 26.6352 38.5819C27.0273 38.2827 27.5068 38.1207 28 38.1207C28.4932 38.1207 28.9727 38.2827 29.3648 38.5819C29.7569 38.8811 30.0399 39.3008 30.1701 39.7765C30.2917 40.2651 30.5722 40.6995 30.9674 41.0114C31.3626 41.3234 31.8503 41.4952 32.3538 41.5H34.75C35.6451 41.5 36.5036 41.1444 37.1365 40.5115C37.7694 39.8786 38.125 39.0201 38.125 38.125V20.125C38.1232 18.6337 37.53 17.204 36.4755 16.1495C35.421 15.095 33.9913 14.5018 32.5 14.5V14.5ZM34.75 39.25L32.3391 39.1791C32.0749 38.2245 31.5031 37.3837 30.7123 36.7871C29.9215 36.1906 28.956 35.8716 27.9655 35.8797C26.975 35.8877 26.0148 36.2224 25.2339 36.8318C24.4529 37.4412 23.8949 38.2912 23.6463 39.25H21.25C20.9516 39.25 20.6655 39.1315 20.4545 38.9205C20.2435 38.7095 20.125 38.4234 20.125 38.125V33.625H22.375C22.6734 33.625 22.9595 33.5065 23.1705 33.2955C23.3815 33.0845 23.5 32.7984 23.5 32.5C23.5 32.2016 23.3815 31.9155 23.1705 31.7045C22.9595 31.4935 22.6734 31.375 22.375 31.375H20.125V20.125C20.125 19.2299 20.4806 18.3714 21.1135 17.7385C21.7464 17.1056 22.6049 16.75 23.5 16.75L23.6609 16.8209C23.9244 17.7697 24.4911 18.6063 25.2746 19.2029C26.0581 19.7995 27.0152 20.1233 28 20.125C28.9981 20.1165 29.966 19.7822 30.7566 19.173C31.5472 18.5638 32.1171 17.7129 32.3796 16.75H32.5C33.3951 16.75 34.2536 17.1056 34.8865 17.7385C35.5194 18.3714 35.875 19.2299 35.875 20.125V31.375H33.625C33.3266 31.375 33.0405 31.4935 32.8295 31.7045C32.6185 31.9155 32.5 32.2016 32.5 32.5C32.5 32.7984 32.6185 33.0845 32.8295 33.2955C33.0405 33.5065 33.3266 33.625 33.625 33.625H35.875V38.125C35.875 38.4234 35.7565 38.7095 35.5455 38.9205C35.3345 39.1315 35.0484 39.25 34.75 39.25Z"
          fill="#1C5AA5"
        />
        <path
          d="M29.125 31.375H26.875C26.5766 31.375 26.2905 31.4935 26.0795 31.7045C25.8685 31.9155 25.75 32.2016 25.75 32.5C25.75 32.7984 25.8685 33.0845 26.0795 33.2955C26.2905 33.5065 26.5766 33.625 26.875 33.625H29.125C29.4234 33.625 29.7095 33.5065 29.9205 33.2955C30.1315 33.0845 30.25 32.7984 30.25 32.5C30.25 32.2016 30.1315 31.9155 29.9205 31.7045C29.7095 31.4935 29.4234 31.375 29.125 31.375Z"
          fill="#1C5AA5"
        />
      </g>
      <defs>
        <clipPath id="clip0_414_4881">
          <rect
            width="27"
            height="27"
            fill="white"
            transform="translate(14.5 14.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const ProductIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="10" fill="#EFF6FF" />
      <path
        d="M37.9478 18.9199L30.9163 14.8599C30.0289 14.3496 29.0232 14.0811 27.9996 14.0811C26.976 14.0811 25.9703 14.3496 25.0829 14.8599L18.0514 18.9199C17.1658 19.4331 16.4303 20.1698 15.9185 21.0562C15.4067 21.9427 15.1364 22.9479 15.1348 23.9715V32.0915C15.1365 33.1153 15.4067 34.1207 15.9185 35.0073C16.4303 35.894 17.1658 36.6309 18.0514 37.1444L25.0829 41.2032C25.9702 41.7138 26.9759 41.9826 27.9996 41.9826C29.0233 41.9826 30.029 41.7138 30.9163 41.2032L37.9478 37.1444C38.8334 36.6309 39.5689 35.894 40.0807 35.0073C40.5925 34.1207 40.8627 33.1153 40.8644 32.0915V23.9715C40.8628 22.9479 40.5925 21.9427 40.0807 21.0562C39.5689 20.1698 38.8334 19.4331 37.9478 18.9199ZM26.2496 16.8817C26.7817 16.5745 27.3852 16.4128 27.9996 16.4128C28.614 16.4128 29.2175 16.5745 29.7496 16.8817L36.7811 20.9405C36.9594 21.0532 37.1269 21.1821 37.2816 21.3255L30.0564 25.4964C29.4309 25.857 28.7216 26.0468 27.9996 26.0468C27.2776 26.0468 26.5683 25.857 25.9428 25.4964L18.7176 21.3255C18.8723 21.1821 19.0398 21.0532 19.2181 20.9405L26.2496 16.8817ZM19.2181 35.1225C18.6863 34.8144 18.2448 34.3721 17.9377 33.8398C17.6306 33.3074 17.4686 32.7038 17.4681 32.0892V23.9715C17.4762 23.7614 17.5039 23.5524 17.5509 23.3474L24.7761 27.5182C25.4142 27.8812 26.1099 28.1318 26.8329 28.259V39.4229C26.6314 39.3612 26.4361 39.2807 26.2496 39.1825L19.2181 35.1225ZM38.5311 32.0892C38.5306 32.7038 38.3686 33.3074 38.0615 33.8398C37.7544 34.3721 37.3129 34.8144 36.7811 35.1225L29.7496 39.1825C29.5631 39.2807 29.3678 39.3612 29.1663 39.4229V28.259C29.8893 28.1318 30.585 27.8812 31.2231 27.5182L38.4483 23.3474C38.4953 23.5524 38.523 23.7614 38.5311 23.9715V32.0892Z"
        fill="#309972"
      />
    </svg>
  );
};

const HeadPhoneIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="10" fill="#EFF6FF" />
      <path
        d="M37.7494 28.4592V26.9165C37.7494 24.3306 36.7222 21.8507 34.8937 20.0222C33.0652 18.1937 30.5853 17.1665 27.9994 17.1665C25.4136 17.1665 22.9336 18.1937 21.1051 20.0222C19.2767 21.8507 18.2494 24.3306 18.2494 26.9165V28.4592C17.1132 28.9595 16.1833 29.8349 15.6154 30.939C15.0476 32.043 14.8762 33.3086 15.13 34.5239C15.3839 35.7392 16.0475 36.8304 17.0097 37.6149C17.972 38.3994 19.1746 38.8295 20.4161 38.8332C20.9907 38.8332 21.5418 38.6049 21.9482 38.1986C22.3545 37.7922 22.5828 37.2411 22.5828 36.6665V30.1665C22.5828 29.5919 22.3545 29.0408 21.9482 28.6344C21.5418 28.2281 20.9907 27.9998 20.4161 27.9998V26.9165C20.4161 24.9053 21.2151 22.9764 22.6372 21.5543C24.0594 20.1321 25.9882 19.3332 27.9994 19.3332C30.0107 19.3332 31.9395 20.1321 33.3617 21.5543C34.7838 22.9764 35.5828 24.9053 35.5828 26.9165V27.9998C35.0081 27.9998 34.457 28.2281 34.0507 28.6344C33.6444 29.0408 33.4161 29.5919 33.4161 30.1665V36.6665H30.1661C29.8788 36.6665 29.6032 36.7806 29.4001 36.9838C29.1969 37.187 29.0828 37.4625 29.0828 37.7498C29.0828 38.0372 29.1969 38.3127 29.4001 38.5159C29.6032 38.719 29.8788 38.8332 30.1661 38.8332H35.5828C36.8243 38.8295 38.0268 38.3994 38.9891 37.6149C39.9514 36.8304 40.615 35.7392 40.8688 34.5239C41.1227 33.3086 40.9513 32.043 40.3834 30.939C39.8156 29.8349 38.8857 28.9595 37.7494 28.4592ZM20.4161 36.6665C19.5542 36.6665 18.7275 36.3241 18.118 35.7146C17.5085 35.1051 17.1661 34.2785 17.1661 33.4165C17.1661 32.5545 17.5085 31.7279 18.118 31.1184C18.7275 30.5089 19.5542 30.1665 20.4161 30.1665V36.6665ZM35.5828 36.6665V30.1665C36.4447 30.1665 37.2714 30.5089 37.8809 31.1184C38.4904 31.7279 38.8328 32.5545 38.8328 33.4165C38.8328 34.2785 38.4904 35.1051 37.8809 35.7146C37.2714 36.3241 36.4447 36.6665 35.5828 36.6665Z"
        fill="#328DEC"
      />
    </svg>
  );
};

const SparkIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.87858 5.21801L6.53926 9.96296C6.5468 9.98466 6.56105 10.0034 6.57994 10.0165C6.59883 10.0295 6.62139 10.0362 6.64435 10.0356C6.66731 10.035 6.68949 10.0271 6.70767 10.0131C6.72585 9.99906 6.73909 9.97961 6.74549 9.95755L7.4903 7.35773L9.94776 6.65567C9.96998 6.6493 9.98958 6.63598 10.0037 6.61766C10.0178 6.59934 10.0257 6.577 10.0261 6.55388C10.0266 6.53077 10.0197 6.50811 10.0064 6.48922C9.99305 6.47033 9.97403 6.4562 9.95209 6.4489L5.21959 4.87158C5.17156 4.85555 5.11999 4.85332 5.07075 4.86514C5.02151 4.87696 4.97657 4.90236 4.94105 4.93845C4.90553 4.97454 4.88084 5.01987 4.8698 5.06929C4.85875 5.1187 4.86179 5.17023 4.87858 5.21801Z"
        stroke="#1C5AA5"
        stroke-width="0.916031"
      />
      <path
        d="M4.87079 1.62378V2.70636M1.62305 4.87152H2.70563M2.58979 7.12546L3.35518 6.36007M7.34611 2.60514L6.58127 3.37107M2.60495 2.60514L3.37033 3.37107"
        stroke="#1C5AA5"
        stroke-width="0.916031"
        stroke-linecap="round"
      />
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.91818 5.28196L9.91812 5.28202L6.38105 8.80999L6.37762 8.81341L6.37756 8.81335C6.29562 8.88951 6.18731 8.93091 6.07546 8.92894C5.96361 8.92698 5.85683 8.88178 5.77762 8.80278C5.6984 8.72377 5.65296 8.6171 5.65098 8.50523C5.64901 8.39335 5.69064 8.28514 5.76702 8.20338L5.77033 8.19985L5.77039 8.19991L8.56866 5.40838H0.96663C0.852129 5.40838 0.742245 5.36302 0.661172 5.28215C0.580088 5.20128 0.53447 5.09151 0.53447 4.97698C0.53447 4.86245 0.580088 4.75268 0.661172 4.67181C0.742245 4.59094 0.852129 4.54558 0.96663 4.54558H8.56866L5.77039 1.75405L5.76696 1.75063L5.76702 1.75058C5.69064 1.66882 5.64901 1.56061 5.65098 1.44873C5.65296 1.33686 5.6984 1.23019 5.77762 1.15118M9.91818 5.28196L5.77762 1.15118C5.77762 1.15118 5.77762 1.15118 5.77762 1.15118M9.91818 5.28196C9.99915 5.2011 10.0447 5.09142 10.0447 4.97698C10.0447 4.86254 9.99915 4.75286 9.91818 4.672L9.91812 4.67194L6.38105 1.14397L6.38111 1.14391M9.91818 5.28196L6.38111 1.14391M5.77762 1.15118C5.85683 1.07218 5.96361 1.02698 6.07546 1.02502C6.18731 1.02305 6.29562 1.06445 6.37756 1.14061M5.77762 1.15118L6.37756 1.14061M6.38111 1.14391L6.37756 1.14061M6.38111 1.14391L6.37756 1.14061"
        fill="white"
        style={{ mixBlendMode: "luminosity" }}
      />
      <path
        d="M9.91818 5.28196L9.91812 5.28202L6.38105 8.80999L6.37762 8.81341L6.37756 8.81335C6.29562 8.88951 6.18731 8.93091 6.07546 8.92894C5.96361 8.92698 5.85683 8.88178 5.77762 8.80278C5.6984 8.72377 5.65296 8.6171 5.65098 8.50523C5.64901 8.39335 5.69064 8.28514 5.76702 8.20338L5.77033 8.19985L5.77039 8.19991L8.56866 5.40838H0.96663C0.852129 5.40838 0.742245 5.36302 0.661172 5.28215C0.580088 5.20128 0.53447 5.09151 0.53447 4.97698C0.53447 4.86245 0.580088 4.75268 0.661172 4.67181C0.742245 4.59094 0.852129 4.54558 0.96663 4.54558H8.56866L5.77039 1.75405L5.76696 1.75063L5.76702 1.75058C5.69064 1.66882 5.64901 1.56061 5.65098 1.44873C5.65296 1.33686 5.6984 1.23019 5.77762 1.15118M9.91818 5.28196L5.77762 1.15118C5.77762 1.15118 5.77762 1.15118 5.77762 1.15118M9.91818 5.28196C9.99915 5.2011 10.0447 5.09142 10.0447 4.97698C10.0447 4.86254 9.99915 4.75286 9.91818 4.672L9.91812 4.67194L6.38105 1.14397L6.38111 1.14391M9.91818 5.28196L6.38111 1.14391M5.77762 1.15118C5.85683 1.07218 5.96361 1.02698 6.07546 1.02502C6.18731 1.02305 6.29562 1.06445 6.37756 1.14061M5.77762 1.15118L6.37756 1.14061M6.38111 1.14391L6.37756 1.14061M6.38111 1.14391L6.37756 1.14061"
        stroke="white"
        stroke-width="0.274809"
      />
    </svg>
  );
};

export const sidebar = [
  '/images/sidebar-icons1.svg',
  '/images/sidebar-icons2.svg',
  '/images/sidebar-icons3.svg',
  '/images/sidebar-icons4.svg',
  '/images/sidebar-icons5.svg',
  '/images/sidebar-icons6.svg',
  '/images/sidebar-icons7.svg',
]
