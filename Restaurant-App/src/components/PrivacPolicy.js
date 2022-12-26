import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import parse from "html-react-parser";


function PrivacPolicy() {
  const [title, settitle] = useState([])
  const [description, setdescription] = useState([])
  const { ID } = useParams()

  useEffect(() => {
    async function fetchData() {
      const detail = {
        ID
      }
      try {
        const result = (
          await axios.post(
            "https://apinodejs.creativeparkingsolutions.com/api/admin/getpagedesc",
            detail
          )
        ).data;


        settitle(result.data[0]['title'])
        setdescription(result.data[0]['description'])

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />

      <div className="mx-5 my-5">
        <div className="row">
          <h1>{title}</h1>
          <div className="pt-2">
            {parse(description.toString())}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PrivacPolicy;
