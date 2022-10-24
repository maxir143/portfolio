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
              "About me",
              "/about-me"
            ],
            [
              "My work",
              "/work"
            ],
            [
              "Contact me",
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
          "url": "https://maximilianovl143.wordpress.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
