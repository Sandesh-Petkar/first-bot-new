import NotFound from './actions/404'
import Start from './actions/start'
import Age from './actions/age'
import Buttons from './actions/buttons'
import Bye from './actions/bye'
import Carousel from './actions/carousel'
import ClosedWebview from './actions/closed_webview'
import End from './actions/end'
import Funny from './actions/funny'
import Media from './actions/media'
import Multilanguage from './actions/multilanguage'
import Quickreply from './actions/quickreply'
import QuickreplyResponse from './actions/quickreply_response'
import Webviews from './actions/webviews'
import WebviewsResponse from './actions/webviews_response'
import Welcome from './actions/Welcome'
import Flipkart from './actions/flipkart'
import Amazon from './actions/amazon'
import Sports from './actions/Sports'
import Cricket from './actions/Cricket'
import Football from './actions/football'
import Hockey from './actions/hockey'
// import Bad from './actions/bad'
// import Good from './actions/good'

export const routes = [
  /* Routes map user inputs to actions (React Components)
        A user input is an object like this:
        {
            type: "text", // Input type, it can be one of text, postback, image, video, audio, document, location
            data: "Hello!" // Raw text (or attachment URL if it's a media type)
            payload: "", // This is used when the user has clicked on a button or quick reply
            intent: "smalltalk.greeting" Intent ID according to the NLP backend
        }

        Every route (an entry in this array) is composed by a matching rule and an action.
        A matching rule looks like this: {attribute: test}, which basically means: "take that
        attribute from the user input and apply the test" if test passes, the action defined in
        that route will be triggered.

        There are 3 types of tests:
        - String --> Perfect match
        - Regexp --> Pass the regular expression
        - Function --> Passes if the function returns true

        The rules will be tested in order so if the 1st rule matches, Botonic won't test
        other routes and will execute the 1st action.
        If there are several matching rules in the same route, all of them have to pass
        to consider a match.
        */

  /* The first rule matches if and only if we get the text 'start' and will execute the 
        React component defined in pages/actions/start.js */
  { path: 'start', text: 'start', action: Start },
  { path: 'welcome', text: 'hey', action: Welcome ,
        childRoutes:[
            {
                  path: 'amazon',
                  payload: 'amazon',
                  action: Amazon,
                },
                {
                  path: 'flipkart',
                  payload: 'flipkart',
                  action: Flipkart,
                },
        ]

},

  /* Another text rule (perfect match) to trigger the 'end' action */
  { path: 'end', text: 'done', action: End

//   childRoutes:[
//       {
//             path:'good',
//             payload:'good',
//             action:Good,
//       },
//       {
//           path:'bad',
//           payload:'bad',
//           action:Bad,
//     },
    
// ]

},

  {path:'sports',text:'sports',action:Sports,

  childRoutes:[
        {
              path:'cricket',
              payload:'cricket',
              action:Cricket
        },
        {
            path:'football',
            payload:'football',
            action:Football
      },
      {
            path:'hockey',
            payload:'hockey',
            action:Hockey
      },
  ]


},

  /* These rules use a case insensitive regexp to match text messages that contain
        a certain text, for example the 1st one will capture 'BUTTONS', 'Buttons', etc */
//   { path: 'buttons', text: /^buttons$/i, action: Buttons },
//   { path: 'quickreply', text: /^quickreply$/i, action: Quickreply },
  /* If you want to use regexp with grouped values, you need to upgrade Node to v.10
        or ahead. This regular expression match 'age-{NUMBER}' where NUMBER can be any digit.
        Then, in your component 'bye', you can access to this that in 'req.params'
        {text: /^age-(?<age>\d*)/, action: "age"},
        */

  /* These rules capture different payloads */
//   { path: 'carousel', payload: 'carousel', action: Carousel },
//   {
//     path: 'quickreply_resp',
//     payload: /^(yes|no)$/,
//     action: QuickreplyResponse
//   },

  /* Here is an example of how you can integrate Facebook Webviews with your bot */
//   { path: 'webviews', text: /^webviews$/i, action: Webviews },
  /* After closing a webview, sometimes we want obtain its data, these are some examples */
//   { path: 'webviews_resp', payload: /^DATA_.*/, action: WebviewsResponse },
//   { path: 'close_wv', payload: 'closed_webview', action: ClosedWebview },

  /* This rule uses a function test to capture any text that starts with 'bye' */
//   { path: 'bye', text: t => t.startsWith('bye'), action: Bye },

  /* Captures any image */
//   { path: 'image', type: 'image', action: Media },

  /* Shows how i18n works in botonic */
//   { path: 'multilang', text: 'multilang', action: Multilanguage },

  /* Captures different intents (enable the Dialogflow integration,
        see "integrations" section at the top of this file) */
//   { path: 'funny', intent: 'smalltalk.agent.funny', action: Funny },
//   { path: 'good', intent: 'smalltalk.agent.good', action: Funny },
//   { path: 'agent', intent: 'smalltalk.user.likes_agent', action: Funny },
//   { path: 'not_found', type: /.*/, action: NotFound }

  /* There's an implicit rule that captures any other input and maps it to
        the 404 action, it would be equivalent to:
        {path: 'not-found', type: /^.*$/, action: NotFound}
        */
]
