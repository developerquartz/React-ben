import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Accordion, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { taxSetting_Update, getTaxSetting } from "../../../../store/actions";


const TaxSettingIndex = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        serviceId: "",
        province: "",
        PST: "",
        GST: "",
        HST: "",
    });

    
}

export default TaxSettingIndex;