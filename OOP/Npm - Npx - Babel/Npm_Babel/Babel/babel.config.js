const presets = [
     [
          "@babel/preset-env", //presets 
          {
              useBuiltIns: "usage", // presets configuration
              corejs: "3.3.2"
          }
     ]
]

module.exports = {presets}