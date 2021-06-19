// ==UserScript==
// @name           salf.uc.js
// @include        main
// @version        3.4
// @note           github.com/thepante
// ==/UserScript==

/* - - - - - - - - - - -  SETTINGS  - - - - - - - - - - - - - - - */

const float_mode = {
  enabled: true,
  config: {
    width: '280px',
    height: '100%',
    position: 'right',
    shadow_intst: 0.12,
    transparent: false,
    // -- sliding settings
    slide: true,
    fade: true,
    speed: 0.1,
    // -- partially hide
    part_hide: {
      enabled: false,
      shrinked_width: '32px',
      expands_onhover: true,
      shrinks_onleave: true,
    }
  }
};

const shortcut = {
  enabled: false,
  modifier: 'ctrl',
  key: 'e',
  auto_close: true,
}

const hide_sidebar_header = false;


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const sidebar = document.getElementById('sidebar');
const sidebarBox = document.getElementById('sidebar-box');
const sidebarBtnClose = document.getElementById('sidebar-close');
const sidebarHeader = document.getElementById('sidebar-header');

let sidebarButton;
let isSidebarOpen = false;

const sidebar_height = float_mode.config.part_hide.enabled ? '100%' : float_mode.config.height;

const style_classic = `
  #sidebar-box { display: inherit; }
  #sidebar-box + #sidebar-splitter { display: inherit; }
  #sidebar-box.hide { display: none; }
  #sidebar-box.hide + #sidebar-splitter { display: none; }
`;

const style_float = () => `
  ${ float_mode.config.part_hide.enabled
    ? `#appcontent { margin-right: ${float_mode.config.part_hide.shrinked_width }}`
    : ''
  }
  #sidebar-splitter { display: none; }
  #sidebar-header { width: 100% !important; }
  ${ sidebar_height != '100%' ? `
    #sidebar-box, #sidebar-box #sidebar {
      border-bottom-${float_mode.config.position == 'right' ? 'left' : 'right'}-radius: 4px;
    }
  ` : ''}
  #sidebar-box {
    --sidebar-width: ${float_mode.config.width};
    --sidebar-height: calc(${float_mode.config.height} - ${window.innerHeight - browser.clientHeight}px);
    --sidebar-offset-right: ${float_mode.config.part_hide.shrinked_width};
    transition: all ${float_mode.config.speed}s ease-in-out;
    position: absolute;
    display: block;
    float: right;
    ${float_mode.config.position}: 0;
    width: var(--sidebar-width) !important;
    height: var(--sidebar-height) !important;
    box-shadow: rgba(0, 0, 0, ${float_mode.config.shadow_intst}) 5px 15px 60px 42px;
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
    max-width: 100% !important;
    height: calc(100% ${!hide_sidebar_header ? `- 42px` : ''}) !important;
  }
  #sidebar-box.hide {
    box-shadow: none;
    ${ float_mode.config.slide
      ? `--placement-offset: calc(var(--sidebar-width) * -1);
        ${float_mode.config.position}:
          ${float_mode.config.part_hide.enabled
            ? `calc(var(--placement-offset) + ${float_mode.config.part_hide.shrinked_width});`
            : 'var(--placement-offset);'
        }`
      : 'display: none;'
    }
    ${ float_mode.config.fade && !float_mode.config.part_hide.enabled &&
      'opacity: 0;'
    }
  }
`;

// Append stylesheet to the browser document
// In a function to call later on. Thats because the float stylesheet is
// also in a func to call and define when info about top offset is correct
function setStylesheet() {
  try {
    const s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.setAttribute('id', 'salf');
    s.appendChild(document.createTextNode(
      float_mode.enabled ? style_float() : style_classic
    ));
    document.head.appendChild(s);
  } catch (error) {
    console.debug(error);
  }
}

function showSidebar() {
  isSidebarOpen = true;
  sidebarBox.hidden = false;
  sidebarButton && (sidebarButton.checked = true);
  sidebarBox.classList.remove('hide');
}

function hideSidebar() {
  isSidebarOpen = false;
  sidebarBox.hidden = true;
  sidebarButton && (sidebarButton.checked = false);
  sidebarBox.classList.add('hide');
}

// Button functionality
const buttonBehavior = () => isSidebarOpen ? hideSidebar() : showSidebar();

// Add salf behavior
const apply = function() {
  sidebarButton = document.getElementById('sidebar-button');

  if (hide_sidebar_header) sidebarHeader.style.display = 'none';
  if (!isSidebarOpen && sidebarButton) sidebarButton.checked = false;

  setStylesheet();
  hideSidebar();

  // replace buttons vanilla behavior
  [sidebarButton, sidebarBtnClose].forEach(
    e => e && e.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      buttonBehavior();
    })
  );

  // remove listener to avoid being fired again after panel content is changed
  window.removeEventListener('DOMContentLoaded', apply);
}

window.addEventListener('DOMContentLoaded', apply);

// Shortcut functionality
if (shortcut.enabled) {
  document.onkeydown = function(e) {
    if (e[shortcut.modifier + 'Key'] && e.key.toLowerCase() === shortcut.key.toLowerCase()) {
      e.preventDefault();
      e.stopPropagation();
      buttonBehavior();
    }
  };

  // auto hide sidebar when modifier + click inside its content
  if (shortcut.auto_close) {
    sidebar.onclick = function(e) {
      if (e[shortcut.modifier + 'Key']) hideSidebar();
    }
  }
}

if (float_mode.config.part_hide.enabled) {
  sidebarBox.onmouseenter = function(e) {
    e.preventDefault();
    e.stopPropagation();
    showSidebar();
  };

  if (float_mode.config.part_hide.shrinks_onleave) {
    sidebarBox.onmouseleave = function(e) {
      e.preventDefault();
      e.stopPropagation();
      hideSidebar();
    }
  }
}

console.log('salf → loaded ok');

