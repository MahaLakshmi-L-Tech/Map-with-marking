import React, { useEffect, useState } from "react";
import { Space, Dropdown } from "antd";
import { RegionInfo } from "../Actions/RegionInfoAction";
import { useDispatch, useSelector } from "react-redux";
import { selectRegionInfo } from "../Selectors/RegionInfoSelector";

const CountrySearch = () => {
  const [loadings, setLoadings] = useState([]);
  const [place, setPlaceName] = useState("Choose your Region");
  const [items, setMenuItems] = useState([]);
  const regionInfo = useSelector(selectRegionInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = [
      {
        label: "India",
        key: "1",
        id: "Republic of India",
      },
      {
        label: "United States",
        key: "2",
        id: "United States of America",
      },
      {
        label: " United Kingdom",
        key: "3",
        id: "United Kingdom",
      },
    ];
    setMenuItems(items);
  }, [loadings]);

  const enterLoading = (index) => {
    if (index == 0) {
      setLoadings([true]);
    } else {
      setTimeout(() => {
        setLoadings([false]);
      }, 2000);
    }
  };

  const handleMenuClick = ({ item, key }) => {
    if (key === "1") {
      setPlaceName("India");
      enterLoading(0);
      dispatch(RegionInfo(item.props.id));
    } else if (key === "2") {
      setPlaceName("United States");
      enterLoading(0);
      dispatch(RegionInfo(item.props.id));
    } else {
      setPlaceName("United Kingdom");
      enterLoading(0);
      dispatch(RegionInfo(item.props.id));
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  useEffect(() => {
    if (regionInfo.length) {
      enterLoading(1);
    }
  }, [regionInfo]);
  return (
    <>
      <Space direction="vertical">
        <Dropdown.Button
          type="primary"
          danger
          loading={loadings[0]}
          menu={menuProps}
          size="large"
        >
          {place}
        </Dropdown.Button>
      </Space>
    </>
  );
};

export default CountrySearch;
