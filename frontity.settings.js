const settings = {
  "name": "portfolio",
  "state": {
    "frontity": {
      "url": "https://maximilianovl143.wordpress.com/",
      "title": "Maximiliano Valentin López",
      "description": "📍 CDMX, México"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            ["Portafolio",  "/"],
            ["Proyectos", "/projects"],
            ["Blog", "/blog"]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://maximilianovl143.wordpress.com/",
          "postsPage": "blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
