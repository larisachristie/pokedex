(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{57:function(e,n,t){e.exports=t(69)},62:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var a=t(4),m=t.n(a),i=t(53),r=t.n(i),o=(t(62),t(25)),l=t(54),c=t(17);function u(){var e=Object(l.a)(["\n  query pokemons($first: Int!) {\n    pokemons(first: $first) {\n      id\n      name\n      number\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      classification\n      evolutions {\n        name\n      }\n      evolutionRequirements {\n        amount\n        name\n      }\n      image\n    }\n  }\n"]);return u=function(){return e},e}var s=t.n(c)()(u()),p=function(e){var n=e.pokemon;return m.a.createElement("div",{className:"pokemon"},m.a.createElement("div",{className:"pokemon__name"},m.a.createElement("p",null,n.number),m.a.createElement("p",null,n.name),m.a.createElement("p",null,n.classification)),m.a.createElement("div",{className:"pokemon__image"},m.a.createElement("img",{src:n.image,alt:n.name})),m.a.createElement("div",{className:"pokemon__details"},m.a.createElement("p",null,"Weight: ",n.weight.minimum,"-",n.weight.maximum),m.a.createElement("p",null,"Height: ",n.height.minimum,"-",n.height.maximum)))},h=function(){var e=Object(o.useQuery)(s,{variables:{first:9}}).data,n=(e=void 0===e?{}:e).pokemons,t=void 0===n?[]:n,a=t.map((function(e){return m.a.createElement(p,{key:e.id,pokemon:e})}));return m.a.createElement("div",{className:"pokedex__container"},t&&a)},d=t(56);var v=function(){var e=new d.a({uri:"https://graphql-pokemon.now.sh",cache:new o.InMemoryCache});return m.a.createElement(o.ApolloProvider,{client:e},m.a.createElement(h,null))};r.a.render(m.a.createElement(v,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.880552fb.chunk.js.map