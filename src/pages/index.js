import React from "react"
import Layout from "../components/layout"
import InputBlock from "../components/Home/InputBlock"
import FilterBlock from "../components/Home/FilterBlock"
import DataBlock from "../components/Home/DataBlock"
import "../styles/index.css"
import { graphql } from "gatsby"


export default ({data}) => {
  console.log(data);
  return (
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
}

    // GraphQL query to our spreadsheet
    export const pageQuery = graphql`
    query {
      allGoogleSpreadsheetSheet1 {
        edges {
          node {
            Component
            Type
          }
        }
      }
    }`

    