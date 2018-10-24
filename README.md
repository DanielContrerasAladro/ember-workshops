**NUEVA VERSION CON Ember 3.x:** https://github.com/shokmaster/ember-workshops-3

![](https://raw.githubusercontent.com/shokmaster/ember-workshops-3/master/_img/tomster-sm.png)

APLICACIONES WEB CON UN HAMSTER GAFAPASTA
===================

Slides: https://slides.com/beatrizdemiguelperez/deck-1

####  ¿Por qué este workshop?
Porque empezar con un framework da mucha pereza. Pero don’t worry my friend, en menos de dos horas sabrás enfrentarte a uno de los mejores frameworks Javascript del momento.

#### ¿Qué vas a aprender?
Te contaremos por qué Ember mola tanto y cómo funciona, y haremos una aplicación web en tiempo récord.
Entenderás lo que es "The Ember Way", sus convenciones y su arquitectura. Definirás rutas, modelos, controladores y componentes.
Descubrirás [Ember CLI](https://ember-cli.com), una herramienta potente y fácil de usar con la que generar automáticamente distintas partes de tu aplicación.
Conocerás los addons de Ember y los generadores de patrones.

#### ¿Qué necesito?
- Tu editor de código HTML/JS favorito
- [Node](https://nodejs.org) instalado (versión mínima recomendada 4.0) y npm (2.x)
- Git

#### Slides:
Puedes verlas aquí: http://slides.com/beatrizdemiguelperez/deck-1

----------


Start! fork this project or just download it
-------------

#### 1. Start up: create your Ember app

**Steps:**

> - `cd foodme` (we did `ember new foodme` for you)
> - `npm install && bower install` (if it doesn't work, just copy node_modules and bower_components from resources folder)
> - `ember serve`

#### 2. List restaurants from json on new route

**Steps:**

> - `ember g route index && ember g route restaurants`
> - Redirect index to restaurants route
> - Change the Restaurant Route to use `resources/restaurants.json` as the model
> - Show restaurants list in the `restaurants.hbs` Template
> - Go http://localhost:4000/ and see it!
> - `ember g template application`
> - Personalize the page design using resources/css and bootstrap

![](http://www.twiki.org/p/pub/TWiki06x00/TWikiDocGraphics/tip.gif) _BONUS TRACK:_ Create About page: generate route `about` and add some content to the template. Remember to add the menu entry.

#### 3. Create component nav-menu

**Steps:**

> - `ember g component nav-menu`
> - `ember g controller aplication` to set some variables
> - Add toggle behaviour to menu

#### 4. Add translations

**Steps:**

> - `ember install ember-i18n`
> - Add translations with `ember generate locale en && ember generate locale es`
> - Copy the translations from `resources/translations` folder
> - Add change language dropdown with: `ember install ember-cli-sass && ember install ember-power-select`

#### 5. Create a helper

**Steps:**

> - `ember g helper restaurant-img`
> - Copy images from resources and add restaurant img

#### 6. Filter the restaurants

**Steps:**

> - `ember g controller restaurants`
> - Copy the cuisines object from resources/cuisines.js
> - Add a new panel to templates/restaurants.hbs with a power-select-multiple
> - Add a button with action `filter`

![](http://www.twiki.org/p/pub/TWiki06x00/TWikiDocGraphics/tip.gif) _BONUS TRACK:_ Create helper that receives an array of numbers and shows the name of the weekday.

#### 7. Add rating stars and filter by it

**Steps:**

> - `ember install ember-cli-star-rating`
> - Add to template/restaurants.hbs to show the restaurants rating and the filter
