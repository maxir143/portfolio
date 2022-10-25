const settings = {
  "name": "portfolio",
  "state": {
    "frontity": {
      "url": "https://maximilianovl143.wordpress.com/",
      "title": "Maximiliano Valentin Lopez",
      "description": "Portfolio"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Who am i?",
              "/"
            ],
            [
              "Stuff i have done",
              "/projects"
            ],
            [
              "Get it touch",
              "/contact"
            ]
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
          "homepage": "about-me"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
