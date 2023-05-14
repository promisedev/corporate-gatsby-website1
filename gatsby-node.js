const path = require(`path`);

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/pages/service.js`);
  const blogPostTemplate2 = path.resolve(`src/pages/portfolio.js`);
 const equipmentTemplate = path.resolve(`src/pages/quote.js`);

  
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter

  // ** fetch slugs
  const firstPage = await graphql(
     `
       query Mypage1 {
         allContentfulTallseaServicesSchema1 {
           nodes {
             slug
           }
         } }         
     `
   )
const secondPage = await graphql(
     `
     query Mypage2 {
      allContentfulTallseaServicesschema2 {
        nodes {
          ref
        }
      }
          }         
     `
   )
const equipPage = await graphql(
     `
     query Mypage3 {
      allContentfulTallseaEquipmentsSchema {
        nodes {
          slug
        }
      }
          }         
     `
   )   

   if (firstPage.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }else if (secondPage.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  } else if (equipPage.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  } 

     // Create blog post pages.
     firstPage.data.allContentfulTallseaServicesSchema1.nodes.forEach((node) => {
       createPage({
         // Path for this page — required
         path: `/service/${node.slug}`,
         component: blogPostTemplate,
         context: {
           slug: `${node.slug}`,
         },
       });
     });

     secondPage.data.allContentfulTallseaServicesschema2.nodes.forEach((node) => {
       createPage({
         // Path for this page — required
         path: `/portfolio/${node.ref}`,
         component: blogPostTemplate2,
         context: {
           slug: `${node.ref}`,
         },
       }); 
     });

  equipPage.data.allContentfulTallseaEquipmentsSchema.nodes.forEach((node) => {
       createPage({
         // Path for this page — required
         path: `/quote/${node.slug}`,
         component: equipmentTemplate,
         context: {
           slug: `${node.slug}`,
         },
       });
     });
  // *****end
};

