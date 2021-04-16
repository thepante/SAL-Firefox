// ==UserScript==
// @name           salf.uc.js
// @include        main
// @version        3.0
// @note           github.com/thepante
// ==/UserScript==

// Settings
const float_mode = {
  enabled: false,
  config: {
    width: '280px',
    height: '600px',
    transparent: false,
    slide: true,
    fade: false,
  }
};

const shortcut = {
  modifier: 'ctrl',
  key: 'e',
}

const hide_sidebar_header = false;


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const sidebarBox = document.getElementById('sidebar-box');
const sidebarBtnClose = document.getElementById('sidebar-close');
const sidebarHeader = document.getElementById('sidebar-header');

let sidebarButton;
let isSidebarOpen = false;

const style_classic = `
  #sidebar-box { display: inherit; }
  #sidebar-box + #sidebar-splitter { display: inherit; }
  #sidebar-box.hide { display: none; }
  #sidebar-box.hide + #sidebar-splitter { display: none; }
`;

const style_float = `
  #sidebar-splitter { display: none; }
  #sidebar-box {
    --sidebar-width: ${float_mode.config.width};
    --sidebar-height: ${float_mode.config.height};
    transition: all .2s ease-in-out;
    position: absolute;
    display: block;
    float: right;
    right: 0;
    width: var(--sidebar-width) !important;
    height: var(--sidebar-height) !important;
    box-shadow: rgba(0, 0, 0, 0.12) 5px 15px 60px 42px;
    z-index: 100;
    ${ float_mode.config.transparent
      ? `opacity: .8;
         backdrop-filter: blur(12px);`
      : 'opacity: 1;'
    }
  }
  #sidebar-box #sidebar {
    display: block;
    width: 100% !important;
    height: ${ hide_sidebar_header
      ? 'var(--sidebar-height) !important'
      : 'calc(var(--sidebar-height) - 42px) !important'
    };
  }
  #sidebar-box.hide {
    box-shadow: none;
    ${ float_mode.config.slide
      ? 'right: calc(var(--sidebar-width) * -1);'
      : 'display: none;'
    }
    ${ !float_mode.config.fade &&
      'opacity: 0;'
    }
  }
`;

// Append stylesheet to the browser document
try {
  const s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.setAttribute('id', 'salf');
  s.appendChild(document.createTextNode(
    float_mode.enabled ? style_float : style_classic
  ));
  document.head.appendChild(s);
} catch (error) {
  console.debug(error);
}

function showSidebar() {
  isSidebarOpen = true;
  sidebarBox.hidden = false;
  sidebarButton.checked = true;
  sidebarBox.classList.remove('hide');
}

function hideSidebar() {
  isSidebarOpen = false;
  sidebarBox.hidden = true;
  sidebarButton.checked = false;
  sidebarBox.classList.add('hide');
}

// Button functionality
const buttonBehavior = () => isSidebarOpen ? hideSidebar() : showSidebar();

window.addEventListener('load', function() {
  sidebarButton = document.getElementById('sidebar-button');

  if (hide_sidebar_header) sidebarHeader.style.display = 'none';

  // it's not fancy, but this fixes 2 bugs: button appears as checked when
  // shouldn't (at start). that could be fixed changing the previous window
  // listener, but can't! has to be 'load' because if not, that would introduce
  // another bug: autocloses when changing sidebar (content) panel!
  window.addEventListener('DOMContentLoaded', function() {
    if (!isSidebarOpen) sidebarButton.checked = false;
  });

  hideSidebar();

  // replace buttons vanilla behavior
  [sidebarButton, sidebarBtnClose].forEach(
    e => e.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      buttonBehavior();
    })
  );
});

// Shortcut functionality
document.onkeydown = function(e) {
  if (e[shortcut.modifier + 'Key'] && e.key === shortcut.key) {
    e.preventDefault();
    e.stopPropagation();
    buttonBehavior();
  }
};

console.log('salf → loaded ok');

