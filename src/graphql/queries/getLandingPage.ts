const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }
  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...header
          ...logo
          ...sectionAboutProject
          ...sectionTech
          ...sectionConcepts
          ...sectionModules
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
