import React from "react"
import Layout from "../components/layout"
import InputBlock from "../components/Home/InputBlock"
import FilterBlock from "../components/Home/FilterBlock"
import DataBlock from "../components/Home/DataBlock"
import "../styles/index.css"


export default () => (
    <Layout>
      <section className="overflow-hidden bg-light">
        <div className="container pt-4 main-con">
          <FilterBlock/>
          <InputBlock/>
          <DataBlock/>
        </div>
        </section>
    </Layout>
  )
