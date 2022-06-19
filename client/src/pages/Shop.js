import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { featchBrands, fetchTypes, featchDevices } from "../http/deviceAPI";
import DeviceStore from "../store/DeviceStore";
import Pages from "../components/Pages";

const Shop = observer(() => {
	const {device} = useContext(Context)

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		featchBrands().then(data => device.setBrands(data))
		featchDevices(null, null, 1, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    }      
    )}, [])

    useEffect(() => {
      featchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
        device.setDevices(data.rows)
        device.setTotalCount(data.count)
      })
    }, [device.page, device.selectedType, device.selectedBrand])

	return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;