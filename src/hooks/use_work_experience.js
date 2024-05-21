import { useStaticQuery, graphql } from "gatsby";

export const useWorkExperience = () => {
    const { experienceJson } = useStaticQuery(graphql`
    query WorkExperience {
        experienceJson {
          company
          description
          id
          link
          month_end
          month_start
          slug
          title
          year_start
          year_end
        }
      }
    `)

    return experienceJson;
}