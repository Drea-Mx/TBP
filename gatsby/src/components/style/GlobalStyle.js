import { createGlobalStyle } from "styled-components"

import moboeot from '../../assets/fonts/MonumentGrotesk-Bold.eot';
import mobottf from '../../assets/fonts/MonumentGrotesk-Bold.ttf';
import mobowoff from '../../assets/fonts/MonumentGrotesk-Bold.woff';
import mobowoff2 from '../../assets/fonts/MonumentGrotesk-Bold.woff2';

import moreeot from '../../assets/fonts/MonumentGrotesk-Regular.eot';
import morettf from '../../assets/fonts/MonumentGrotesk-Regular.ttf';
import morewoff from '../../assets/fonts/MonumentGrotesk-Regular.woff';
import morewoff2 from '../../assets/fonts/MonumentGrotesk-Regular.woff';

import plreeot from '../../assets/fonts/PlainSuper-Regular.eot';
import plrettf from '../../assets/fonts/PlainSuper-Regular.ttf';
import plrewoff from '../../assets/fonts/PlainSuper-Regular.woff';
import plrewoff2 from '../../assets/fonts/PlainSuper-Regular.woff2';

import saiteot from '../../assets/fonts/SangBleuKingdom-Italic.eot';
import saitttf from '../../assets/fonts/SangBleuKingdom-Italic.ttf';
import saitwoff from '../../assets/fonts/SangBleuKingdom-Italic.woff';
import saitwoff2 from '../../assets/fonts/SangBleuKingdom-Italic.woff2';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Monument Grotesk Bold';
    src: url('${moboeot}');
    src: url('${moboeot}?#iefix') format('embedded-opentype'),
        url('${mobowoff2}') format('woff2'),
        url('${mobowoff}') format('woff'),
        url('${mobottf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Monument Grotesk Regular';
    src: url('${moreeot}');
    src: url('${moreeot}?#iefix') format('embedded-opentype'),
        url('${morewoff2}') format('woff2'),
        url('${morewoff}') format('woff'),
        url('${morettf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Plain Super';
    src: url('${plreeot}');
    src: url('${plreeot}?#iefix') format('embedded-opentype'),
        url('${plrewoff2}') format('woff2'),
        url('${plrewoff}') format('woff'),
        url('${plrettf}') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SangBleu Kingdom';
    src: url('${saiteot}');
    src: url('${saiteot}?#iefix') format('embedded-opentype'),
        url('${saitwoff2}') format('woff2'),
        url('${saitwoff}') format('woff'),
        url('${saitttf}') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

    html {
      scroll-behavior: smooth;
    }
    
    :root {
        --reg: 'Monument Grotesk Regular', sans-serif;
        --bold: 'Monument Grotesk Bold', sans-serif;
        --plain: 'Plain Super', sans-serif;
        --serif: 'SangBleu Kingdom', serif;
        --black: #000000;
        --white: #FFFFFF;
        --blue: #0044FF;
    }
    body {
        background-color: var(--white);
        font-family: var(--reg);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        font-feature-settings: 'salt' on;
        width: 100vw;
        overflow-x: hidden;

        &.no-scroll {
          overflow: hidden;
        }
    }
    main {
    }
    * {
      box-sizing: border-box;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    ::selection {
      background: black;
      color: white;
    }
    button {
      -webkit-appearance: none;
      background: transparent;
      box-shadow: none;
      border: none;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }
    i, em {
      font-family: var(--serif) !important;
      font-style: italic;
    }

    header.true {
      background-color: white !important;
      a {
        color: black !important;
        @media (max-width: 680px) {
            color: white !important;
        }
      }

      .logo .whiteLogo {
        filter: none !important;
    }

    a.active {
      color: var(--blue) !important;
    }

    a:hover {
      color: var(--blue) !important;
    }

    }

    .postPageClass {
      header {
        .ham {
          right: 20px;
          left: auto;
        }
        .logo {
          visibility: hidden;
        }
      }
      footer {
        display: none;
      }
    }

    .projectPageClass {
      header {
        z-index: 0;
      }
      footer {
        display: none;
      }
    }

  .indexPageClass {
    header {
      background-color: transparent;
      .ham {
          .line {
            background-color: white;
          }
        }
      .links {
        li {
          a {
            color: white;
          }
        }
      }
      .logo {
        filter: brightness(0) invert(1);
      }
    }
    header.true {
      .ham {
          .line {
            background-color: black;
          }
        }
        .logo {
          filter: none;
        }
    }
  }

  header {
    .links {
      a {
        font-family: var(--plain) !important;
      }
    }
  }
`