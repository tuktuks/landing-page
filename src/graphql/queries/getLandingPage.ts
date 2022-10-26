const GET_LANDING_PAGE = /* GraphQL */ `
  query {
    landingPage {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
